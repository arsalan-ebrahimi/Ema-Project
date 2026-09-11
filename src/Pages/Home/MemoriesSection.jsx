// ==========================================
// Page Section: Memories (خاطرات ما)
// Dynamic photo album with Swiper Carousel & Masonry view toggle
// ==========================================

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  Camera,
  LayoutGrid,
  Sliders,
  Maximize2,
  Film,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { MEMORIES_DATA } from "../../Constants/memories";
import { Badge } from "../../Components/UI";
import Lightbox from "../../Components/Lightbox";

// Import Swiper styles
import "swiper/css";

export default function MemoriesSection() {
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'grid'
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Calculate 5 visible dots centered dynamically on the active slide
  const getVisibleDots = (current, total) => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i);
    }
    if (current <= 1) {
      return [0, 1, 2, 3, 4];
    }
    if (current >= total - 2) {
      return [total - 5, total - 4, total - 3, total - 2, total - 1];
    }
    return [current - 2, current - 1, current, current + 1, current + 2];
  };

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

  const openLightbox = (index) => {
    setActivePhotoIdx(index);
    setLightboxOpen(true);
  };

  return (
    <section id="memories" className="relative pt-20 md:pt-28 pb-12 md:pb-16 bg-[#0a0c12] overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#2a5baa]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#f6f1c9]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <Badge
              variant="cream"
              size="md"
              className="mb-3 text-xs font-semibold tracking-wider"
              icon={<Camera className="w-3.5 h-3.5 text-[#2a5baa]" />}
            >
              آلبوم تصاویر
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight">
              لحظه‌های ماندگار خانواده عما
            </h2>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-[#131622] border border-[#f6f1c9]/15 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                viewMode === "slider"
                  ? "bg-[#f6f1c9] text-[#08090c] shadow-md"
                  : "text-[#f6f1c9]/70 hover:text-[#f6f1c9]"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>اسلایدر سینمایی</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-[#f6f1c9] text-[#08090c] shadow-md"
                  : "text-[#f6f1c9]/70 hover:text-[#f6f1c9]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>آلبوم یکپارچه</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Swiper Carousel */}
        {viewMode === "slider" ? (
          <div className="relative pb-2 sm:pb-4 -mx-4 sm:mx-0">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 3800, pauseOnMouseEnter: true, disableOnInteraction: false }}
              grabCursor={true}
              simulateTouch={true}
              allowTouchMove={true}
              touchRatio={1.3}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) =>
                setActiveSlideIndex(swiper.realIndex ?? swiper.activeIndex)
              }
              breakpoints={{
                640: { slidesPerView: 1.8, spaceBetween: 20 },
                768: { slidesPerView: 2.3, spaceBetween: 22 },
                1024: { slidesPerView: 2.8, spaceBetween: 24 },
                1280: { slidesPerView: 3.2, spaceBetween: 26 },
                1536: { slidesPerView: 3.5, spaceBetween: 28 },
              }}
              className="memories-swiper !overflow-visible"
            >
              {MEMORIES_DATA.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-[#f6f1c9]/15 shadow-lg md:shadow-xl md:shadow-black/70 cursor-pointer transition-all duration-300 hover:border-[#f6f1c9]/40 hover:-translate-y-1.5"
                  >
                    {/* Balanced cinema frame: compact, refined and elegant */}
                    <div className="relative aspect-[3/2] h-[200px] sm:h-[230px] md:h-[260px] lg:h-[290px] xl:h-[310px] w-full overflow-hidden bg-gradient-to-br from-[#181c2b] to-[#0a0c12]">
                      <img
                        src={item.src}
                        alt="لحظه‌های ماندگار خانواده عما"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                      />

                      {/* Film Still Placeholder Artwork */}
                      <div className="hidden w-full h-full flex-col justify-center items-center p-4 bg-gradient-to-t from-[#06080d] via-[#101422] to-[#171c2e]">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2a5baa]/20 border border-[#2a5baa]/40 flex items-center justify-center text-[#f6f1c9]">
                          <Film className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>

                      {/* Cinematic Viewfinder Focus Overlay (No Center Button Blocking Photo) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-between p-3.5 sm:p-4">
                        {/* Top Bar: Viewfinder Frame Stamp */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-[#f6f1c9]/20 text-[10px] font-mono text-[#f6f1c9]/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span>REC</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#f6f1c9]/60 tracking-wider">
                            35MM STILL
                          </span>
                        </div>

                        {/* Viewfinder Reticle Corners */}
                        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#f6f1c9]/70 rounded-tr pointer-events-none" />
                        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#f6f1c9]/70 rounded-tl pointer-events-none" />
                        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#f6f1c9]/70 rounded-br pointer-events-none" />
                        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#f6f1c9]/70 rounded-bl pointer-events-none" />

                        {/* Bottom Floating Glass Capsule Pill */}
                        <div className="flex items-center justify-center transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d101a]/90 backdrop-blur-md border border-[#f6f1c9]/35 text-[#f6f1c9] shadow-xl text-[11px] sm:text-xs font-medium">
                            <Maximize2 className="w-3.5 h-3.5 text-[#2a5baa]" />
                            <span>مشاهده در ابعاد بزرگ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Cinematic Dots & Frame Controller (Flawless, perfectly centered on all screens) */}
            <div className="flex items-center justify-center mt-5 sm:mt-7">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#111420]/95 border border-[#f6f1c9]/20 backdrop-blur-xl shadow-2xl shadow-black/80">
                {/* Prev Slide Button */}
                <button
                  type="button"
                  onClick={() => swiperInstance?.slidePrev()}
                  className="p-1 rounded-full text-[#f6f1c9]/70 hover:text-[#f6f1c9] hover:bg-[#f6f1c9]/10 transition-all focus:outline-none cursor-pointer"
                  aria-label="قاب قبلی"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* 5 Centered Dynamic Dots */}
                <div className="flex items-center gap-1.5 px-1" dir="ltr">
                  {getVisibleDots(activeSlideIndex, MEMORIES_DATA.length).map((targetIdx) => {
                    const isActive = targetIdx === activeSlideIndex;
                    const isAdjacent = Math.abs(targetIdx - activeSlideIndex) === 1;
                    return (
                      <button
                        key={targetIdx}
                        type="button"
                        onClick={() => {
                          if (swiperInstance) {
                            if (typeof swiperInstance.slideToLoop === "function") {
                              swiperInstance.slideToLoop(targetIdx);
                            } else {
                              swiperInstance.slideTo(targetIdx);
                            }
                          }
                        }}
                        className={`rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                          isActive
                            ? "w-5 sm:w-6 h-2 bg-[#f6f1c9] shadow-[0_0_10px_rgba(246,241,201,0.85)] scale-105"
                            : isAdjacent
                            ? "w-2 h-2 bg-[#f6f1c9]/45 hover:bg-[#f6f1c9]/80"
                            : "w-1.5 h-1.5 bg-[#f6f1c9]/25 hover:bg-[#f6f1c9]/60"
                        }`}
                        aria-label={`رفتن به تصویر ${targetIdx + 1}`}
                      />
                    );
                  })}
                </div>

                {/* Frame Counter */}
                <span
                  className="text-[11px] sm:text-xs font-mono font-bold text-[#f6f1c9]/90 tracking-wider min-w-[42px] text-center select-none"
                  dir="ltr"
                >
                  {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                  {String(MEMORIES_DATA.length).padStart(2, "0")}
                </span>

                {/* Next Slide Button */}
                <button
                  type="button"
                  onClick={() => swiperInstance?.slideNext()}
                  className="p-1 rounded-full text-[#f6f1c9]/70 hover:text-[#f6f1c9] hover:bg-[#f6f1c9]/10 transition-all focus:outline-none cursor-pointer"
                  aria-label="قاب بعدی"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Scrapbook Masonry Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {MEMORIES_DATA.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-[#f6f1c9]/15 shadow-md hover:shadow-xl hover:shadow-black/70 cursor-pointer transition-all duration-300 hover:border-[#f6f1c9]/40 hover:-translate-y-1"
              >
                <div className={`relative ${item.aspect} w-full overflow-hidden bg-gradient-to-br from-[#181c2b] to-[#0a0c12]`}>
                  <img
                    src={item.src}
                    alt="لحظه‌های ماندگار خانواده عما"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />

                  {/* Fallback frame */}
                  <div className="hidden w-full h-full flex-col justify-center items-center p-3.5 bg-gradient-to-t from-[#06080d] via-[#101422] to-[#171c2e]">
                    <Film className="w-6 h-6 text-[#f6f1c9]/70" />
                  </div>

                  {/* Hover Overlay without text */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-[#f6f1c9]/90 text-[#08090c] shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={MEMORIES_DATA}
        currentIndex={activePhotoIdx}
        onNavigate={(idx) => setActivePhotoIdx(idx)}
      />
    </section>
  );
}
