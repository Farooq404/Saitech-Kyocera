const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 table & function
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function createPNG(width, height, drawFn) {
  // Raw scanline buffer: height rows, each row is 1 filter byte (0) + width * 4 RGBA bytes
  const rowSize = 1 + width * 4;
  const raw = Buffer.alloc(height * rowSize, 0);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    raw[rowOffset] = 0; // Filter byte 0 (None)
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      raw[pixelOffset] = r;
      raw[pixelOffset + 1] = g;
      raw[pixelOffset + 2] = b;
      raw[pixelOffset + 3] = a;
    }
  }

  const idatData = zlib.deflateSync(raw, { level: 9 });

  function makeChunk(typeStr, dataBuf) {
    const typeBuf = Buffer.from(typeStr, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(dataBuf.length, 0);

    const toCrc = Buffer.concat([typeBuf, dataBuf]);
    const crcVal = crc32(toCrc);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);

    return Buffer.concat([lenBuf, toCrc, crcBuf]);
  }

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Drawing function for the printer geometric mark on a transparent or clean rounded-badge background
function drawIcon(x, y, w, h) {
  // Normalize coordinates to 0..32 space
  const nx = (x / w) * 32;
  const ny = (y / h) * 32;

  // Colors:
  // Accent Orange: #F5A623 -> [245, 166, 35]
  // Dark Navy: #0B2D63 -> [11, 45, 99]
  // Light Orange fill: #FDF3E3 -> [253, 243, 227]
  // White: [255, 255, 255]

  // Optional rounded background badge for apple touch icon
  const isApple = w >= 180;
  if (isApple) {
    // 180x180 with clean rounded navy/soft background
    const cornerR = 36;
    const pad = 12;
    if (x < pad || x > w - pad || y < pad || y > h - pad) {
      // Outside padding
    }
  }

  // Geometric printer shape:
  // 1. Top feeder: x in [9..23], y in [4..10], hollow with 2px stroke
  // 2. Main chassis: x in [3.5..28.5], y in [10..22], rounded rect
  // 3. Bottom tray: x in [8..24], y in [18..26]
  // 4. Status dot: (23.5, 14), r=1.5

  const orange = [245, 166, 35, 255];
  const darkNavy = [11, 45, 99, 255];
  const orangeSoft = [245, 166, 35, 50];
  const white = [255, 255, 255, 255];

  // Check top paper:
  if (nx >= 8.5 && nx <= 23.5 && ny >= 3.5 && ny <= 10.5) {
    const isBorder = nx <= 10.5 || nx >= 21.5 || ny <= 5.5;
    if (isBorder) return orange;
    return [255, 255, 255, 220];
  }

  // Check status dot:
  const dotDx = nx - 23.5;
  const dotDy = ny - 14;
  if (dotDx * dotDx + dotDy * dotDy <= 2.8) {
    return orange;
  }

  // Check slot line:
  if (nx >= 7.5 && nx <= 17.5 && Math.abs(ny - 14) <= 1.1) {
    return orange;
  }

  // Check main body rect (3.5 to 28.5, 10 to 22)
  if (nx >= 3.5 && nx <= 28.5 && ny >= 10 && ny <= 22) {
    const isOuterBorder = nx <= 5.5 || nx >= 26.5 || ny <= 12 || (ny >= 20 && (nx < 8 || nx > 24));
    if (isOuterBorder) return orange;
    return orangeSoft;
  }

  // Check bottom output tray (8 to 24, 18 to 26)
  if (nx >= 8 && nx <= 24 && ny >= 18 && ny <= 26) {
    const isTrayBorder = nx <= 10 || nx >= 22 || ny >= 24;
    if (isTrayBorder) return orange;
    // Tray paper line at ny=22
    if (nx >= 11 && nx <= 21 && Math.abs(ny - 22) <= 1.0) {
      return orange;
    }
    return [255, 255, 255, 255];
  }

  return [0, 0, 0, 0]; // Transparent
}

// Ensure public dir exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

const png16 = createPNG(16, 16, drawIcon);
const png32 = createPNG(32, 32, drawIcon);
const png180 = createPNG(180, 180, drawIcon);

fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);

// Create .ico containing 16x16 and 32x32 PNG entries
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4); // count

  const dirEntries = [];
  let offset = 6 + count * 16;

  const sizes = [16, 32];
  for (let i = 0; i < count; i++) {
    const buf = pngBuffers[i];
    const size = sizes[i] || 32;
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0); // width
    entry.writeUInt8(size, 1); // height
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

const ico = createIco([png16, png32]);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);

// Also write SVG favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path d="M9 10V5C9 4.44772 9.44772 4 10 4H22C22.5523 4 23 4.44772 23 5V10" stroke="#F5A623" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="3.5" y="10" width="25" height="12" rx="3" fill="#F5A623" fill-opacity="0.15" stroke="#F5A623" stroke-width="2.2"/>
  <line x1="7.5" y1="14" x2="17.5" y2="14" stroke="#F5A623" stroke-width="2" stroke-linecap="round"/>
  <circle cx="23.5" cy="14" r="1.5" fill="#F5A623"/>
  <path d="M8 18H24V25C24 25.5523 23.5523 26 23 26H9C8.44772 26 8 25.5523 8 25V18Z" fill="#F5A623" fill-opacity="0.25" stroke="#F5A623" stroke-width="2.2" stroke-linejoin="round"/>
  <line x1="11" y1="22" x2="21" y2="22" stroke="#F5A623" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);

console.log('Favicons generated successfully in public/');
