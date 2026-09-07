// ==========================================
// UI Component: Badge
// Pill-shaped tag for disciplines, status indicators, and subtitles
// ==========================================

import React from "react";

export const Badge = ({
  children,
  variant = "cream",
  size = "md",
  className = "",
  icon = null,
}) => {
  const variants = {
    cream: "bg-[#f6f1c9]/10 text-[#f6f1c9] border border-[#f6f1c9]/20",
    blue: "bg-[#2a5baa]/20 text-[#6ba1ff] border border-[#2a5baa]/40",
    solid: "bg-[#f6f1c9] text-[#08090c] font-bold",
    outline: "border border-[#f6f1c9]/30 text-[#f6f1c9]/80",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1 rounded-full gap-1",
    md: "text-xs md:text-sm px-3.5 py-1.5 rounded-full gap-1.5",
    lg: "text-sm px-4 py-2 rounded-full gap-2",
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-medium tracking-wide ${variants[variant] || variants.cream} ${sizes[size] || sizes.md} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
