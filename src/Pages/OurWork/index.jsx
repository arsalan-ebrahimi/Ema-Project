// ==========================================
// Page: Our Work (زیرصفحه اثر ما)
// Fullscreen documentary video, wartime production narrative, and Swiper BTS gallery
// ==========================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ArrowRight,
  ExternalLink,
  Film,
  Camera,
  Sparkles,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { WORK_PAGE_CONTENT } from "../../Constants/content";
import { Badge, Button, Card } from "../../Components/UI";
import Lightbox from "../../Components/Lightbox";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const APARAT_EMBED_URL =
  "https://www.aparat.com/video/video/embed/videohash/hymb6w7/vt/frame";
const APARAT_DIRECT_URL = "https://aparat.com/v/hymb6w7";

export default function OurWork() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeBtsIdx, setActiveBtsIdx] = useState(0);

  // Behind-the-scenes photos data
  const btsPhotos = [
    {
      id: "bts-1",
      src: "/bts-1.webp",
      title: "پشت صحنه ۱ — استقرار تجهیزات در پناهگاه",
      tag: "لوکیشن میدانی",
    },
    {
      id: "bts-2",
      src: "/bts-2.webp",
      title: "پشت صحنه ۲ — تنظیم نور سکانس شب",
      tag: "نورپردازی موضعی",
    },
    {
      id: "bts-3",
      src: "/bts-3.webp",
      title: "پشت صحنه ۳ — تمرین دیالوگ زیر آتش و فشار",
      tag: "بازیگردانی",
    },
    {
      id: "bts-4",
      src: "/bts-4.webp",
      title: "پشت صحنه ۴ — ثبت صدای آمبیانس محیطی",
      tag: "صدابرداری مستند",
    },
    {
      id: "bts-5",
      src: "/bts-5.webp",
      title: "پشت صحنه ۵ — هدایت صحنه با دوربین روی دست",
      tag: "تصویربرداری پویا",
    },
    {
      id: "bts-6",
      src: "/bts-6.webp",
      title: "پشت صحنه ۶ — جمع‌آوری راش‌ها و بک‌آپ روزانه",
      tag: "مدیریت داده‌ها",
    },
  ];

  const openLightbox = (index) => {
    setActiveBtsIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-[#08090c] text-[#f6f1c9] min-h-screen">

      {/* 1. Cinema Theater Video Section (Safe from Navbar with pt-28+) */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#06080d] via-[#090c14] to-[#090b10] overflow-hidden border-b border-[#f6f1c9]/10">

        {/* Ambient Cinema Spotlight Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#2a5baa]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#f6f1c9]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top Bar: Breadcrumb + Aparat Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#f6f1c9]/70 hover:text-[#f6f1c9] transition-colors group"
            >
              <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>بازگشت به صفحه اصلی</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-[11px] font-bold">
                ترافیک نیم‌بها
              </span>
              <a
                href={APARAT_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#131724] border border-[#f6f1c9]/20 text-[11px] text-[#f6f1c9]/80 hover:text-[#f6f1c9] hover:border-[#f6f1c9]/40 transition-colors group"
              >
                <span>مشاهده در آپارات</span>
                <ExternalLink className="w-3 h-3 text-[#2a5baa] group-hover:text-[#f6f1c9] transition-colors" />
              </a>
            </div>
          </div>

          {/* Film Title Header */}
          <div className="mb-6 sm:mb-8">
            <Badge
              variant="cream"
              size="md"
              className="mb-3 text-xs font-semibold"
              icon={<Film className="w-3.5 h-3.5 text-[#2a5baa]" />}
            >
              مستند تولید اثر
            </Badge>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight">
              {WORK_PAGE_CONTENT.title}
            </h1>
          </div>

          {/* 16:9 Cinematic Video Player Frame */}
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black border-2 border-[#f6f1c9]/20 shadow-2xl shadow-black/90 group">
            <iframe
              src={APARAT_EMBED_URL}
              title="مستند درخت آرزو — عِـمـا سـیـنـمـا در آپارات"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            />
          </div>

          {/* Player Helper Footnote */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#f6f1c9]/55 font-light">
            <span>برای تجربه حداکثر شفافیت تصویر، از آیکون چرخ‌دنده پلیر کیفیت را روی ۱۰۸۰p تنظیم نمایید.</span>
            <span>کیفیت Full HD • سرورهای پرسرعت آپارات</span>
          </div>

        </div>
      </section>

      {/* 2. Narrative Section (زیر ویدیو) */}
      <section className="relative py-20 md:py-28 bg-[#090b10] border-b border-[#f6f1c9]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Narrative Content Card */}
          <div className="rounded-3xl bg-[#111420]/85 border border-[#f6f1c9]/15 p-8 sm:p-12 md:p-16 backdrop-blur-xl shadow-2xl shadow-black">

            <div className="flex items-center gap-3 mb-6">
              <Badge variant="blue" size="md" icon={<ShieldAlert className="w-3.5 h-3.5" />}>
                روایت شرایط سخت
              </Badge>
              <span className="text-xs font-mono text-[#f6f1c9]/40">EMA_DOC_NARRATIVE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f6f1c9] mb-8 leading-snug border-r-4 border-[#2a5baa] pr-4">
              {WORK_PAGE_CONTENT.narrativeHeading}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#f6f1c9]/90 font-medium leading-relaxed sm:leading-loose text-justify mb-10">
              {WORK_PAGE_CONTENT.narrativeText}
            </p>

            {/* Production Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#f6f1c9]/15">
              {WORK_PAGE_CONTENT.credits.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs text-[#f6f1c9]/50 font-light mb-1">
                    {item.role}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#f6f1c9]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Behind-the-Scenes Photo Gallery (زیر متن) */}
      <section className="relative py-24 md:py-32 bg-[#06080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="cream" size="md" className="mb-3" icon={<Camera className="w-3.5 h-3.5 text-[#2a5baa]" />}>
                عکس‌های پشت صحنه
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f6f1c9]">
                ثبت روند ساخت «درخت آرزو»
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#f6f1c9]/60 max-w-sm">
              برای مشاهده هر قاب در اندازه کامل، روی تصویر کلیک کنید.
            </p>
          </div>

          {/* Swiper Slider for BTS Photos */}
          <div className="relative pb-14">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              navigation={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              simulateTouch={true}
              allowTouchMove={true}
              touchRatio={1.3}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.2, spaceBetween: 28 },
              }}
              className="bts-swiper"
            >
              {btsPhotos.map((photo, index) => (
                <SwiperSlide key={photo.id}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-[#f6f1c9]/15 shadow-xl shadow-black/60 cursor-pointer transition-all duration-300 hover:border-[#f6f1c9]/40 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#161a29] to-[#0a0c12]">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const currentSrc = e.currentTarget.getAttribute("src");
                          if (currentSrc && currentSrc.endsWith(".webp")) {
                            e.currentTarget.src = currentSrc.replace(".webp", ".jpg");
                          } else if (currentSrc && currentSrc.endsWith(".jpg")) {
                            e.currentTarget.src = currentSrc.replace(".jpg", ".png");
                          } else {
                            e.currentTarget.style.display = "none";
                            if (e.currentTarget.nextElementSibling) {
                              e.currentTarget.nextElementSibling.style.display = "flex";
                            }
                          }
                        }}
                        onLoad={(e) => {
                          e.currentTarget.style.display = "block";
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = "none";
                          }
                        }}
                      />

                      {/* Fallback BTS Frame */}
                      <div className="hidden w-full h-full flex-col justify-between p-5 bg-gradient-to-t from-[#06080d] via-[#101422] to-[#171c2e] text-right">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#f6f1c9]/50">
                          <span className="text-[#2a5baa] font-bold">{photo.tag}</span>
                          <span>BTS_STILL</span>
                        </div>
                        <div className="my-auto flex flex-col items-center justify-center text-center">
                          <Camera className="w-8 h-8 text-[#f6f1c9]/70 mb-2" />
                          <p className="text-xs font-bold text-[#f6f1c9] px-2">
                            {photo.title}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-[#f6f1c9]/40">
                          {photo.id.toUpperCase()}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-[#f6f1c9] text-[#08090c] font-bold text-xs shadow-lg">
                          مشاهده تصویر کامل
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* Lightbox for Behind-the-Scenes Images */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={btsPhotos}
        currentIndex={activeBtsIdx}
        onNavigate={(idx) => setActiveBtsIdx(idx)}
      />

    </div>
  );
}
