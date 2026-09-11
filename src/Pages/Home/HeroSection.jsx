// ==========================================
// Page Section: Hero (صفحه اصلی)
// Fullscreen cinematic video background with bold typography & call to actions
// ==========================================

import React, { useRef, useEffect, useState } from "react";
import { Play, ChevronDown, Sparkles } from "lucide-react";
import { HERO_CONTENT } from "../../Constants/content";
import { Button, Badge } from "../../Components/UI";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Force muted properties & attributes (crucial for iOS Safari & strict browser policies)
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    let isMounted = true;

    const playVideo = () => {
      if (!video) return;
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            if (isMounted) setIsVideoPlaying(true);
          })
          .catch((err) => {
            // Browser blocked autoplay or media still buffering; fallback interaction listener will trigger
            console.debug("Autoplay waiting for buffer or user gesture:", err?.message || err);
          });
      }
    };

    // Stage 1: Immediate play attempt on mount
    playVideo();

    // Stage 2: Retries as network chunks arrive (essential for remote Vercel hosting)
    const handleLoadedMetadata = () => playVideo();
    const handleCanPlay = () => playVideo();
    const handlePlaying = () => {
      if (isMounted) setIsVideoPlaying(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);

    // Stage 3: User gesture fallback (essential for iOS Low Power Mode / Android battery saver)
    const handleUserInteraction = () => {
      playVideo();
      removeInteractionListeners();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("touchend", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    window.addEventListener("touchstart", handleUserInteraction, { passive: true, once: true });
    window.addEventListener("touchend", handleUserInteraction, { passive: true, once: true });
    window.addEventListener("scroll", handleUserInteraction, { passive: true, once: true });
    window.addEventListener("click", handleUserInteraction, { passive: true, once: true });
    window.addEventListener("keydown", handleUserInteraction, { passive: true, once: true });

    // Stage 4: Tab visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      removeInteractionListeners();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoin = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById("join-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
      
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 w-full h-full bg-[#07080b]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className={`w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
            isVideoPlaying ? "opacity-50" : "opacity-40"
          }`}
          poster="/hero-poster.webp"
        >
          <source src="/hero-film.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Ambient Overlays & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/50 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090c]/30 to-[#08090c] pointer-events-none" />
      
      {/* Cinematic Color Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2a5baa]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[300px] bg-[#f6f1c9]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-8 sm:pt-16">
        
        {/* Top Eyebrow: Join Call to Action Button */}
        <div className="mb-4 sm:mb-6">
          <a
            href="#join-cta"
            onClick={scrollToJoin}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full backdrop-blur-md bg-[#131620]/90 border border-[#f6f1c9]/25 text-xs md:text-sm font-bold text-[#f6f1c9] hover:bg-[#2a5baa] hover:border-[#f6f1c9]/60 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#2a5baa]/30 group cursor-pointer"
            aria-label="دعوت به همکاری — به سوی ما"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2a5baa] group-hover:text-[#f6f1c9] transition-colors" />
            <span>دعوت به همکاری</span>
            <span className="text-[11px] text-[#f6f1c9]/70 group-hover:text-white/90 transition-colors">
              (به سوی ما)
            </span>
            <span className="text-xs transition-transform group-hover:-translate-x-0.5">←</span>
          </a>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f6f1c9] tracking-tight leading-[1.3] md:leading-[1.2] mb-4 sm:mb-6 drop-shadow-2xl">
          {HERO_CONTENT.title}
        </h1>

        {/* Subtitle - Always fully visible on mobile */}
        <p className="text-sm sm:text-lg md:text-xl text-[#f6f1c9]/90 font-light max-w-2xl leading-relaxed sm:leading-loose mb-8 sm:mb-10 text-balance px-2">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            to="/work"
            variant="glow"
            size="lg"
            icon={<Play className="w-5 h-5 fill-current" />}
            iconPosition="right"
            className="w-full sm:w-auto font-extrabold text-sm md:text-base px-8 py-3.5 sm:py-4"
          >
            {HERO_CONTENT.primaryCta}
          </Button>

          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            icon={<ChevronDown className="w-5 h-5" />}
            iconPosition="left"
            className="w-full sm:w-auto text-sm md:text-base px-8 py-3.5 sm:py-4"
          >
            {HERO_CONTENT.secondaryCta}
          </Button>
        </div>
      </div>

      {/* Bottom Scroll Down Arrow */}
      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5 text-xs text-[#f6f1c9]/60 hover:text-[#f6f1c9] transition-colors group cursor-pointer focus:outline-none"
        aria-label="اسکرول به بخش درباره ما"
      >
        <span className="tracking-widest text-[11px] font-light">داستان عما</span>
        <div className="w-6 h-10 rounded-full border border-[#f6f1c9]/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-[#f6f1c9] rounded-full animate-bounce mt-1" />
        </div>
      </button>
    </section>
  );
}
