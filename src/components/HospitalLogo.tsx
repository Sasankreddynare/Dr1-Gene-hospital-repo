import { useState } from "react";

interface HospitalLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function HospitalLogo({ className = "h-14", variant = "dark" }: HospitalLogoProps) {
  const isLight = variant === "light";
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      {!hasError ? (
        <img 
          src="/logo.png" 
          alt="Dr1 Gene Hospital Logo" 
          className="h-full w-auto object-contain select-none"
          referrerPolicy="no-referrer"
          // If we are in the footer (dark background) and need a light logo, we can apply an elegant filter to make it crisp on dark background
          style={isLight ? { filter: "brightness(0) invert(1)" } : undefined}
          onError={(e) => {
            const img = e.currentTarget;
            const currentSrc = img.src;
            if (currentSrc.endsWith("/logo.png")) {
              img.src = "/logo.jpg";
            } else if (currentSrc.endsWith("/logo.jpg")) {
              img.src = "/logo.jpeg";
            } else if (currentSrc.endsWith("/logo.jpeg")) {
              img.src = "/logo.svg";
            } else {
              setHasError(true);
            }
          }}
        />
      ) : (
        <div className="flex flex-col text-left">
          <span className={`font-black text-xl leading-none tracking-tight ${isLight ? "text-white" : "text-[#1160a2]"}`}>
            Dr1 <span className="text-[#2ebcc5]">Gene</span>
          </span>
          <span className={`text-[9px] font-semibold tracking-wider uppercase mt-0.5 ${isLight ? "text-blue-300" : "text-[#1160a2]"}`}>
            We Find We Treat
          </span>
        </div>
      )}
    </div>
  );
}
