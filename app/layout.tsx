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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
