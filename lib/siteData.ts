export const site = {
  name: "Saitech",
  nameSub: "Kyocera Services",
  phone: "+91 99494 10109",
  phoneHref: "tel:+919949410109",
  whatsapp: "https://wa.me/919949410109",
  email: "kyoceratechservices@gmail.com",
  address:
    "Shop No:20, KE PLAZA, Beside Bank Of Baroda, R S Road, Kurnool - 518001, Andhra Pradesh",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Contact Us", href: "/contact" },
];

export const categories = [
  { label: "B/W MFP's", key: "bw-mfp" },
  { label: "Color MFP's", key: "color-mfp" },
  { label: "B/W Printers", key: "bw-printers" },
  { label: "Color Printers", key: "color-printers" },
  { label: "Cartridges", key: "cartridges" },
  { label: "Consumables", key: "consumables" },
  { label: "Spare Parts", key: "spare-parts" },
  { label: "AMC & Service", key: "amc" },
];

export const trustBadges = [
  {
    title: "Authorized Kyocera Dealer",
    subtitle: "Genuine Kyocera Hardware & Manufacturer Warranty",
    badge: "Official Partner",
  },
  {
    title: "Serving Kurnool & Surrounding Areas",
    subtitle: "Prompt On-Site Delivery, Setup & Service Calls",
    badge: "Local Support",
  },
  {
    title: "Certified Technicians & Genuine Parts",
    subtitle: "Authentic Toners, Spares & Factory-Trained Engineers",
    badge: "100% Genuine",
  },
];

export const aboutInfo = {
  businessName: "SaiTech Kyocera Services",
  category: "Kyocera Printer & Photocopier Dealer — Authorized Distributor & Premium Partner",
  description:
    "Saitech Kyocera Services is an authorized Kyocera printer and photocopier dealer based in Kurnool, Andhra Pradesh. We specialize in genuine Kyocera machines including B/W & Color Multifunction Printers (MFPs), B/W & Color Printers, along with original cartridges, consumables, and spare parts. Our certified technicians provide fast, reliable on-site support and flexible Annual Maintenance Contracts (AMC) to keep your business running smoothly.",
  highlights: [
    {
      title: "100% Genuine Parts",
      desc: "Only authentic Kyocera hardware & consumables",
    },
    {
      title: "Certified Technicians",
      desc: "Trained and factory-certified on Kyocera systems",
    },
    {
      title: "Fast On-site Support",
      desc: "Prompt visits across Kurnool & surrounding areas",
    },
    {
      title: "Flexible AMC Plans",
      desc: "Sales, service and maintenance under one roof",
    },
  ],
};

export type Product = {
  slug: string;
  badge?: string;
  category: string;
  name: string;
  description: string;
  image?: string;
  specs: { label: string; value: string }[];
  highlights?: string[];
};

