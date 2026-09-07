// ==========================================
// Page: Home (صفحه اصلی)
// Combines Hero, About, Work Teaser, Family, Memories, and Join CTA sections
// ==========================================

import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorkTeaserSection from "./WorkTeaserSection";
import FamilySection from "./FamilySection";
import MemoriesSection from "./MemoriesSection";
import JoinCtaSection from "./JoinCtaSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section (از ما) */}
      <AboutSection />

      {/* 3. Work Teaser Section (تیزر اثر ما) */}
      <WorkTeaserSection />

      {/* 4. Family Section (خانواده ما) */}
      <FamilySection />

      {/* 5. Memories Section (خاطرات ما) */}
      <MemoriesSection />

      {/* 6. Join CTA Section (دعوت به همکاری) */}
      <JoinCtaSection />
    </div>
  );
}
