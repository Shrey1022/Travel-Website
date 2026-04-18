"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. HIDE NAVBAR ON ADMIN/OPS PAGES
  if (pathname.startsWith('/ops')) return null;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- STYLING LOGIC ---
  const navBg = isScrolled
    ? "bg-white/90 backdrop-blur-md shadow-md py-4"
    : "bg-transparent py-6";

  const textColor = isScrolled
    ? "text-slate-900"
    : "text-white";

  const logoColor = isScrolled
    ? "text-sky-500"
    : "text-white";

  const linkColor = isScrolled
    ? "text-slate-500 hover:text-sky-500"
    : "text-white/80 hover:text-white";

  const navLinks = ["Home", "Destinations", "Plan Your Trip", "Contact", "About"];

  const formatUrl = (item: string) => {
    if (item === "Home") return "/";
    return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    // Updated z-index to standard Tailwind high-priority
    <nav className={`fixed top-0 left-0 right-0 z-100 w-full transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-110">
          <Plane className={`h-6 w-6 -rotate-45 transition-colors duration-500 ${mobileMenuOpen ? "text-slate-900" : logoColor}`} />
          <span className={`font-black text-xl tracking-tighter transition-colors duration-500 ${mobileMenuOpen ? "text-slate-900" : textColor}`}>
            Tour & Travel
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={formatUrl(item)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${linkColor}`}
            >
              {item}
            </Link>
          ))}

          <Link href="/book-now">
            <button className={`px-6 py-2 rounded-full font-black text-[11px] tracking-widest transition-all duration-300 cursor-pointer ${
                isScrolled
                ? "bg-sky-500 text-white hover:bg-slate-900"
                : "bg-white text-sky-500 hover:bg-slate-200"
              }`}>
              BOOK NOW
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={`md:hidden relative z-110 p-2 transition-colors duration-500 cursor-pointer ${mobileMenuOpen ? "text-slate-900" : textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-105 flex flex-col md:hidden"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 pt-20">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={formatUrl(item)} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-3xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3 group cursor-pointer"
                  >
                    {item}
                    <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-500" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/book-now" onClick={() => setMobileMenuOpen(false)}>
                  <button className="mt-4 px-12 py-4 bg-sky-500 text-white rounded-full font-black tracking-widest text-[11px] shadow-xl shadow-sky-100 cursor-pointer hover:bg-slate-900 transition-all">
                    BOOK NOW
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}