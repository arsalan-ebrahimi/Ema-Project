// ==========================================
// Page: Join / Membership Form (صفحه فرم عضویت)
// Connected directly to Porskad (پرس‌کاد) form:
// https://porskad.vercel.app/f/form-qvav6s
// ==========================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Film,
  Loader2,
} from "lucide-react";
import { Badge } from "../../Components/UI";

const PORSKAD_FORM_URL = "https://porskad.vercel.app/f/form-qvav6s";

export default function Join() {
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <div className="w-full bg-[#08090c] text-[#f6f1c9] min-h-screen py-24 sm:py-32 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#2a5baa]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#f6f1c9]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#f6f1c9]/70 hover:text-[#f6f1c9] transition-colors group"
          >
            <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </div>

        {/* Page Title & Mission */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge
            variant="cream"
            size="md"
            className="mb-4 text-xs font-semibold"
            icon={<Sparkles className="w-3.5 h-3.5 text-[#2a5baa]" />}
          >
            پیوستن به عِـمـا
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight mb-4">
            فرم عضویت در خانواده عِـمـا سـیـنـمـا
          </h1>
          <p className="text-sm sm:text-base text-[#f6f1c9]/75 font-light leading-relaxed mb-6">
            اگر عاشق ساختنی و فکر می‌کنی چیزی برای ساختن داری، مشتاقیم تو را در جمع خودمان داشته باشیم. اطلاعاتت را از طریق فرم رسمی زیر در پرس‌کاد با ما در میان بگذار.
          </p>

          {/* Quick Action: Open directly in Porskad */}
          <div className="inline-flex items-center gap-3">
            <a
              href={PORSKAD_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#171a29] text-[#f6f1c9] hover:bg-[#2a5baa] border border-[#f6f1c9]/20 hover:border-[#f6f1c9]/40 transition-all shadow-lg hover:shadow-black/60 group"
            >
              <span>تکمیل فرم در پنجره اختصاصی پرس‌کاد</span>
              <ExternalLink className="w-4 h-4 text-[#2a5baa] group-hover:text-[#f6f1c9] transition-colors" />
            </a>
          </div>
        </div>

        {/* Embedded Porskad Form Container */}
        <div className="relative rounded-3xl bg-[#10131e]/90 border border-[#f6f1c9]/20 backdrop-blur-2xl shadow-2xl shadow-black/80 p-2 sm:p-4 overflow-hidden">
          
          {/* Top Decorative Camera Frame Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#f6f1c9]/10 text-xs font-mono text-[#f6f1c9]/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
              <span className="font-bold text-[#f6f1c9]">EMA CINEMA • FORM GATEWAY</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2a5baa]" />
              <span className="hidden sm:inline">سامانه امن پرس‌کاد</span>
            </div>
          </div>

          {/* Loading Indicator */}
          {iframeLoading && (
            <div className="absolute inset-x-0 top-14 bottom-0 bg-[#0d0f17] flex flex-col items-center justify-center z-20 gap-4 text-center p-6">
              <Loader2 className="w-10 h-10 text-[#2a5baa] animate-spin" />
              <p className="text-sm font-bold text-[#f6f1c9]/80">
                در حال بارگذاری فرم عضویت پرس‌کاد...
              </p>
              <span className="text-xs text-[#f6f1c9]/50">
                چنانچه فرم پس از چند ثانیه ظاهر نشد، می‌توانید از دکمه بالا برای باز کردن در پنجره جدید استفاده کنید.
              </span>
            </div>
          )}

          {/* Porskad Form Iframe */}
          <div className="w-full relative min-h-[700px] sm:min-h-[820px] md:min-h-[880px] rounded-2xl overflow-hidden bg-white/95">
            <iframe
              src={PORSKAD_FORM_URL}
              title="فرم عضویت عما سینما در پرس‌کاد"
              onLoad={() => setIframeLoading(false)}
              className="w-full h-full min-h-[700px] sm:min-h-[820px] md:min-h-[880px] border-0"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
            />
          </div>

          {/* Bottom Security Footer */}
          <div className="px-4 py-3 border-t border-[#f6f1c9]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f6f1c9]/60">
            <div className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-[#2a5baa]" />
              <span>پاسخ‌ها به صورت مستقیم به دست تیم تولید عِـمـا سـیـنـمـا می‌رسد.</span>
            </div>

            <a
              href={PORSKAD_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f6f1c9]/80 hover:text-[#f6f1c9] underline underline-offset-4 transition-colors"
            >
              لینک مستقیم فرم در پرس‌کاد
            </a>
          </div>

        </div>

        {/* Post-form encouragement */}
        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm text-[#f6f1c9]/60">
            پس از تکمیل فرم، تیم تولید پس از بازبینی مشخصات و رزومه با شما تماس خواهد گرفت.
          </p>
        </div>

      </div>
    </div>
  );
}
