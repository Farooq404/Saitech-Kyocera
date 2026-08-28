import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saitech Kyocera Services | Kyocera Printer & Photocopier Dealer, Kurnool",
  description:
    "Saitech Kyocera Services is an authorized Kyocera printer & photocopier partner in Kurnool, Andhra Pradesh. Genuine Kyocera MFPs, printers, toner cartridges, spare parts, AMC & on-site repair service.",
  keywords: [
    "Kyocera dealer Kurnool",
    "Kyocera printer service Andhra Pradesh",
    "Kyocera photocopier repair",
    "Kyocera MFP dealer",
    "Kyocera toner cartridge",
    "Saitech Kyocera Services",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body text-ink antialiased">{children}</body>
    </html>
  );
}
