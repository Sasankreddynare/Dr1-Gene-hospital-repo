import { HOSPITAL_CONTACT } from "../data";

interface HospitalLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function HospitalLogo({ className = "h-14", variant = "dark" }: HospitalLogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 540 160" 
        className="h-full w-auto select-none"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Gradient for the 3D Sphere */}
          <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%" fx="25%" fy="25%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="45%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>

          {/* Linear Gradient for the Cyan/Teal Ribbon Curve */}
          <linearGradient id="cyanRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Linear Gradient for the Dark Grey Ribbon Curve */}
          <linearGradient id="greyRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* 1. Left Blue Sphere */}
        <circle cx="85" cy="80" r="58" fill="url(#sphereGrad)" />

        {/* 2. Text "Dr1" inside Sphere */}
        <text 
          x="85" 
          y="93" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="38" 
          fill="#ffffff" 
          textAnchor="middle"
        >
          Dr1
        </text>

        {/* 3. Overlapping 3D Ribbon Wave (Light Cyan & Dark Grey) */}
        {/* Grey Ribbon Layer (Back and under loop) */}
        <path 
          d="M 125,82 C 115,108 142,128 178,118 C 210,110 180,82 160,80 C 140,78 130,68 125,82 Z" 
          fill="url(#greyRibbon)" 
        />
        {/* Cyan Ribbon Layer (Front and over loop) */}
        <path 
          d="M 125,82 C 145,52 188,48 205,78 C 185,98 152,98 125,82 Z" 
          fill="url(#cyanRibbon)" 
        />

        {/* 4. Wordmark "Gene" */}
        <text 
          x="215" 
          y="104" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="700" 
          fontSize="84" 
          letterSpacing="-0.02em"
        >
          <tspan fill={isLight ? "#ffffff" : "#074da6"}>Ge</tspan>
          <tspan fill="#02afb5">ne</tspan>
        </text>

        {/* 5. Tagline "We Find We Treat" */}
        <text 
          x="215" 
          y="142" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="600" 
          fontSize="24" 
          letterSpacing="0.14em" 
          fill={isLight ? "#93c5fd" : "#074da6"}
        >
          We Find We Treat
        </text>
      </svg>
    </div>
  );
}
