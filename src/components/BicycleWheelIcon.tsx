import { SVGProps } from "react";

export function BicycleWheelIcon({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
      aria-label="Bicycle wheel"
    >
      {/* Outer wheel rim */}
      <circle cx="12" cy="12" r="10" />
      
      {/* Inner hub circle */}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      
      {/* Spokes - 8 spokes for a classic bicycle wheel */}
      <line x1="12" y1="2" x2="12" y2="9.5" />
      <line x1="12" y1="14.5" x2="12" y2="22" />
      <line x1="2" y1="12" x2="9.5" y2="12" />
      <line x1="14.5" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="9.88" y2="9.88" />
      <line x1="14.12" y1="14.12" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="14.12" y2="9.88" />
      <line x1="9.88" y1="14.12" x2="4.93" y2="19.07" />
    </svg>
  );
}

