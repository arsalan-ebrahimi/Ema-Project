// ==========================================
// Page Section: Family (خانواده ما)
// Warm collective team presentation with group visual
// ==========================================

import React from "react";
import { Users } from "lucide-react";
import { FAMILY_CONTENT } from "../../Constants/content";
import { Badge } from "../../Components/UI";

export default function FamilySection() {
  return (
    <section id="team" className="relative py-16 md:py-24 lg:py-28 bg-[#080a0f] overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#f6f1c9]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2a5baa]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <Badge
            variant="cream"
            size="md"
            className="mb-4 text-xs font-semibold tracking-wider"
            icon={<Users className="w-3.5 h-3.5 text-[#2a5baa]" />}
          >
            {FAMILY_CONTENT.tag}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight mb-6">
            {FAMILY_CONTENT.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f6f1c9]/80 font-light leading-relaxed sm:leading-loose text-center max-w-2xl px-2">
            {FAMILY_CONTENT.body}
          </p>
        </div>

        {/* Cinematic Studio Stage Presentation for Team Visual */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#f6f1c9]/20 shadow-2xl shadow-black bg-gradient-to-b from-[#0b0e17] via-[#07090e] to-[#040508] min-h-[220px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[540px] flex flex-col justify-end items-center group">
          
          {/* Studio Stage Spotlight Beam (Golden/Cream Rim Light from Above) */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[280px] sm:w-[580px] md:w-[700px] h-[220px] sm:h-[420px] bg-gradient-to-b from-[#f6f1c9]/18 via-[#f6f1c9]/6 to-transparent rounded-full blur-[60px] sm:blur-[70px] pointer-events-none" />

          {/* Deep Cinema Blue Fill Light behind Team */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] md:w-[800px] h-[180px] sm:h-[320px] bg-[#2a5baa]/25 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none" />

          {/* Subtle Film Stage Grid Texture Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f6f1c9/3_1px,transparent_1px),linear-gradient(to_bottom,#f6f1c9/3_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

          {/* Film Stage Badges in Top Corners (Symmetrically balanced on mobile & desktop) */}
          <div className="absolute top-3 inset-x-3 sm:top-5 sm:inset-x-6 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-[#f6f1c9]/15 text-[10px] sm:text-[11px] font-mono text-[#f6f1c9]/85 shadow-lg">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>EMA STUDIO // ON SET</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-[#f6f1c9]/15 text-[10px] sm:text-[11px] font-mono text-[#f6f1c9]/70 shadow-lg">
              <span>35MM CINEMASCOPE</span>
            </div>
          </div>

          {/* Team Cutout Visual Grounded on Studio Stage */}
          <div className="relative z-10 w-full flex items-end justify-center px-1 sm:px-6 pt-10 sm:pt-14">
            <img
              src="/5.png"
              alt="خانواده عما سینما"
              loading="lazy"
              decoding="async"
              className="w-full sm:w-auto max-w-full max-h-[240px] sm:max-h-[380px] md:max-h-[460px] lg:max-h-[520px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-[1.01]"
              onError={(e) => {
                const currentSrc = e.currentTarget.getAttribute("src");
                if (currentSrc === "/5.png") {
                  e.currentTarget.src = "/team-cinematic.webp";
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

            {/* Fallback Artwork for Team Image */}
            <div className="hidden w-full h-[260px] sm:h-[380px] flex-col items-center justify-center p-6 bg-gradient-to-t from-[#06080d] via-[#10131e] to-[#151928] text-center rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-[#f6f1c9]/10 border border-[#f6f1c9]/30 flex items-center justify-center mb-3 text-[#f6f1c9] shadow-xl">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-[#f6f1c9] mb-1">
                تصویر گروهی خانواده عما سینما
              </h3>
              <p className="text-xs sm:text-sm text-[#f6f1c9]/65 font-light max-w-md">
                همدلی و حضور در کنار هم؛ جایی برای خلق کردن، کنار آدم‌هایی که عاشق روایت کردن هستند.
              </p>
            </div>
          </div>

          {/* Studio Stage Floor Ground Baseline & Soft Ambient Fade (Subtle to not drown feet) */}
          <div className="absolute inset-x-0 bottom-0 h-6 sm:h-16 bg-gradient-to-t from-[#040508]/90 via-[#07090e]/30 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-6 sm:inset-x-20 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#f6f1c9]/30 to-transparent z-20 pointer-events-none" />

          {/* Bottom Stage Tagline */}
          <div className="absolute bottom-1 sm:bottom-2 inset-x-0 z-20 text-center pointer-events-none">
            <span className="text-[9px] sm:text-[11px] font-mono tracking-widest text-[#f6f1c9]/45 uppercase">
              EMA CINEMA CREATIVE COLLECTIVE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
