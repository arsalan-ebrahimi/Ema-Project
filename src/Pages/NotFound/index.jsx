// ==========================================
// Page: NotFound (۴۰۴)
// Cinematic 404 error screen: "این سکانس پیدا نشد"
// ==========================================

import React from "react";
import { Link } from "react-router-dom";
import { Clapperboard, Home, Film } from "lucide-react";
import { Button } from "../../Components/UI";

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-[#08090c] text-[#f6f1c9]">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-3xl bg-[#131622] border border-[#f6f1c9]/20 flex items-center justify-center text-[#f6f1c9] shadow-[0_0_40px_rgba(42,91,170,0.3)]">
          <Clapperboard className="w-12 h-12 text-[#2a5baa]" />
        </div>
        <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-[#f6f1c9] text-[#08090c] text-xs font-black">
          کات!
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-black text-[#f6f1c9] mb-4">
        ۴۰۴ — این سکانس در فیلمنامه نیست!
      </h1>

      <p className="text-base text-[#f6f1c9]/70 font-light max-w-md mb-8 leading-relaxed">
        صفحه‌ای که به دنبال آن بودید یافت نشد. شاید این صحنه در اتاق تدوین کات خورده یا آدرس آن تغییر کرده باشد.
      </p>

      <Button
        to="/"
        variant="glow"
        size="lg"
        icon={<Home className="w-5 h-5" />}
        iconPosition="right"
        className="font-bold px-8 py-3.5"
      >
        بازگشت به پلان اول (صفحه اصلی)
      </Button>
    </div>
  );
}
