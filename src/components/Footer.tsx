import { ActivePage } from "../types";
import { HOSPITAL_CONTACT } from "../data";
import HospitalLogo from "./HospitalLogo";
import { Phone, MapPin, Mail, Clock, ArrowUp, Instagram } from "lucide-react";

interface FooterProps {
  onPageChange: (page: ActivePage) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (page: ActivePage) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-8 text-left relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Main Header / Info Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-900">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick("home")} 
              className="focus:outline-none block hover:opacity-90 transition-opacity text-left"
            >
              <HospitalLogo variant="light" className="h-16 sm:h-20" />
            </button>
          </div>

          {/* OPD Inline Hours */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs bg-slate-900/40 px-4 py-2.5 rounded-xl border border-slate-900/80">
            <div className="flex items-center gap-1.5 text-slate-300 font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>OPD Hours:</span>
            </div>
            <span className="text-slate-400 font-semibold">Mon - Sat: <strong className="text-slate-200">8 AM - 9 PM</strong></span>
            <span className="text-slate-800">•</span>
            <span className="text-slate-400 font-semibold">Sunday: <strong className="text-slate-200">10 AM - 1 PM</strong></span>
          </div>

        </div>

        {/* Contact Links Bar (Extremely clean & horizontal) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
          
          {/* Contact Details */}
          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-x-6 gap-y-3.5 text-xs text-slate-300 font-semibold">
            
            {/* Address */}
            <div className="flex items-center gap-2 max-w-md">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{HOSPITAL_CONTACT.address}</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <div className="flex items-center gap-2">
                <a href={`tel:${HOSPITAL_CONTACT.phones[0]}`} className="hover:text-white transition">
                  {HOSPITAL_CONTACT.phones[0]}
                </a>
                <span className="text-slate-700">|</span>
                <a href={`tel:${HOSPITAL_CONTACT.phones[1]}`} className="hover:text-white transition">
                  {HOSPITAL_CONTACT.phones[1]}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <a href={`mailto:${HOSPITAL_CONTACT.email}`} className="hover:text-white transition">
                {HOSPITAL_CONTACT.email}
              </a>
            </div>

          </div>

          {/* Instagram Button */}
          <a 
            href={HOSPITAL_CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-850 border border-slate-850 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition-all text-[10px] font-bold uppercase tracking-wider max-w-max cursor-pointer"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-500" />
            <span>Instagram</span>
          </a>

        </div>

        {/* Subfooter */}
        <div className="mt-4 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} Dr1 Gene Hospital. All rights reserved.</p>
          
          {/* Scroll to Top button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-400 px-4 py-2 rounded-full border border-slate-800/80 transition-all duration-200 text-[10px] font-extrabold uppercase tracking-widest cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
