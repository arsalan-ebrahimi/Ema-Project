// ==========================================
// UI Component: Button
// Versatile cinema button supporting variants, icons, and link forwarding
// ==========================================

import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

/**
 * Reusable Button component for Ema Cinema
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Button content
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type
 * @param {'primary'|'secondary'|'outline'|'ghost'|'glow'} [props.variant='primary'] - Visual style
 * @param {'sm'|'md'|'lg'|'icon'} [props.size='md'] - Size variant
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {React.ReactNode} [props.icon=null] - Leading/Trailing icon
 * @param {string} [props.className=''] - Extra classes
 * @param {string} [props.to] - If provided, renders as React Router Link
 * @param {string} [props.href] - If provided, renders as HTML anchor
 * @param {Function} [props.onClick] - Click handler
 */
export const Button = forwardRef(
  (
    {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      disabled = false,
      icon = null,
      iconPosition = "right",
      className = "",
      to,
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseClasses =
      "inline-flex items-center justify-center font-bold select-none cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6f1c9]/40 disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden tracking-normal";

    // Size variants
    const sizeClasses = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5 min-h-[36px]",
      md: "text-sm px-6 py-2.5 rounded-xl gap-2 min-h-[44px]",
      lg: "text-base px-8 py-3.5 rounded-xl gap-2.5 min-h-[52px]",
      icon: "p-2.5 rounded-xl text-sm min-h-[42px] min-w-[42px] justify-center",
    };

    // Cinema style variants
    const variantClasses = {
      primary:
        "bg-[#f6f1c9] text-[#08090c] hover:bg-[#eae3b0] active:scale-[0.98] shadow-md hover:shadow-lg hover:shadow-[#f6f1c9]/20",
      secondary:
        "bg-[#2a5baa] text-[#f6f1c9] hover:bg-[#1f478a] active:scale-[0.98] shadow-md hover:shadow-lg hover:shadow-[#2a5baa]/30",
      outline:
        "border border-[#f6f1c9]/25 bg-[#131620]/60 text-[#f6f1c9] hover:border-[#f6f1c9]/60 hover:bg-[#131620] active:scale-[0.98] backdrop-blur-sm",
      ghost:
        "bg-transparent text-[#f6f1c9] hover:bg-[#f6f1c9]/10 active:bg-[#f6f1c9]/15",
      glow:
        "bg-[#f6f1c9] text-[#08090c] hover:bg-[#fffbc4] shadow-[0_0_25px_rgba(246,241,201,0.4)] hover:shadow-[0_0_35px_rgba(246,241,201,0.6)] active:scale-[0.98]",
    };

    const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

    const content = (
      <>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
        {children && <span>{children}</span>}
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (to) {
      return (
        <Link ref={ref} to={to} className={combinedClasses} onClick={onClick} {...props}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a ref={ref} href={href} className={combinedClasses} onClick={onClick} {...props}>
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
