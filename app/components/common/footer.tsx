"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Plane,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Social Media Icons
import {
  FaYoutube,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

export default function footer() {
  const pathname = usePathname();

  // 1. HIDE FOOTER ON ADMIN/OPS PAGES
  if (pathname.startsWith('/ops')) return null;

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-6 w-6 -rotate-45 text-sky-500" />
              <span className="font-black text-2xl tracking-tighter text-white">
                Tour & Travel
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus dignissimos quia eveniet soluta dicta omnis assumenda, aliquid eligendi vel quas non, temporibus ipsum eum perspiciatis corporis placeat sequi ratione.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaYoutube size={18} />, label: "YouTube" },
                { icon: <FaFacebook size={18} />, label: "Facebook" },
                { icon: <FaInstagram size={18} />, label: "Instagram" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Destinations", "Plan Your Trip", "Contact" , "About", "Book Now"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-sky-500 text-sm font-medium transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-sky-500 shrink-0" />
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-slate-300 text-sm font-bold hover:text-white transition-colors cursor-pointer">+91 00000 00000</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-sky-500 shrink-0" />
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-slate-300 text-sm font-bold hover:text-white transition-colors cursor-pointer">hello@tourtravel.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Location & Map */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Office Address</h4>
            <div className="space-y-6">
              <address className="flex items-start gap-3 not-italic">
                <MapPin size={18} className="text-sky-500 shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    123 , ABC<br />
                    Varanasi, Uttar Pradesh, India
                  </p>
                </div>
              </address>

              {/* Google Maps Embed - Placeholder updated to a valid-style URL structure */}
              <div className="w-full h-32 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-500 group">
                <iframe
                  title="office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.16913531123!2d82.90870634629707!3d25.32089104043967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db7607b03e9%3A0xad1348b08ad3b69!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713360000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="group-hover:grayscale-60 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 Tour & Travel. All Rights Reserved.  
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
