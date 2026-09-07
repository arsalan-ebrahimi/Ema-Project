// ==========================================
// UI Component: Card
// Atmospheric container card with subtle borders and lighting
// ==========================================

import React from "react";

/**
 * Reusable Card component for cinema-style container panels
 */
export const Card = ({
  children,
  className = "",
  hover = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={`
        relative rounded-2xl bg-[#12151f]/80 backdrop-blur-md
        border border-[#f6f1c9]/10 p-6 md:p-8
        transition-all duration-300
        ${hover ? "hover:border-[#f6f1c9]/25 hover:bg-[#161a27] hover:-translate-y-1" : ""}
        ${glow ? "shadow-[0_0_30px_-5px_rgba(42,91,170,0.3)]" : "shadow-lg shadow-black/40"}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
