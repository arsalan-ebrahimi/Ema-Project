// ==========================================
// UI Component: Textarea
// Cinema-styled textarea with character counter option
// ==========================================

import React, { forwardRef } from "react";

export const Textarea = forwardRef(
  (
    {
      label,
      error,
      id,
      name,
      rows = 4,
      placeholder = "",
      required = false,
      className = "",
      containerClassName = "",
      ...props
    },
    ref
  ) => {
    const textareaId = id || name;

    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs md:text-sm font-semibold text-[#f6f1c9]/90 flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-red-400 mr-1">*</span>}
            </span>
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className={`
            w-full rounded-xl bg-[#0e1017] px-4 py-3 text-sm text-[#f6f1c9]
            border border-[#f6f1c9]/15 placeholder:text-[#f6f1c9]/35
            transition-all duration-200 resize-y
            focus:border-[#f6f1c9]/60 focus:bg-[#131622] focus:outline-none focus:ring-2 focus:ring-[#f6f1c9]/20
            disabled:cursor-not-allowed disabled:opacity-50
            ${error ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-400 mt-1 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
