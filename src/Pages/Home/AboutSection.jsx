// ==========================================
// Page Section: About (از ما)
// Asymmetrical, deep-layered cinema viewfinder layout with atmospheric details
// ==========================================

import React from "react";
import { Film, Aperture, Eye, Video, Sparkles, Compass } from "lucide-react";
import { ABOUT_CONTENT } from "../../Constants/content";
import { Badge } from "../../Components/UI";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-28 lg:py-36 bg-[#090b10] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2a5baa]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#f6f1c9]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-12 md:mb-16">
          <Badge
            variant="blue"
            size="md"
            className="mb-3 sm:mb-4 text-xs font-semibold tracking-wider uppercase"
            icon={<Aperture className="w-3.5 h-3.5 text-[#2a5baa]" />}
          >
            {ABOUT_CONTENT.tag}
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#f6f1c9] tracking-tight leading-tight">
            {ABOUT_CONTENT.heading}
          </h2>
        </div>

        {/* Asymmetrical Layered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Right Column (RTL: Text & Philosophy) */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 relative z-20">
            
            {/* Main Narrative Card with Depth */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#121520]/85 border border-[#f6f1c9]/15 p-4 sm:p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/80">
              
              {/* Bold Quote Callout */}
              <p className="text-base sm:text-2xl md:text-3xl font-extrabold text-[#f6f1c9] mb-4 sm:mb-8 leading-snug border-r-4 border-[#2a5baa] pr-3.5 sm:pr-5">
                «آیا این قصه ارزش گفتن دارد؟»
              </p>

              {/* Body Text */}
              <p className="text-sm sm:text-base md:text-lg text-[#f6f1c9]/85 font-light leading-relaxed sm:leading-loose text-right">
                {ABOUT_CONTENT.body}
              </p>
            </div>
          </div>

          {/* Left Column (Visual Viewfinder Composition) */}
          <div className="lg:col-span-5 relative">
            
            {/* Viewfinder Outer Frame Container with Camera HUD */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Depth Layer (Asymmetrical Offset) */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#2a5baa]/30 to-[#f6f1c9]/10 rounded-3xl blur-xl opacity-70 transform -rotate-2" />

              {/* Camera Monitor Card with Aspect Ratio Reserved */}
              <div className="relative rounded-2xl bg-[#0d0f16] border-2 border-[#f6f1c9]/25 p-3 sm:p-4 shadow-2xl shadow-black overflow-hidden group">
                
                {/* Viewfinder HUD Overlays (Crosshairs, Frame Marks) */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-mono text-red-400 border border-red-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>REC [4K]</span>
                </div>

                <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-mono text-[#f6f1c9]/80 border border-[#f6f1c9]/20">
                  <span>ISO 800 • 1/50</span>
                </div>

                <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-mono text-[#f6f1c9]/80 border border-[#f6f1c9]/20">
                  <span>50MM F/1.2</span>
                </div>

                {/* Viewfinder Center Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-30">
                  <div className="w-10 h-10 border border-dashed border-[#f6f1c9] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#f6f1c9] rounded-full" />
                  </div>
                </div>

                {/* Corner Frame Crop Brackets */}
                <div className="absolute top-7 right-7 w-4 h-4 border-t-2 border-r-2 border-[#f6f1c9]/60 z-20 pointer-events-none" />
                <div className="absolute top-7 left-7 w-4 h-4 border-t-2 border-l-2 border-[#f6f1c9]/60 z-20 pointer-events-none" />
                <div className="absolute bottom-7 right-7 w-4 h-4 border-b-2 border-r-2 border-[#f6f1c9]/60 z-20 pointer-events-none" />
                <div className="absolute bottom-7 left-7 w-4 h-4 border-b-2 border-l-2 border-[#f6f1c9]/60 z-20 pointer-events-none" />

                {/* Image Placeholder with Guaranteed 4:3 Ratio */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#181c28] via-[#10131c] to-[#07090d] flex flex-col items-center justify-center text-center p-6 border border-[#f6f1c9]/10">
                  <img
                    src="/DSC01333.JPG"
                    alt="قاب پشت صحنه عما سینما"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const currentSrc = e.currentTarget.getAttribute("src");
                      if (currentSrc === "/DSC01333.JPG") {
                        e.currentTarget.src = "/DSC01333.webp";
                      } else if (currentSrc === "/DSC01333.webp") {
                        e.currentTarget.src = "/assets/images/DSC01333.JPG";
                      } else if (currentSrc === "/assets/images/DSC01333.JPG") {
                        e.currentTarget.src = "/assets/images/DSC01333.webp";
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

                  {/* Fallback Viewfinder Art */}
                  <div className="hidden w-full h-full flex-col items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#2a5baa]/20 border border-[#2a5baa]/50 flex items-center justify-center mb-4 text-[#f6f1c9] shadow-lg">
                      <Eye className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-bold text-[#f6f1c9] tracking-wider mb-1">
                      تصویر قاب عما سینما
                    </span>
                    <span className="text-[11px] text-[#f6f1c9]/50 font-mono">
                      PLACEHOLDER • ASPECT RATIO 4:3
                    </span>
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#f6f1c9]/60 font-mono px-2">
                  <span>FRAME: EMA_STILL_01</span>
                  <span>ASPECT 1.33:1</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
