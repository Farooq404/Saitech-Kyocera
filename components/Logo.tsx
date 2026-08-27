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

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group select-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="SaiTech Kyocera Services - Home"
    >
      {/* Minimal geometric symbol */}
      <div className="shrink-0 text-accent-orange flex items-center justify-center">
        <LogoMark className="w-8 h-8 transition-transform duration-200 group-hover:scale-105" />
      </div>

      {/* Text lockup */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-extrabold tracking-tight text-[1.28rem] leading-none ${
            isDark ? "text-white" : "text-[#0B2D63]"
          }`}
        >
          SaiTech
        </span>
        <span className="font-display font-semibold text-[10px] uppercase tracking-[0.18em] text-accent-orange mt-1 leading-none">
          Kyocera Services
        </span>
      </div>
    </Link>
  );
}