export const products: Product[] = [
  {
    slug: "kyocera-ecosys-p2235dn",
    category: "B/W Printers",
    name: "Kyocera Ecosys P2235dn",
    description:
      "A fast, dependable monochrome desktop printer engineered with Kyocera's long-life components for demanding office workloads and low total cost of ownership.",
    image: "/products/img3-Kyocera-Ecosys- P2235dn.png",
    specs: [
      { label: "Function", value: "Print Only" },
      { label: "Speed", value: "35 Pages Per Minute (A4)" },
      { label: "Resolution", value: "1200 x 1200 DPI" },
      { label: "Duplex", value: "Automatic Double-Sided Printing" },
      { label: "Networking", value: "Advanced Network (Ethernet) & High-Speed USB" },
      { label: "Direct USB", value: "Print directly from USB Pen Drive" },
      { label: "Duty Cycle", value: "Monthly Duty Cycle up to 1,00,000 copies" },
      { label: "Compatibility", value: "Windows, Mac OS & Linux Support" },
    ],
    highlights: [
      "Heavy duty duty cycle up to 1,00,000 copies/month",
      "High quality 1200 x 1200 DPI crisp text output",
      "Plug & play USB pen drive direct printing",
      "Built-in duplex unit to save paper costs",
    ],
  },
  {
    slug: "kyocera-ecosys-m6630cidn",
    category: "Color MFP",
    name: "Kyocera Ecosys M6630cidn",
    description:
      "High-performance A4 colour multifunction printer with an intuitive touch screen interface, powerful mobile workflows, and robust media handling.",
    image: "/products/img1-Kyocera-Ecosys-M6630cidn.jpg",
    specs: [
      { label: "Functions", value: "Copy, Print, Scan (All-in-One)" },
      { label: "Speed", value: "30 Copies / Prints Per Minute" },
      { label: "Media Weight", value: "Supports up to 220 GSM paper" },
      { label: "Display", value: "Full-Colour Intuitive Touch Screen Panel" },
      { label: "Direct Print", value: "Print directly from USB Pen Drive" },
      { label: "Mobile Printing", value: "AirPrint, Mopria & Kyocera Mobile Print" },
      { label: "OS Support", value: "Windows, Mac OS & Linux" },
      { label: "Device Support", value: "Multiple Device Network Support" },
    ],
    highlights: [
      "Full touch-screen navigation for effortless operation",
      "Heavy paper stock handling up to 220 GSM",
      "Seamless mobile printing from smartphones and tablets",
      "Vibrant business color output with sharp clarity",
    ],
  },
  {
    slug: "kyocera-taskalfa-2554ci",
    category: "Color MFP",
    name: "Kyocera TASKalfa 2554ci",
    description:
      "Enterprise-grade A3 colour multifunction system delivering exceptional colour quality, versatile finishing options, high security, and ultra-low running costs.",
    image: "/products/img5-Kyocera-TASKalfa-2554ci.png",
    specs: [
      { label: "Functions", value: "Copy, Scan, Print" },
      { label: "Paper Sizes", value: "A3, A4, Legal & Custom up to 12 x 48 inch Banner" },
      { label: "Duplex", value: "Automatic Duplex Printing & Duplex Scanning" },
      { label: "Resolution", value: "1200 x 1200 DPI High-Definition Printing" },
      { label: "Media Weight", value: "Supports heavyweight paper up to 300 GSM" },
      { label: "Direct Print", value: "Direct Print from Mobile & USB Pen Drive" },
      { label: "Maintenance", value: "Low Running Cost & Long-Life Ceramic Components" },
      { label: "Specialty", value: "Banner Printing (up to 1.2m length)" },
    ],
    highlights: [
      "Large A3 format & 12x48 inch banner printing capability",
      "Heavy media support up to 300 GSM for cardstocks & covers",
      "High speed duplex copying, printing and network scanning",
      "Industry-leading long-life drum for lowest cost per page",
    ],
  },
  {
    slug: "kyocera-ecosys-ma4000x",
    badge: "New Model",
    category: "B/W MFP",
    name: "Kyocera Ecosys MA4000x",
    description:
      "The next-generation heavy-duty monochrome MFP designed as the modern replacement for the bestselling Kyocera Ecosys M2040dn, built for fast-paced office productivity.",
    image: "/products/img2-Kyocera-Ecosys-MA4000x.jpg",
    specs: [
      { label: "Functions", value: "High-Speed Print, Copy, Scan" },
      { label: "Speed", value: "Up to 40 PPM Mono" },
      { label: "Control Panel", value: "5-Line LCD with Tactile Hard Key Panel" },
      { label: "Duty Cycle", value: "Monthly Duty Cycle up to 50,000 pages" },
      { label: "Model Lineage", value: "Official upgrade to the legendary M2040dn" },
      { label: "Duplex", value: "Standard Automatic Two-Sided Printing" },
      { label: "Connectivity", value: "High-Speed Gigabit Ethernet & USB" },
      { label: "Drum Life", value: "Long-life Kyocera Ecosys Drum" },
    ],
    highlights: [
      "Blazing 40 PPM monochrome printing and copying",
      "Direct successor to the proven M2040dn workhorse",
      "5-line backlit LCD display with quick-access buttons",
      "Designed for high-throughput front office and legal desks",
    ],
  },
  {
    slug: "kyocera-taskalfa-2020",
    category: "B/W MFP",
    name: "Kyocera TASKalfa 2020",
    description:
      "A rugged, high-volume monochrome MFP engineered for commercial photocopy shops and busy workgroups needing extraordinary durability and minimal maintenance.",
    image: "/products/img4-Kyocera-TASKalfa-2020.jpg",
    specs: [
      { label: "Functions", value: "Copy, Print, Scan" },
      { label: "Speed", value: "20 Copies / Prints Per Minute" },
      { label: "Duplex", value: "Integrated Automatic Duplex Printing" },
      { label: "Direct USB", value: "Print directly from USB Pen Drive" },
      { label: "Duty Cycle", value: "Heavy duty up to 2,50,000 copies / month" },
      { label: "OS Support", value: "Windows, Mac OS & Linux Compatibility" },
      { label: "Media Handling", value: "A3 / A4 standard paper cassettes" },
      { label: "Durability", value: "Commercial-grade Kyocera build" },
    ],
    highlights: [
      "Massive 2,50,000 copies monthly duty cycle rating",
      "A3 and A4 document copying, printing, and colour scanning",
      "Direct USB printing for instant walk-up jobs",
      "Rock-solid durability for commercial printing environments",
    ],
  },
  {
    slug: "kyocera-fs-1025mfp",
    category: "B/W MFP",
    name: "Kyocera FS 1025MFP",
    description:
      "A compact, eco-friendly monochrome multifunction laser printer for small businesses, clinics, and branch offices offering whisper-quiet operation and low toner costs.",
    image: "/products/img6-Kyocera FS 1025MFP.png",
    specs: [
      { label: "Functions", value: "Print, Copy & Colour Scan" },
      { label: "Speed", value: "25 Pages Per Minute" },
      { label: "Connectivity", value: "High-Speed USB & Network (Ethernet)" },
      { label: "Duplex", value: "Standard Automatic Duplex Printing" },
      { label: "Acoustics", value: "Dedicated Quiet Mode for noise reduction" },
      { label: "Economy", value: "Long-life drum technology — toner-only replacement" },
      { label: "Paper Sizes", value: "A4, Legal, Letter, Custom media" },
      { label: "Design", value: "Compact space-saving desktop footprint" },
    ],
    highlights: [
      "Toner-only replacement for exceptionally low operating costs",
      "Built-in Ethernet networking and duplex printing",
      "Quiet Mode feature for noise-sensitive workspace environments",
      "Compact footprint ideal for executive desks and small counters",
    ],
  },
];

