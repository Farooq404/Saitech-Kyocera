import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LogoMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Minimal geometric document / printer abstraction */}
      {/* Top paper feeder tray */}
      <path
        d="M9 10V5C9 4.44772 9.44772 4 10 4H22C22.5523 4 23 4.44772 23 5V10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Main printer chassis */}
      <rect
        x="3.5"
        y="10"
        width="25"
        height="12"
        rx="3"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      {/* Feed slot line */}
      <line
        x1="7.5"
        y1="14"
        x2="17.5"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Status indicator LED */}
      <circle cx="23.5" cy="14" r="1.5" fill="currentColor" />
      {/* Output paper tray */}
      <path
        d="M8 18H24V25C24 25.5523 23.5523 26 23 26H9C8.44772 26 8 25.5523 8 25V18Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <line
        x1="11"
        y1="22"
        x2="21"
        y2="22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="SaiTech Systems and Services - Home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/saitech-logo.jpg"
        alt="SAiTECH Systems and Services"
        height={68}
        className="h-[68px] w-auto object-contain"
      />
    </Link>
  );
}

