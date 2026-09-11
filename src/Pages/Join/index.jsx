// ==========================================
// Page: Join / Membership Form (صفحه فرم عضویت و پیوستن به عِـمـا)
// Cinematic layout with mission pillars, embedded Porskad portal,
// 3-step timeline, and direct community contact channels
// ==========================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Loader2,
  Send,
  Instagram,
  Compass,
} from "lucide-react";
import { Badge } from "../../Components/UI";
import { SOCIAL_LINKS } from "../../Constants/navigation";

const PORSKAD_FORM_URL = "https://porskad.vercel.app/f/form-qvav6s";

export default function Join() {
  const [iframeLoading, setIframeLoading] = useState(true);

  const telegramLink = SOCIAL_LINKS.find((s) => s.name.includes("ادمین"))?.href || "https://t.me/emmafamilyadmin";
  const instagramLink = SOCIAL_LINKS.find((s) => s.name.includes("اینستاگرام"))?.href || "https://www.instagram.com/emma___family";

  // 3-Step Process
  const steps = [
    {
      step: "۰۱",
      title: "تکمیل فرم عضویت",
      desc: "معرفی خودتان، علایق سینمایی و زمینه‌هایی که مشتاقید در آن‌ها خلق کنید.",
    },
    {
      step: "۰۲",
      title: "بررسی توسط تیم عما",
      desc: "بررسی سوابق، نگاه هنری و پیدا کردن بهترین هم‌پوشانی با پروژه‌های در دست تولید.",
    },
    {
      step: "۰۳",
      title: "دعوت به دیدار و گفتگو",
      desc: "یک گپ صمیمانه، چای پشت صحنه و آغاز همراهی در مسیر فیلمسازی مشترک.",
    },
  ];

  return (
    <div className="w-full bg-[#07080b] text-[#f6f1c9] min-h-screen pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-28 relative overflow-x-hidden selection:bg-[#2a5baa] selection:text-[#f6f1c9]">
      
      {/* Cinematic Ambient Spotlights */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] md:w-[950px] h-[300px] sm:h-[450px] bg-[#2a5baa]/12 rounded-full blur-[110px] sm:blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-16 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-[#f6f1c9]/5 rounded-full blur-[90px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#2a5baa]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Bar: Pure Clean Navigation Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-8 px-3.5 rounded-full bg-[#111420]/80 border border-[#f6f1c9]/15 text-xs sm:text-sm font-semibold text-[#f6f1c9]/80 hover:text-white hover:border-[#f6f1c9]/40 hover:bg-[#181d2e] transition-all group active:scale-95 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 text-[#2a5baa] group-hover:text-[#f6f1c9] group-hover:-translate-x-1 transition-all" />
            <span>بازگشت به خانه</span>
          </Link>
        </div>

        {/* Page Title & Hero Callout */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <Badge
            variant="cream"
            size="md"
            className="mb-3.5 text-xs font-bold"
            icon={<Sparkles className="w-3.5 h-3.5 text-[#2a5baa]" />}
          >
            دعوت به خانواده فیلمسازان عِـمـا
          </Badge>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight leading-[1.25] mb-4 drop-shadow-md">
            کنار هم، برای خلق قصه‌های تازه
          </h1>

          <p className="text-sm xs:text-base sm:text-lg text-[#f6f1c9]/80 font-light leading-relaxed sm:leading-loose mb-6 text-balance">
            اگر عاشق ساختنی و باور داری هر ایده و هر زاویه دید می‌تواند قصه ارزشمندی برای تصویر شدن باشد، درهای خانواده عما سینما به روی تو باز است.
          </p>

          {/* Quick Action Pill */}
          <div className="inline-flex items-center justify-center gap-2">
            <a
              href={PORSKAD_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-[#131724] text-[#f6f1c9]/90 hover:text-white hover:bg-[#2a5baa] border border-[#f6f1c9]/20 hover:border-[#f6f1c9]/50 transition-all shadow-md active:scale-95 group"
            >
              <span>باز کردن فرم در پنجره اختصاصی پرس‌کاد</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2a5baa] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* EMBEDDED PORSKAD FORM GATEWAY CONTAINER */}
        {/* ============================================================ */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#10131e]/90 border border-[#f6f1c9]/20 backdrop-blur-2xl shadow-2xl shadow-black overflow-hidden mb-12 sm:mb-16">
          
          {/* Top Decorative Console Header Bar */}
          <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-[#f6f1c9]/10 bg-[#0d101a]/80 text-xs font-mono text-[#f6f1c9]/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold text-[#f6f1c9] text-[11px] sm:text-xs tracking-wider">
                EMA CINEMA • MEMBERSHIP GATEWAY
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#f6f1c9]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2a5baa]" />
              <span className="hidden xs:inline">سامانه امن پرس‌کاد</span>
            </div>
          </div>

          {/* Iframe Frame & Synchronized Loading Overlay */}
          <div className="relative w-full min-h-[720px] sm:min-h-[820px] md:min-h-[880px] bg-[#0c0e16]">
            {/* Loading Indicator State */}
            {iframeLoading && (
              <div className="absolute inset-0 bg-[#0c0e16] flex flex-col items-center justify-center z-20 gap-3.5 text-center p-6">
                <Loader2 className="w-9 h-9 text-[#2a5baa] animate-spin" />
                <p className="text-sm font-bold text-[#f6f1c9]/90">
                  در حال بارگذاری فرم رسمی عضویت...
                </p>
                <span className="text-xs text-[#f6f1c9]/50 max-w-sm leading-relaxed">
                  اگر فرم طی چند ثانیه ظاهر نشد، می‌توانید از دکمه بالای صفحه برای تکمیل مستقیم استفاده کنید.
                </span>
              </div>
            )}

            <iframe
              src={PORSKAD_FORM_URL}
              title="فرم عضویت عما سینما در پرس‌کاد"
              referrerPolicy="no-referrer"
              onLoad={() => setIframeLoading(false)}
              className={`w-full h-full min-h-[720px] sm:min-h-[820px] md:min-h-[880px] border-0 bg-[#0c0e16] transition-opacity duration-500 ${
                iframeLoading ? "opacity-0" : "opacity-100"
              }`}
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
            />
          </div>

          {/* Bottom Action Bar: Open in Porskad Button */}
          <div className="px-4 py-3 sm:py-3.5 border-t border-[#f6f1c9]/10 bg-[#0d101a]/80 flex items-center justify-center">
            <a
              href={PORSKAD_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-[#151928] hover:bg-[#2a5baa] border border-[#f6f1c9]/20 hover:border-[#f6f1c9]/45 text-xs sm:text-sm font-bold text-[#f6f1c9] hover:text-white transition-all duration-300 shadow-md hover:shadow-[#2a5baa]/25 group active:scale-95"
            >
              <span>باز کردن فرم در پرس‌کاد</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2a5baa] group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>

        {/* ============================================================ */}
        {/* 3-STEP ROADMAP: WHAT HAPPENS NEXT? */}
        {/* ============================================================ */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center mb-8">
            <Badge variant="blue" size="sm" className="mb-2 text-[11px]">
              مراحل پس از ارسال
            </Badge>
            <h2 className="text-xl sm:text-2xl font-black text-[#f6f1c9]">
              مسیر پیوستن به خانواده چگونه است؟
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#111420]/60 border border-[#f6f1c9]/10 flex flex-col justify-between relative group hover:border-[#f6f1c9]/30 transition-all"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-black text-[#2a5baa] group-hover:text-[#f6f1c9] transition-colors block mb-2">
                    {item.step}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#f6f1c9] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#f6f1c9]/65 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* DIRECT COMMUNITY CONTACT & HELP CALLOUT */}
        {/* ============================================================ */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121626]/90 via-[#0e111a]/90 to-[#14192b]/90 border border-[#f6f1c9]/20 backdrop-blur-xl text-center shadow-xl shadow-black/60 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-[#2a5baa]/20 border border-[#2a5baa]/40 flex items-center justify-center text-[#f6f1c9] mb-3.5">
            <Compass className="w-5 h-5 text-[#2a5baa]" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#f6f1c9] mb-2">
            سوالی درباره فرم یا شرایط عضویت دارید؟
          </h3>

          <p className="text-xs sm:text-sm text-[#f6f1c9]/70 font-light max-w-md mx-auto mb-6 leading-relaxed">
            اگر پیش از تکمیل فرم سوالی دارید یا مایلید درباره زمینه‌های همکاری گپ بزنید، می‌توانید مستقیماً با ادمین در ارتباط باشید.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2a5baa] text-white text-xs font-bold hover:bg-[#3970c7] transition-all shadow-md active:scale-95 group"
            >
              <Send className="w-3.5 h-3.5" />
              <span>ارتباط در تلگرام</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
            </a>

            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171c2c] border border-[#f6f1c9]/20 text-[#f6f1c9] text-xs font-medium hover:text-white hover:border-[#f6f1c9]/50 transition-all shadow-sm active:scale-95 group"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>اینستاگرام عما</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
