// ==========================================
// UI Component: Lightbox
// Cinematic photo preview modal with keyboard and touch navigation
// ==========================================

import React, { useEffect, useCallback } from "react";
import { X, ChevronRight, ChevronLeft, Film } from "lucide-react";

export default function Lightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
}) {
  const currentImage = images[currentIndex];

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate?.(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate?.(prevIdx);
  }, [currentIndex, images.length, onNavigate]);

  const handleImageError = (e) => {
    const currentSrc = e.currentTarget.getAttribute("src");
    if (currentSrc && currentSrc.endsWith(".webp")) {
      e.currentTarget.src = currentSrc.replace(".webp", ".jpg");
    } else if (currentSrc && currentSrc.endsWith(".jpg")) {
      e.currentTarget.src = currentSrc.replace(".jpg", ".png");
    } else if (currentSrc && currentSrc.endsWith(".png")) {
      e.currentTarget.src = currentSrc.replace(".png", ".jpeg");
    } else {
      e.currentTarget.style.display = "none";
      if (e.currentTarget.nextElementSibling) {
        e.currentTarget.nextElementSibling.style.display = "flex";
      }
    }
  };

  const handleImageLoad = (e) => {
    e.currentTarget.style.display = "block";
    if (e.currentTarget.nextElementSibling) {
      e.currentTarget.nextElementSibling.style.display = "none";
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") handlePrev(); // RTL: right goes to prev/next
      if (e.key === "ArrowLeft") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-4 inset-x-4 md:inset-x-8 flex items-center justify-between text-[#f6f1c9] z-20 pointer-events-none"
      >
        <div className="flex items-center gap-2 pointer-events-auto bg-[#131620]/80 px-4 py-2 rounded-full border border-[#f6f1c9]/15">
          <Film className="w-4 h-4 text-[#2a5baa]" />
          <span className="text-xs font-bold">
            {currentIndex + 1} از {images.length}
          </span>
          {currentImage.title && (
            <span className="text-xs text-[#f6f1c9]/70 border-r border-[#f6f1c9]/20 pr-2 mr-1">
              {currentImage.title}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-[#131620]/80 text-[#f6f1c9] hover:bg-[#2a5baa] border border-[#f6f1c9]/20 transition-all"
          aria-label="بستن گالری"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation: Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#131620]/80 border border-[#f6f1c9]/20 text-[#f6f1c9] hover:bg-[#2a5baa] transition-all"
            aria-label="عکس بعدی"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#131620]/80 border border-[#f6f1c9]/20 text-[#f6f1c9] hover:bg-[#2a5baa] transition-all"
            aria-label="عکس قبلی"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image View */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-[#f6f1c9]/20 shadow-2xl shadow-black/80 bg-[#0d0f15] max-h-[75vh]">
          <img
            src={currentImage.src}
            alt={currentImage.title || "عکس خاطرات عما"}
            className="w-full h-full object-contain max-h-[75vh]"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          {/* Fallback frame if file doesn't exist yet */}
          <div className="hidden w-full min-w-[320px] md:min-w-[600px] h-[400px] flex-col items-center justify-center p-8 bg-gradient-to-br from-[#121520] to-[#0a0c10] border border-[#f6f1c9]/20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#2a5baa]/20 border border-[#2a5baa]/40 flex items-center justify-center mb-4">
              <Film className="w-8 h-8 text-[#f6f1c9]" />
            </div>
            <p className="text-lg font-bold text-[#f6f1c9] mb-1">
              {currentImage.title || `خاطره ${currentIndex + 1}`}
            </p>
            <p className="text-xs text-[#f6f1c9]/60 font-mono tracking-wider">
              {currentImage.id || `IMG_${currentIndex + 1}.JPG`} • FRAME 35MM
            </p>
          </div>
        </div>

        {/* Caption */}
        {currentImage.title && (
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-[#f6f1c9]">
              {currentImage.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
