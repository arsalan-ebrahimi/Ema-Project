// ==========================================
// Page Section: Work Teaser (تیزر اثر ما)
// Focused presentation: Title, Film Poster for "درخت آرزو", and "دیدن اثر" CTA
// ==========================================

import React from "react";
import { Link } from "react-router-dom";
import { Play, Sparkles, Film, ArrowLeft } from "lucide-react";
import { WORK_TEASER_CONTENT } from "../../Constants/content";
import { Button, Badge } from "../../Components/UI";

export default function WorkTeaserSection() {
  return (
    <section id="work-teaser" className="relative py-24 md:py-32 bg-[#06080c] overflow-hidden">
      
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2a5baa]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Short Section Title */}
        <Badge
          variant="cream"
          size="md"
          className="mb-4 text-xs font-semibold tracking-widest"
          icon={<Film className="w-3.5 h-3.5 text-[#2a5baa]" />}
        >
          {WORK_TEASER_CONTENT.tag}
        </Badge>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight mb-4">
          فیلم مستند «{WORK_TEASER_CONTENT.filmTitle}»
        </h2>

        <p className="text-sm md:text-base text-[#f6f1c9]/70 font-light max-w-lg mb-10">
          {WORK_TEASER_CONTENT.logline}
        </p>

        {/* Widescreen Cinematic Showcase Container (Expanded width & cinema aspect) */}
        <div className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto group">
          
          {/* Ambient Spotlight Aura Behind Card */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-[#2a5baa]/35 via-[#f6f1c9]/15 to-transparent rounded-[32px] blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <Link
            to="/work"
            className="block relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#161a26] via-[#10121a] to-[#08090d] border-2 border-[#f6f1c9]/25 shadow-2xl shadow-black/90 transition-all duration-500 group-hover:scale-[1.015] group-hover:border-[#f6f1c9]/45 cursor-pointer"
          >
            <img
              src="/میمی.png"
              alt={`پوستر بهترین ما — فیلم ${WORK_TEASER_CONTENT.filmTitle}`}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const currentSrc = e.currentTarget.getAttribute("src");
                if (currentSrc === "/میمی.png") {
                  e.currentTarget.src = "/wish-tree-poster.webp";
                } else if (currentSrc && currentSrc.endsWith(".webp")) {
                  e.currentTarget.src = currentSrc.replace(".webp", ".jpg");
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

            {/* Permanent Cinematic Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />

            {/* Top Corner Studio Badges */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#f6f1c9]/20 text-[11px] font-mono text-[#f6f1c9]">
                EMA CINEMA ORIGINAL
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#2a5baa]/70 backdrop-blur-md border border-[#2a5baa]/40 text-[11px] font-bold text-white shadow-lg">
                کیفیت Full HD / 4K
              </span>
            </div>

            {/* Center Interactive Cinema Play Marquee */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f6f1c9] text-[#08090c] flex items-center justify-center shadow-[0_0_50px_rgba(246,241,201,0.55)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(246,241,201,0.8)] transition-all duration-300">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current mr-1 text-[#08090c]" />
              </div>
              <span className="mt-4 px-5 py-2 rounded-full bg-black/75 backdrop-blur-md border border-[#f6f1c9]/25 text-xs sm:text-sm font-bold text-[#f6f1c9] tracking-wide shadow-xl group-hover:bg-[#f6f1c9] group-hover:text-[#08090c] transition-colors">
                ورود به تماشاخانه مستند «درخت آرزو»
              </span>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex items-center justify-between text-xs text-[#f6f1c9]/70 font-light pointer-events-none z-10">
              <span className="hidden sm:inline">روایتگری در شرایط سخت اقلیمی و جنگی</span>
              <span>مدت زمان: ۲۲ دقیقه • ترافیک نیم‌بها</span>
            </div>

            {/* Fallback frame */}
            <div className="hidden w-full h-full flex-col justify-between p-6 sm:p-8 bg-gradient-to-b from-[#1c2236] via-[#111420] to-[#07090e] border border-[#f6f1c9]/15 text-center">
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-mono tracking-widest text-[#f6f1c9]/60">
                  EMA CINEMA PRESENTS
                </span>
                <div className="w-10 h-[1px] bg-[#f6f1c9]/30 my-2" />
                <span className="text-xs text-[#2a5baa] font-bold">
                  {WORK_TEASER_CONTENT.badge}
                </span>
              </div>
              <div className="my-auto py-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#f6f1c9]/10 border border-[#f6f1c9]/30 flex items-center justify-center mb-4 text-[#f6f1c9] shadow-lg">
                  <Play className="w-6 h-6 fill-current mr-0.5" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#f6f1c9] tracking-tight mb-2">
                  {WORK_TEASER_CONTENT.filmTitle}
                </h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Primary CTA Button Linking to Subpage */}
        <div className="mt-10">
          <Button
            to="/work"
            variant="glow"
            size="lg"
            icon={<ArrowLeft className="w-5 h-5" />}
            iconPosition="left"
            className="font-extrabold text-base px-10 py-4"
          >
            {WORK_TEASER_CONTENT.ctaText}
          </Button>
        </div>

      </div>
    </section>
  );
}
