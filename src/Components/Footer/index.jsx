// ==========================================
// Layout Component: Footer
// Cinematic footer with brand identity, direct contact channels, and copyright
// ==========================================

import React from "react";
import { Link } from "react-router-dom";
import {
  Film,
  ArrowUp,
  Heart,
  Sparkles,
  Send,
  Mail,
  Instagram,
  Phone,
  MessageCircle,
} from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS } from "../../Constants/navigation";
import { SITE_INFO } from "../../Constants/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Instagram":
        return <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "Send":
        return <Send className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "Mail":
        return <Mail className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "Phone":
        return <Phone className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-[#f6f1c9]/10 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden text-[#f6f1c9]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#2a5baa]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#f6f1c9]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#f6f1c9]/10">

          {/* 1. Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#131620] border border-[#f6f1c9]/20 flex items-center justify-center shadow-lg shrink-0">
                <img
                  src="/assets/images/logo-cream.png"
                  alt="عما سینما"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.target.src.includes('/assets/images/')) {
                      e.target.src = '/logo-cream.png';
                    } else {
                      e.target.style.display = "none";
                      if (e.target.nextSibling) e.target.nextSibling.style.display = "flex";
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-[#f6f1c9]">
                  <Film className="w-5 h-5 text-[#f6f1c9]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-[#f6f1c9]">
                  {SITE_INFO.nameFa}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#f6f1c9]/60 font-light">
                  {SITE_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#f6f1c9]/70 leading-relaxed max-w-md font-normal text-justify sm:text-right">
              «عما سینما یک خانواده فیلمساز و روایتگر است؛ جمعی از آدم‌هایی که باور دارند هر آدم، هر اتفاق و هر ایده‌ای می‌تواند قصه‌ای برای گفتن داشته باشد.»
            </p>

            <div className="flex items-center gap-2 text-xs text-[#2a5baa] font-semibold mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2a5baa] animate-pulse"></span>
              <span className="text-[#f6f1c9]/80">{SITE_INFO.quote}</span>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 sm:gap-4 text-right">
            <h4 className="text-xs sm:text-sm font-bold text-[#f6f1c9] tracking-wider uppercase border-r-2 border-[#2a5baa] pr-2.5">
              بخش‌های سایت
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-2.5 lg:gap-x-3 lg:gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#f6f1c9]/70 hover:text-[#f6f1c9] transition-colors duration-200 inline-flex items-center gap-1.5 py-1"
                  >
                    <span className="text-[#2a5baa] text-xs font-bold">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect & Contact Details (Mobile-First Aligned, Balanced Desktop Grid) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4 text-right">
            <h4 className="text-xs sm:text-sm font-bold text-[#f6f1c9] tracking-wider uppercase border-r-2 border-[#2a5baa] pr-2.5">
              ارتباط با خانواده عما
            </h4>

            {/* Direct Contact Items Grid */}
            <div className="flex flex-col gap-2 pt-1 lg:grid lg:grid-cols-2 lg:gap-2.5">
              {/* Phone */}
              <a
                href={CONTACT_DETAILS.phone.href}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#121520]/70 border border-[#f6f1c9]/12 hover:border-[#f6f1c9]/35 hover:bg-[#181c2b] transition-all group lg:col-span-1"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#191e2e] border border-[#f6f1c9]/15 flex items-center justify-center text-[#f6f1c9] group-hover:bg-[#2a5baa] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#f6f1c9]/80 font-medium">شماره تماس</span>
                </div>
                <span dir="ltr" className="text-xs font-mono font-bold text-[#f6f1c9] group-hover:text-[#2a5baa] transition-colors">
                  {CONTACT_DETAILS.phone.display}
                </span>
              </a>

              {/* Instagram */}
              <a
                href={CONTACT_DETAILS.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#121520]/70 border border-[#f6f1c9]/12 hover:border-[#f6f1c9]/35 hover:bg-[#181c2b] transition-all group lg:col-span-1"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#191e2e] border border-[#f6f1c9]/15 flex items-center justify-center text-[#f6f1c9] group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-500 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#f6f1c9]/80 font-medium">اینستاگرام</span>
                </div>
                <span dir="ltr" className="text-xs font-mono text-[#f6f1c9]/90 group-hover:text-[#f6f1c9] transition-colors">
                  @{CONTACT_DETAILS.instagram.handle}
                </span>
              </a>

              {/* Telegram Channel */}
              <a
                href={CONTACT_DETAILS.telegramChannel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#121520]/70 border border-[#f6f1c9]/12 hover:border-[#f6f1c9]/35 hover:bg-[#181c2b] transition-all group lg:col-span-1"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#191e2e] border border-[#f6f1c9]/15 flex items-center justify-center text-[#f6f1c9] group-hover:bg-[#2a5baa] transition-colors">
                    <Send className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#f6f1c9]/80 font-medium">کانال خانواده</span>
                </div>
                <span dir="ltr" className="text-xs font-mono text-[#f6f1c9]/90 group-hover:text-[#2a5baa] transition-colors">
                  {CONTACT_DETAILS.telegramChannel.handle}
                </span>
              </a>

              {/* Telegram Admin / Support */}
              <a
                href={CONTACT_DETAILS.telegramAdmin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#121520]/70 border border-[#f6f1c9]/12 hover:border-[#f6f1c9]/35 hover:bg-[#181c2b] transition-all group lg:col-span-1"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#191e2e] border border-[#f6f1c9]/15 flex items-center justify-center text-[#f6f1c9] group-hover:bg-[#2a5baa] transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#f6f1c9]/80 font-medium">ادمین و پشتیبانی</span>
                </div>
                <span dir="ltr" className="text-xs font-mono text-[#f6f1c9]/90 group-hover:text-[#2a5baa] transition-colors">
                  {CONTACT_DETAILS.telegramAdmin.handle}
                </span>
              </a>

              {/* Email */}
              <a
                href={CONTACT_DETAILS.email.href}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#121520]/70 border border-[#f6f1c9]/12 hover:border-[#f6f1c9]/35 hover:bg-[#181c2b] transition-all group lg:col-span-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#191e2e] border border-[#f6f1c9]/15 flex items-center justify-center text-[#f6f1c9] group-hover:bg-[#2a5baa] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#f6f1c9]/80 font-medium">ایمیل ارتباطی</span>
                </div>
                <span dir="ltr" className="text-xs font-mono text-[#f6f1c9]/80 group-hover:text-[#f6f1c9] transition-colors truncate max-w-[170px] sm:max-w-none">
                  {CONTACT_DETAILS.email.address}
                </span>
              </a>
            </div>

            {/* Quick Action Link */}
            <div className="pt-1">
              <Link
                to="/join"
                className="inline-flex items-center justify-center gap-2 w-full text-xs font-bold text-[#f6f1c9] bg-[#f6f1c9]/10 hover:bg-[#f6f1c9]/20 py-2.5 px-4 rounded-xl border border-[#f6f1c9]/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2a5baa]" />
                <span>تکمیل فرم پیوستن به عما</span>
                <span className="text-[#2a5baa]">←</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f6f1c9]/55">
          <p className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-center sm:text-right">
            <span>{SITE_INFO.copyright}</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-[#f6f1c9]/70">
              خلق شده با <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> برای سینما
            </span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#f6f1c9]/70 hover:text-[#f6f1c9] transition-colors group cursor-pointer focus:outline-none py-1 px-3 rounded-lg hover:bg-white/5"
            aria-label="بازگشت به ابتدای صفحه"
          >
            <span>بازگشت به ابتدای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
