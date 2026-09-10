// ==========================================
// Layout Component: Header
// Cinematic navigation bar with glassmorphic backdrop & mobile drawer
// ==========================================

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Film, Sparkles } from "lucide-react";
import { NAV_LINKS } from "../../Constants/navigation";
import { Button } from "../UI";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll position to intensify navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle anchor navigation smoothly
  const handleNavClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 py-4 border-none border-0 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090c]/95 backdrop-blur-2xl shadow-[0_12px_35px_-5px_rgba(0,0,0,0.85),0_25px_50px_rgba(0,0,0,0.95)]"
          : "bg-gradient-to-b from-[#08090c]/90 via-[#08090c]/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Icon */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none"
            aria-label="صفحه اصلی عما سینما"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden bg-[#131620] border border-[#f6f1c9]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-[#f6f1c9]/50 shadow-md">
              <img
                src="/assets/images/logo-cream.png"
                alt="لوگوی عما سینما"
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
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-[#12151f]/60 backdrop-blur-md border border-[#f6f1c9]/10">
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              return isAnchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs xl:text-sm font-medium text-[#f6f1c9]/75 hover:text-[#f6f1c9] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-[#f6f1c9]/10"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs xl:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    location.pathname === link.href
                      ? "text-[#08090c] bg-[#f6f1c9] font-bold"
                      : "text-[#f6f1c9]/75 hover:text-[#f6f1c9] hover:bg-[#f6f1c9]/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              to="/join"
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="hidden sm:inline-flex shadow-sm hover:shadow-md hover:shadow-[#f6f1c9]/20"
            >
              پیوستن به عما
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#131620] border border-[#f6f1c9]/15 text-[#f6f1c9] hover:bg-[#1b202e] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "بستن منو" : "باز کردن منو"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 rounded-2xl bg-[#0e111a]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl shadow-black transition-all animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              return isAnchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-[#f6f1c9]/85 hover:text-[#f6f1c9] py-2.5 px-4 rounded-xl hover:bg-[#f6f1c9]/10 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-4 rounded-xl transition-colors ${
                    location.pathname === link.href
                      ? "text-[#08090c] bg-[#f6f1c9] font-bold"
                      : "text-[#f6f1c9]/85 hover:text-[#f6f1c9] hover:bg-[#f6f1c9]/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10">
              <Button
                to="/join"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<Sparkles className="w-4 h-4" />}
                iconPosition="right"
              >
                پیوستن به خانواده عِـمـا
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
