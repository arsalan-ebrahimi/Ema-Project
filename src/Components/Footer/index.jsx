// ==========================================
// Layout Component: Footer
// Cinematic footer with brand identity, social channels, and copyright
// ==========================================

import React from "react";
import { Link } from "react-router-dom";
import { Film, ArrowUp, Heart, Sparkles, Send, Youtube, Mail, Instagram } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "../../Constants/navigation";
import { SITE_INFO } from "../../Constants/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Instagram":
        return <Instagram className="w-5 h-5" />;
      case "Send":
        return <Send className="w-5 h-5" />;
      case "Youtube":
        return <Youtube className="w-5 h-5" />;
      case "Film":
        return <Film className="w-5 h-5" />;
      case "Mail":
        return <Mail className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-[#f6f1c9]/10 pt-16 pb-12 overflow-hidden text-[#f6f1c9]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2a5baa]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f6f1c9]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#f6f1c9]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#131620] border border-[#f6f1c9]/20 flex items-center justify-center shadow-lg">
                <img
                  src="/assets/images/logo-cream.png"
                  alt="عما سینما"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-[#f6f1c9]">
                  <Film className="w-6 h-6 text-[#f6f1c9]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-[#f6f1c9]">
                  {SITE_INFO.nameFa}
                </h3>
                <p className="text-xs text-[#f6f1c9]/60 font-light">
                  {SITE_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#f6f1c9]/70 leading-relaxed max-w-md mt-2 font-normal">
              «عما سینما یک خانواده فیلمساز و روایتگر است؛ جمعی از آدم‌هایی که باور دارند هر آدم، هر اتفاق و هر ایده‌ای می‌تواند قصه‌ای برای گفتن داشته باشد.»
            </p>

            <div className="flex items-center gap-2 text-xs text-[#2a5baa] font-semibold mt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2a5baa] animate-pulse"></span>
              <span className="text-[#f6f1c9]/80">{SITE_INFO.quote}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#f6f1c9] tracking-wider uppercase">
              بخش‌های سایت
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#f6f1c9]/65 hover:text-[#f6f1c9] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#2a5baa] text-xs font-bold">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#f6f1c9] tracking-wider uppercase">
              ارتباط با عما
            </h4>
            <p className="text-xs text-[#f6f1c9]/60 leading-relaxed">
              اگر علاقه‌مند به همکاری، گفتگو درباره سینما یا ساخت پروژه مشترک هستید، مشتاقانه منتظر پیام شما هستیم.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-xl bg-[#12151f] border border-[#f6f1c9]/15 flex items-center justify-center text-[#f6f1c9]/80 hover:text-[#f6f1c9] hover:bg-[#2a5baa] hover:border-[#2a5baa] transition-all duration-300 group"
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#f6f1c9] bg-[#f6f1c9]/10 hover:bg-[#f6f1c9]/20 px-4 py-2 rounded-xl border border-[#f6f1c9]/20 transition-all"
              >
                <span>فرم درخواست عضویت در گروه</span>
                <span className="text-[#2a5baa]">←</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f6f1c9]/50">
          <p className="flex items-center gap-1">
            <span>{SITE_INFO.copyright}</span>
            <span className="mx-1">•</span>
            <span className="inline-flex items-center gap-1 text-[#f6f1c9]/70">
              خلق شده با <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> برای سینما
            </span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#f6f1c9]/70 hover:text-[#f6f1c9] transition-colors group cursor-pointer focus:outline-none"
          >
            <span>بازگشت به ابتدای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
