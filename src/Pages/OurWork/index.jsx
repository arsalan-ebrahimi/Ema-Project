// ==========================================
// Page: Our Work (صفحه تماشای مستند «درخت آرزو»)
// Premium cinema theater aesthetic with responsive layout, AmbiLight glow,
// editorial narrative, mobile-first BTS gallery, and navigation flow
// ==========================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  ArrowRight,
  ExternalLink,
  Film,
  Camera,
  Sparkles,
  Clock,
  ShieldAlert,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Users,
  Maximize2,
  Share2,
  Check,
  Flame,
  Tv,
} from "lucide-react";
import { WORK_PAGE_CONTENT } from "../../Constants/content";
import { Badge, Button } from "../../Components/UI";
import Lightbox from "../../Components/Lightbox";
import toast from "react-hot-toast";

// Import Swiper styles
import "swiper/css";

const APARAT_EMBED_URL =
  "https://www.aparat.com/video/video/embed/videohash/hymb6w7/vt/frame";
const APARAT_DIRECT_URL = "https://aparat.com/v/hymb6w7";

export default function OurWork() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeBtsIdx, setActiveBtsIdx] = useState(0);
  const [btsSwiperInstance, setBtsSwiperInstance] = useState(null);
  const [activeBtsSlideIndex, setActiveBtsSlideIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

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

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      toast.success("لینک صفحه کپی شد!");
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="w-full bg-[#07080b] text-[#f6f1c9] min-h-screen overflow-x-hidden selection:bg-[#2a5baa] selection:text-[#f6f1c9]">

      {/* ============================================================ */}
      {/* 1. CINEMA THEATER & VIDEO STAGE */}
      {/* ============================================================ */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#050609] via-[#090c14] to-[#07080b] overflow-hidden border-b border-[#f6f1c9]/10">

        {/* Ambient Cinema Spotlights */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] md:w-[900px] h-[300px] sm:h-[450px] bg-[#2a5baa]/15 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />
        <div className="absolute top-1/4 right-2 sm:right-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[#f6f1c9]/5 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top Bar: Pure Clean Navigation Breadcrumb */}
          <div className="flex items-center justify-between mb-5 sm:mb-7">
            <Link
              to="/"
              className="inline-flex items-center gap-2 h-8 px-3.5 rounded-full bg-[#111420]/80 border border-[#f6f1c9]/15 text-xs sm:text-sm font-semibold text-[#f6f1c9]/80 hover:text-white hover:border-[#f6f1c9]/40 hover:bg-[#181d2e] transition-all group active:scale-95 shadow-sm"
            >
              <ArrowRight className="w-4 h-4 text-[#2a5baa] group-hover:text-[#f6f1c9] group-hover:-translate-x-1 transition-all" />
              <span>بازگشت به خانه</span>
            </Link>
          </div>

          {/* Film Header Card & Title */}
          <div className="mb-5 sm:mb-7">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <Badge
                variant="cream"
                size="sm"
                className="text-[11px] font-bold"
                icon={<Film className="w-3 h-3 text-[#2a5baa]" />}
              >
                مستند ویژه عما سینما
              </Badge>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                ترافیک نیم‌بها
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight leading-[1.2] drop-shadow-md mb-3">
              {WORK_PAGE_CONTENT.title}
            </h1>

            {/* Film Meta Chips Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#f6f1c9]/70 font-light">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2a5baa]" />
                <span>مستند کامل (Full Feature)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#2a5baa]" />
                <span>سال تولید: ۱۴۰۳</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>روایت میدانی و جنگی</span>
              </span>
            </div>
          </div>

          {/* 16:9 Cinematic Video Player with Ambient Theater Halo */}
          <div className="relative group my-4 sm:my-6">
            {/* Dynamic Ambient Glow Behind Video (AmbiLight) */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#2a5baa]/30 via-[#f6f1c9]/15 to-[#2a5baa]/30 rounded-3xl blur-xl sm:blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

            {/* Video Player Box */}
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-[#f6f1c9]/25 shadow-2xl shadow-black">
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
          </div>

          {/* Action & Quality Control Bar (Directly below player) */}
          <div className="mt-3 sm:mt-4 p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#111420]/80 border border-[#f6f1c9]/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl shadow-black/50">
            
            {/* Primary Video Actions (Aparat + Share) */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <a
                href={APARAT_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-xl bg-[#2a5baa] text-white font-bold text-xs hover:bg-[#386ec2] transition-all shadow-md hover:shadow-[#2a5baa]/30 active:scale-95 group shrink-0"
                title="مشاهده مستقیم در وب‌سایت آپارات"
              >
                <Tv className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>مشاهده در آپارات</span>
                <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-xl bg-[#161a2b] border border-[#f6f1c9]/20 text-[#f6f1c9] font-medium text-xs hover:text-white hover:border-[#f6f1c9]/45 hover:bg-[#1f243a] transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                title="اشتراک‌گذاری مستند"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">لینک کپی شد</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-[#2a5baa]" />
                    <span>اشتراک‌گذاری</span>
                  </>
                )}
              </button>
            </div>

            {/* Quality Note & Bandwidth Tag */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-[11px] sm:text-xs text-[#f6f1c9]/65 font-light">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>کیفیت Full HD ۱۰۸۰p</span>
              </span>
              <span className="hidden xs:inline text-[#f6f1c9]/30">•</span>
              <span className="text-[10px] sm:text-[11px] text-[#f6f1c9]/45 font-mono">
                APARAT STREAM
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. NARRATIVE SECTION: STORY & PRODUCTION CREDITS */}
      {/* ============================================================ */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-[#08090d] border-b border-[#f6f1c9]/10">
        <div className="max-w-4xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">

          {/* Narrative Glassmorphic Box */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#111420]/80 border border-[#f6f1c9]/15 p-5 xs:p-6 sm:p-10 md:p-14 backdrop-blur-xl shadow-2xl shadow-black relative overflow-hidden">
            
            {/* Subtle background glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2a5baa]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Badge & Chapter Indicator */}
            <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6">
              <Badge variant="blue" size="md" icon={<ShieldAlert className="w-3.5 h-3.5" />}>
                روایت ساخت اثر
              </Badge>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#f6f1c9]/40 tracking-wider">
                EMA_MEMOIR_#01
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#f6f1c9] mb-5 sm:mb-7 leading-snug border-r-4 border-[#2a5baa] pr-3 sm:pr-4">
              {WORK_PAGE_CONTENT.narrativeHeading}
            </h2>

            {/* Narrative Body Text */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[#f6f1c9]/90 font-light leading-relaxed sm:leading-loose text-justify sm:text-right mb-8 sm:mb-10">
              {WORK_PAGE_CONTENT.narrativeText}
            </p>

            {/* Production Specifications Grid (4 Distinct Glass Chips) */}
            <div className="pt-6 sm:pt-8 border-t border-[#f6f1c9]/15">
              <div className="text-[11px] font-mono text-[#f6f1c9]/40 uppercase tracking-wider mb-4">
                شناسنامه و عوامل مستند
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
                {WORK_PAGE_CONTENT.credits.map((item, idx) => {
                  // Assign dedicated cinematic icons
                  const iconMap = [
                    <Users key="users" className="w-4 h-4 text-[#2a5baa]" />,
                    <ShieldAlert key="shield" className="w-4 h-4 text-amber-400" />,
                    <Clock key="clock" className="w-4 h-4 text-[#2a5baa]" />,
                    <Calendar key="calendar" className="w-4 h-4 text-[#2a5baa]" />,
                  ];

                  return (
                    <div
                      key={idx}
                      className="flex flex-col justify-center p-3 sm:p-4 rounded-xl bg-[#161a2b]/70 border border-[#f6f1c9]/10 hover:border-[#f6f1c9]/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        {iconMap[idx % iconMap.length]}
                        <span className="text-[11px] text-[#f6f1c9]/50 font-light truncate">
                          {item.role}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#f6f1c9] group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. BEHIND-THE-SCENES PHOTO GALLERY */}
      {/* ============================================================ */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[#06080c]">
        <div className="max-w-6xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <Badge
              variant="cream"
              size="md"
              className="mb-2.5 text-xs font-bold"
              icon={<Camera className="w-3.5 h-3.5 text-[#2a5baa]" />}
            >
              آلبوم راش‌ها و پشت صحنه
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f6f1c9] tracking-tight">
              ثبت روند ساخت «درخت آرزو»
            </h2>
          </div>

          {/* Swiper Slider for BTS Photos */}
          <div className="relative pb-2 sm:pb-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={14}
              slidesPerView={1.2}
              loop={true}
              speed={450}
              watchSlidesProgress={true}
              autoplay={{
                delay: 4500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              simulateTouch={true}
              allowTouchMove={true}
              touchRatio={1.2}
              resistanceRatio={0.7}
              onSwiper={setBtsSwiperInstance}
              onSlideChange={(swiper) =>
                setActiveBtsSlideIndex(swiper.realIndex ?? swiper.activeIndex)
              }
              breakpoints={{
                480: { slidesPerView: 1.4, spaceBetween: 16 },
                640: { slidesPerView: 2.1, spaceBetween: 20 },
                1024: { slidesPerView: 2.8, spaceBetween: 22 },
                1280: { slidesPerView: 3.2, spaceBetween: 24 },
              }}
              className="bts-swiper rounded-2xl overflow-hidden"
            >
              {btsPhotos.map((photo, index) => (
                <SwiperSlide key={photo.id}>
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative rounded-2xl overflow-hidden bg-[#111420] border border-[#f6f1c9]/15 shadow-xl shadow-black/70 cursor-pointer transition-all duration-300 hover:border-[#f6f1c9]/40 hover:-translate-y-1.5"
                  >
                    {/* Balanced cinema frame: responsive widescreen aspect-ratio matching Home page */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#161a29] to-[#0a0c12]">
                      <img
                        src={photo.src}
                        alt={photo.tag}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 will-change-transform"
                        onError={(e) => {
                          const currentSrc = e.currentTarget.getAttribute("src");
                          if (currentSrc && currentSrc.endsWith(".webp")) {
                            e.currentTarget.src = currentSrc.replace(".webp", ".jpg");
                          } else if (currentSrc && currentSrc.endsWith(".jpg")) {
                            e.currentTarget.src = currentSrc.replace(".jpg", ".png");
                          }
                        }}
                      />

                      {/* Cinematic Viewfinder Focus Overlay (Matching Home Page) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-between p-3.5 sm:p-4">
                        {/* Top Bar: Viewfinder Frame Stamp */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-[#f6f1c9]/20 text-[10px] font-mono text-[#f6f1c9]/85">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
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

            {/* Custom BTS Navigation Bar & Pagination Controller */}
            <div className="flex items-center justify-center mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#111420]/95 border border-[#f6f1c9]/20 backdrop-blur-xl shadow-2xl shadow-black/80">
                <button
                  type="button"
                  onClick={() => btsSwiperInstance?.slidePrev()}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#f6f1c9]/70 hover:text-[#f6f1c9] hover:bg-[#f6f1c9]/10 transition-all focus:outline-none cursor-pointer"
                  aria-label="قاب قبلی"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-1" dir="ltr">
                  {btsPhotos.map((_, idx) => {
                    const isActive = idx === activeBtsSlideIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          if (btsSwiperInstance) {
                            if (typeof btsSwiperInstance.slideToLoop === "function") {
                              btsSwiperInstance.slideToLoop(idx);
                            } else {
                              btsSwiperInstance.slideTo(idx);
                            }
                          }
                        }}
                        className={`rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                          isActive
                            ? "w-5 sm:w-6 h-2 bg-[#f6f1c9] shadow-[0_0_10px_rgba(246,241,201,0.85)] scale-105"
                            : "w-2 h-2 bg-[#f6f1c9]/30 hover:bg-[#f6f1c9]/60"
                        }`}
                        aria-label={`رفتن به پشت صحنه ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                <span
                  className="text-xs font-mono font-bold text-[#f6f1c9]/90 tracking-wider min-w-[36px] text-center select-none"
                  dir="ltr"
                >
                  {activeBtsSlideIndex + 1} / {btsPhotos.length}
                </span>

                <button
                  type="button"
                  onClick={() => btsSwiperInstance?.slideNext()}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#f6f1c9]/70 hover:text-[#f6f1c9] hover:bg-[#f6f1c9]/10 transition-all focus:outline-none cursor-pointer"
                  aria-label="قاب بعدی"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CLOSING CTA BANNER: EXPLORE & COLLABORATE */}
      {/* ============================================================ */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-t from-[#040507] via-[#090b10] to-[#06080c] border-t border-[#f6f1c9]/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="blue"
            size="md"
            className="mb-4"
            icon={<Sparkles className="w-3.5 h-3.5" />}
          >
            مسیر عما سینما ادامه دارد
          </Badge>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#f6f1c9] mb-4">
            علاقه‌مند به همکاری در پروژه‌ها و روایت‌های بعدی هستید؟
          </h3>

          <p className="text-xs sm:text-sm text-[#f6f1c9]/70 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            در عما سینما، درهای خلق کردن همیشه به روی فیلمسازان، نویسندگان، تصویربرداران و تدوین‌گران مشتاق باز است.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              to="/join"
              variant="glow"
              size="md"
              className="w-full sm:w-auto font-bold text-sm px-7 py-3"
            >
              پیوستن به خانواده عما
            </Button>

            <Button
              to="/#about"
              variant="outline"
              size="md"
              className="w-full sm:w-auto text-sm px-7 py-3"
            >
              درباره نگاه و فلسفه ما
            </Button>
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