export const trustPoints = [
  {
    title: "100% Genuine Parts",
    desc: "Only authentic Kyocera hardware & consumables",
  },
  {
    title: "Certified Technicians",
    desc: "Trained and factory-certified on Kyocera systems",
  },
  {
    title: "Fast On-site Support",
    desc: "Prompt visits across Kurnool & surrounding areas",
  },
  {
    title: "Flexible AMC Plans",
    desc: "Sales, service and maintenance under one roof",
  },
];

export const faqs = [
  {
    q: "Are you an authorized Kyocera dealer?",
    a: "Yes. Saitech Kyocera Services is a certified Kyocera partner in Kurnool, supplying genuine Kyocera printers, MFPs, toner and spare parts with manufacturer-backed support.",
  },
  {
    q: "Do you provide installation and setup support?",
    a: "Absolutely — every machine we supply includes on-site installation, network setup and a walkthrough for your team at no extra cost.",
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC)?",
    a: "Yes, we offer flexible AMC plans covering periodic servicing, genuine consumables and priority breakdown support for your Kyocera fleet.",
  },
  {
    q: "What areas do you service?",
    a: "We are based in Kurnool, Andhra Pradesh and service businesses across the city and surrounding areas. Call us to confirm coverage for your location.",
  },
  {
    q: "How do I get genuine Kyocera toner for my printer?",
    a: "Simply share your printer model over call or WhatsApp and we'll confirm stock and delivery of genuine Kyocera toner and drum units.",
  },
];
