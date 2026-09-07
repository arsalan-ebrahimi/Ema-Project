// ==========================================
// Page Section: Call to Action (دعوت به همکاری)
// Passionate invitation to join the Ema cinema family with rhythmic discipline badges
// ==========================================

import React from "react";
import { Sparkles, ArrowLeft, Heart, Film } from "lucide-react";
import { JOIN_CTA_CONTENT } from "../../Constants/content";
import { Button, Badge } from "../../Components/UI";

export default function JoinCtaSection() {
  return (
    <section id="join-cta" className="relative py-16 md:py-28 lg:py-36 bg-[#07090e] overflow-hidden">
      
      {/* Cinematic Spotlight Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#2a5baa]/25 via-[#f6f1c9]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Top Eyebrow */}
        <Badge
          variant="cream"
          size="md"
          className="mb-4 sm:mb-6 text-xs font-semibold tracking-wider"
          icon={<Heart className="w-3.5 h-3.5 text-red-400 fill-red-400/80" />}
        >
          {JOIN_CTA_CONTENT.tag}
        </Badge>

        {/* Dynamic Film Calling Badges Pill Flow */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mb-6 sm:mb-8">
          {JOIN_CTA_CONTENT.passions.map((item, idx) => (
            <span
              key={idx}
              className="px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-[#131622]/90 border border-[#f6f1c9]/15 text-[#f6f1c9]/85 backdrop-blur-sm transition-transform hover:scale-105 hover:border-[#f6f1c9]/40 hover:text-[#f6f1c9]"
            >
              عاشق {item}
            </span>
          ))}
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f6f1c9] tracking-tight leading-tight mb-6 sm:mb-8">
          به خانواده عِـمـا خوش اومدی
        </h2>

        {/* Narrative Body Text */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#111420]/80 border border-[#f6f1c9]/15 p-5 sm:p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/80 max-w-3xl mb-8 sm:mb-12">
          <p className="text-sm sm:text-base md:text-lg text-[#f6f1c9]/90 font-light leading-relaxed sm:leading-loose text-justify sm:text-center text-balance">
            {JOIN_CTA_CONTENT.body}
          </p>
        </div>

        {/* Prominent Glow CTA Button */}
        <Button
          to="/join"
          variant="glow"
          size="lg"
          icon={<ArrowLeft className="w-5 h-5" />}
          iconPosition="left"
          className="text-sm sm:text-base md:text-lg font-black px-8 py-3.5 sm:px-10 sm:py-5 shadow-2xl hover:scale-105 transition-transform"
        >
          {JOIN_CTA_CONTENT.buttonText}
        </Button>

      </div>
    </section>
  );
}
