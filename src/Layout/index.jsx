// ==========================================
// Layout Component: Main Shell
// Wraps all public pages with cinematic Header, Footer, and Toast notifications
// ==========================================

import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on page route changes
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-[#08090c] text-[#f6f1c9] relative overflow-x-hidden">
      {/* Sticky Glassmorphic Header */}
      <Header />

      {/* Main Dynamic Page Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Cinematic Footer */}
      <Footer />

      {/* Global Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4500,
          style: {
            direction: "rtl",
            background: "#131620",
            color: "#f6f1c9",
            border: "1px solid rgba(246, 241, 201, 0.2)",
            borderRadius: "14px",
            fontSize: "14px",
            fontFamily: "Shazde, sans-serif",
            padding: "12px 18px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
          },
        }}
      />
    </div>
  );
}
