// ==========================================
// Page Section: Family (خانواده ما)
// Warm collective team presentation with group visual & filmmaking disciplines
// ==========================================

import React from "react";
import { Users, Film, Clapperboard, Camera, Scissors, Music, PenTool, Sparkles } from "lucide-react";
import { FAMILY_CONTENT } from "../../Constants/content";
import { Badge, Card } from "../../Components/UI";

export default function FamilySection() {
  const getDisciplineIcon = (title) => {
    switch (title) {
      case "کارگردانی":
        return <Clapperboard className="w-5 h-5 text-[#f6f1c9]" />;
      case "فیلمبرداری":
        return <Camera className="w-5 h-5 text-[#2a5baa]" />;
      case "تدوین":
        return <Scissors className="w-5 h-5 text-[#f6f1c9]" />;
      case "صدا و موسیقی":
        return <Music className="w-5 h-5 text-[#2a5baa]" />;
      case "نویسندگی":
        return <PenTool className="w-5 h-5 text-[#f6f1c9]" />;
      default:
        return <Film className="w-5 h-5 text-[#2a5baa]" />;
    }
  };

  return (
    <section id="team" className="relative py-16 md:py-28 lg:py-36 bg-[#080a0f] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#f6f1c9]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2a5baa]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
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
          <p className="text-base sm:text-lg text-[#f6f1c9]/80 font-light leading-relaxed sm:leading-loose text-justify sm:text-center">
            {FAMILY_CONTENT.body}
          </p>
        </div>

        {/* Large Cinematic Team Visual Placeholder (Aspect Ratio 16:9 / 21:9) */}
        <div className="relative mb-16 rounded-3xl overflow-hidden border border-[#f6f1c9]/20 shadow-2xl shadow-black bg-[#0d0f17] group">
          
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full flex items-center justify-center overflow-hidden">
            <img
              src="/team-cinematic.webp"
              alt="خانواده عما سینما در پشت صحنه"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

            {/* Fallback Artwork for Team Image */}
            <div className="hidden w-full h-full flex-col items-center justify-center p-8 bg-gradient-to-t from-[#06080d] via-[#10131e] to-[#151928] text-center">
              <div className="w-20 h-20 rounded-full bg-[#f6f1c9]/10 border border-[#f6f1c9]/30 flex items-center justify-center mb-4 text-[#f6f1c9] shadow-xl">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#f6f1c9] mb-2">
                تصویر گروهی خانواده عما سینما
              </h3>
              <p className="text-xs sm:text-sm text-[#f6f1c9]/65 font-light max-w-md">
                همدلی و حضور در کنار هم؛ جایی برای خلق کردن، کنار آدم‌هایی که عاشق روایت کردن هستند.
              </p>
              <div className="mt-4 px-3 py-1 rounded-md bg-[#131622] border border-[#f6f1c9]/15 text-[11px] font-mono text-[#f6f1c9]/50">
                TEAM_GROUP_PHOTO • RATIO 21:9
              </div>
            </div>

            {/* Subtle Gradient Shade at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080a0f] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Collaborative Disciplines Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAMILY_CONTENT.disciplines.map((item, index) => (
            <Card
              key={index}
              hover={true}
              className="bg-[#10131d]/80 border-[#f6f1c9]/12 p-6 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#171b29] border border-[#f6f1c9]/15 flex items-center justify-center">
                  {getDisciplineIcon(item.title)}
                </div>
                <span className="text-[11px] font-mono text-[#f6f1c9]/40">
                  DISCIPLINE 0{index + 1}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#f6f1c9] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#f6f1c9]/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#f6f1c9]/10 flex items-center gap-1.5 text-xs text-[#2a5baa] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>عنصر جدایی‌ناپذیر قصه</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
