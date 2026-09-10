// ==========================================
// Page Section: Call to Action (دعوت به همکاری)
// Cinematic Studio Call-Sheet Presentation: Inspiring invitation to the Ema family
// ==========================================

import React from "react";
import {
  Sparkles,
  ArrowLeft,
  Heart,
  Film,
  Camera,
  Video,
  Mic,
  PenTool,
  Palette,
  Users,
  Clock,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { JOIN_CTA_CONTENT } from "../../Constants/content";
import { Button, Badge } from "../../Components/UI";

const DISCIPLINES = [
  { label: "فیلمبرداری", icon: Camera },
  { label: "کارگردانی", icon: Film },
  { label: "تدوین و ریتم", icon: Video },
  { label: "نویسندگی و قصه", icon: PenTool },
  { label: "صدا و موسیقی", icon: Mic },
  { label: "بازیگری", icon: Sparkles },
  { label: "طراحی صحنه", icon: Palette },
  { label: "تولید و هدایت", icon: Users },
];

const PERKS = [
  {
    title: "تولید میدانی واقعی",
    desc: "حضور مستقیم سر صحنه فیلمبرداری؛ نه تئوری‌بافی، خلق بی‌واسطه سینما.",
    icon: Film,
  },
  {
    title: "یادگیری کارگاهی و صمیمانه",
    desc: "آزمون، خطا و رشد تجربی در محیطی پرانرژی کنار دوستانی هم‌مسیر.",
    icon: Sparkles,
  },
  {
    title: "اکران و دیده شدن اثر",
    desc: "حمایت از ایده‌های جسورانه از اتاق فکر تا تماشاخانه و جشنواره‌ها.",
    icon: Flame,
  },
];

export default function JoinCtaSection() {
  return (
    <section
      id="join-cta"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#06080d] overflow-hidden"
    >
      {/* Cinematic Dual Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#2a5baa]/25 via-[#f6f1c9]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#f6f1c9]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Film Set Subtle Stage Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f6f1c9/3_1px,transparent_1px),linear-gradient(to_bottom,#f6f1c9/3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Eyebrow */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <Badge
            variant="cream"
            size="md"
            className="mb-4 text-xs font-semibold tracking-wider"
            icon={<Flame className="w-3.5 h-3.5 text-amber-400" />}
          >
            {JOIN_CTA_CONTENT.tag} • فراخوان همراهی
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f6f1c9] tracking-tight leading-tight mb-4">
            به خانواده عِـمـا خوش اومدی
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#f6f1c9]/80 font-light max-w-xl leading-relaxed">
            «اگر در سرت قصه‌ای داری و عاشق ساختنی، صندلی تو در کنار ما خالیست.»
          </p>
        </div>

        {/* Master Cinema Call-Sheet Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#111422]/95 via-[#0c0f18]/95 to-[#07090f] border-2 border-[#f6f1c9]/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)] p-6 sm:p-10 md:p-12 overflow-hidden group">
          
          {/* Subtle Behind-the-scenes Photo Underlay for Authentic Cinema Texture */}
          <img
            src="/DSC01333.webp"
            alt="پشت صحنه عما سینما"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay filter blur-[1px] pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-1000"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Vignette Gradient Mask Over Texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e111a]/85 via-[#0e111a]/90 to-[#07090f]/95 pointer-events-none" />

          {/* Viewfinder Corner Reticle Brackets */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-5 h-5 border-t-2 border-r-2 border-[#f6f1c9]/50 pointer-events-none" />
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-5 h-5 border-t-2 border-l-2 border-[#f6f1c9]/50 pointer-events-none" />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-5 h-5 border-b-2 border-r-2 border-[#f6f1c9]/50 pointer-events-none" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-5 h-5 border-b-2 border-l-2 border-[#f6f1c9]/50 pointer-events-none" />

          {/* Relative Card Content */}
          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Top Slate HUD Bar */}
            <div className="w-full flex items-center justify-between pb-6 mb-6 sm:mb-8 border-b border-[#f6f1c9]/12 text-xs font-mono text-[#f6f1c9]/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold text-[#f6f1c9] tracking-wider text-[11px] sm:text-xs">
                  EMA CALL SHEET // ON SET
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#f6f1c9]/60 text-[11px]">
                <span>SCENE: NEXT TALENT</span>
                <span>•</span>
                <span className="text-[#2a5baa] font-bold">ALL DISCIPLINES</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181c2e] border border-[#f6f1c9]/15 text-[10px] sm:text-[11px] text-[#f6f1c9]/80 font-sans font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>پذیرش فعال عضویت</span>
              </div>
            </div>

            {/* Narrative Body Message */}
            <p className="text-sm sm:text-base md:text-lg text-[#f6f1c9]/90 font-light leading-relaxed sm:leading-loose max-w-2xl mb-8 sm:mb-10">
              {JOIN_CTA_CONTENT.body}
            </p>

            {/* Interactive Discipline Badge Flow with Icons */}
            <div className="w-full max-w-3xl mb-8 sm:mb-10">
              <span className="block text-[11px] sm:text-xs font-mono tracking-widest text-[#f6f1c9]/50 uppercase mb-3 sm:mb-4">
                حوزه‌های همکاری و فعالیت
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {DISCIPLINES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#151928]/85 border border-[#f6f1c9]/15 text-[#f6f1c9]/90 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105 hover:border-[#f6f1c9]/45 hover:bg-[#1f253d] hover:text-[#f6f1c9] cursor-default group/item"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#2a5baa] group-hover/item:text-[#f6f1c9] transition-colors" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3 Value Pillars (Why Join Ema?) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full max-w-3xl mb-8 sm:mb-10 text-right">
              {PERKS.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0f121d]/80 border border-[#f6f1c9]/10 flex flex-col gap-2 transition-all duration-300 hover:border-[#f6f1c9]/30 hover:bg-[#141826]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#2a5baa]/20 border border-[#2a5baa]/40 flex items-center justify-center text-[#f6f1c9] shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#f6f1c9]" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#f6f1c9]">
                        {perk.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#f6f1c9]/65 font-light leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Area: Prominent Glowing Button */}
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <Button
                to="/join"
                variant="glow"
                size="lg"
                icon={<ArrowLeft className="w-5 h-5" />}
                iconPosition="left"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg font-black px-10 py-4 sm:px-14 sm:py-5 shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#f6f1c9] to-[#e8e0aa] text-[#08090c]"
              >
                {JOIN_CTA_CONTENT.buttonText}
              </Button>

              {/* Fast completion reassurance */}
              <div className="inline-flex items-center gap-2 text-xs text-[#f6f1c9]/60 font-light mt-1">
                <Clock className="w-3.5 h-3.5 text-[#2a5baa]" />
                <span>زمان تکمیل فرم: حدود ۳ دقیقه • بدون نیاز به پرداخت هزینه</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
