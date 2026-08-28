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
  const isDark = variant === "dark";
  const blue = isDark ? "#FFFFFF" : "#0B2D63";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-0 group select-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="SaiTech Kyocera Services - Home"
    >
      {/* SAiTECH brand wordmark — replicates the uploaded logo style */}
      <div className="flex flex-col justify-center leading-none">
        {/* SVG wordmark: S A i T E C H with green dot on i */}
        <svg
          viewBox="0 0 200 44"
          height="36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:scale-[1.03]"
        >
          {/* S */}
          <text
            x="0" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={blue}
            letterSpacing="-1"
          >S</text>
          {/* A */}
          <text
            x="26" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={blue}
            letterSpacing="-1"
          >A</text>
          {/* i stem (no dot — we draw it manually) */}
          <text
            x="56" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill="#3AAA35"
            letterSpacing="-1"
          >i</text>

          {/* T */}
          <text
            x="71" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={blue}
            letterSpacing="-1"
          >T</text>
          {/* E */}
          <text
            x="97" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={blue}
            letterSpacing="-1"
          >E</text>
          {/* C */}
          <text
            x="122" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={blue}
            letterSpacing="-1"
          >C</text>
          {/* H */}
          <text
            x="150" y="36"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="38"
            fill={blue}
            letterSpacing="-1"
          >H</text>
        </svg>

        <span className="font-display font-semibold text-[10px] uppercase tracking-[0.22em] text-accent-green mt-0.5 leading-none pl-0.5">
          Systems and Services
        </span>
      </div>
    </Link>
  );
}
