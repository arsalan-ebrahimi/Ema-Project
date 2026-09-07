// ==========================================
// Page Section: Memories (خاطرات ما)
// Dynamic photo album for img1 to img21 with Swiper Carousel & Masonry view toggle
// ==========================================

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Camera, LayoutGrid, Sliders, Maximize2, Sparkles, Film } from "lucide-react";
import { MEMORIES_DATA } from "../../Constants/memories";
import { Badge } from "../../Components/UI";
import Lightbox from "../../Components/Lightbox";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MemoriesSection() {
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'grid'
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <Badge
              variant="cream"
              size="md"
              className="mb-4 text-xs font-semibold tracking-wider"
              icon={<Camera className="w-3.5 h-3.5 text-[#2a5baa]" />}
            >
              خاطرات ما
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight mb-3">
              لحظه‌های ماندگار پشت صحنه
            </h2>
            <p className="text-sm sm:text-base text-[#f6f1c9]/70 font-light max-w-xl">
              ثبت شور، تلاش و زیست مشترک ۲۱ قاب از جریان ساخت و با هم بودن در خانواده عما.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#131622] border border-[#f6f1c9]/15 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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
          <div className="relative pb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={false}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3800, pauseOnMouseEnter: true }}
              grabCursor={true}
              simulateTouch={true}
              allowTouchMove={true}
              touchRatio={1.3}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.2, spaceBetween: 28 },
                1280: { slidesPerView: 4.2, spaceBetween: 28 },
              }}
              className="memories-swiper !overflow-visible"
            >
              {MEMORIES_DATA.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-[#f6f1c9]/15 shadow-xl shadow-black/60 cursor-pointer transition-all duration-300 hover:border-[#f6f1c9]/40 hover:-translate-y-1.5"
                  >
                    {/* Fixed aspect ratio card matching 3:2 camera stills */}
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-gradient-to-br from-[#181c2b] to-[#0a0c12]">
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                      />

                      {/* Film Still Placeholder Artwork */}
                      <div className="hidden w-full h-full flex-col justify-between p-5 bg-gradient-to-t from-[#06080d] via-[#101422] to-[#171c2e] text-right">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#f6f1c9]/50">
                          <span className="text-[#2a5baa] font-bold">{item.tag}</span>
                          <span>FRAME 35MM</span>
                        </div>

                        <div className="my-auto flex flex-col items-center justify-center text-center">
                          <div className="w-12 h-12 rounded-xl bg-[#2a5baa]/20 border border-[#2a5baa]/40 flex items-center justify-center mb-3 text-[#f6f1c9]">
                            <Film className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-bold text-[#f6f1c9] line-clamp-2 px-2">
                            {item.title}
                          </p>
                        </div>

                        <div className="text-[10px] font-mono text-[#f6f1c9]/40 flex justify-between border-t border-[#f6f1c9]/10 pt-3">
                          <span>{item.id.toUpperCase()}</span>
                          <span>EMA ARCHIVE</span>
                        </div>
                      </div>

                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div className="flex items-center justify-between text-[#f6f1c9]">
                          <span className="text-xs font-bold">{item.title}</span>
                          <div className="p-2 rounded-full bg-[#f6f1c9] text-[#08090c]">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />

                  {/* Fallback frame */}
                  <div className="hidden w-full h-full flex-col justify-between p-3.5 bg-gradient-to-t from-[#06080d] via-[#101422] to-[#171c2e] text-right">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#f6f1c9]/50">
                      <span className="text-[#2a5baa] font-bold">{item.tag}</span>
                    </div>
                    <p className="text-xs font-bold text-[#f6f1c9] line-clamp-2 my-auto text-center">
                      {item.title}
                    </p>
                    <span className="text-[9px] font-mono text-[#f6f1c9]/40">
                      {item.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3 text-center">
                    <span className="text-xs font-bold text-[#f6f1c9]">
                      {item.title}
                    </span>
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
