import { ActivePage } from "../types";
import { HOSPITAL_CONTACT } from "../data";
import HospitalLogo from "./HospitalLogo";
import { Phone, MapPin, Mail, Clock, ChevronRight, ArrowUp, Activity, ShieldAlert } from "lucide-react";

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

  const navLinks = [
    { label: "Home Base", page: "home" as ActivePage },
    { label: "About Our Clinic", page: "about" as ActivePage },
    { label: "Our Specialties", page: "services" as ActivePage },
    { label: "Facility Gallery", page: "gallery" as ActivePage },
    { label: "Patient Stories", page: "testimonials" as ActivePage },
    { label: "Get In Touch", page: "contact" as ActivePage }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 text-left relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-slate-900 pb-12">
          
          {/* Column 1: Brand & Identity (4 span) */}
          <div className="lg:col-span-4 space-y-6">
            <button 
              onClick={() => handleNavClick("home")} 
              className="focus:outline-none block hover:opacity-90 transition-opacity"
            >
              <HospitalLogo variant="light" className="h-14" />
            </button>
            <p className="text-slate-400 text-xs leading-relaxed font-medium max-w-sm">
              Dr1 Gene Hospital beside One World International School provides state-of-the-art multi-speciality therapies, meticulous diagnostic blood assessments, and custom-tailored consultations for patients around Whitefield and Bangalore.
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800/80 px-3 py-1.5 rounded-lg">
              <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Certified Standard of Care</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (3.5 span) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-blue-500 rounded-full inline-block"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white hover:translate-x-1.5 transition-all duration-200 font-bold focus:outline-none group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (3 span) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-blue-500 rounded-full inline-block"></span>
              Get in Touch
            </h3>
            <div className="space-y-4 text-xs font-bold text-slate-400">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="leading-relaxed font-semibold text-slate-300">
                  {HOSPITAL_CONTACT.address}
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${HOSPITAL_CONTACT.phones[0]}`} className="hover:text-white transition-colors">
                    +91 {HOSPITAL_CONTACT.phones[0]}
                  </a>
                  <a href={`tel:${HOSPITAL_CONTACT.phones[1]}`} className="hover:text-white transition-colors">
                    +91 {HOSPITAL_CONTACT.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a href={`mailto:${HOSPITAL_CONTACT.email}`} className="hover:text-white transition-colors font-semibold text-slate-300 truncate">
                  {HOSPITAL_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours & Emergencies (1.5 span) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-full inline-block"></span>
                OPD Hours
              </h3>
              <div className="space-y-2 text-[11px] font-bold text-slate-400 bg-slate-900/40 p-3.5 rounded-xl border border-slate-900">
                <div className="flex items-center gap-1.5 text-slate-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Consultation</span>
                </div>
                <p>Mon - Sat: 8 AM - 9 PM</p>
                <p>Sunday: 10 AM - 1 PM</p>
              </div>
            </div>

            <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/30 shadow-sm shadow-red-950/20 group hover:border-red-900/60 transition-all duration-300">
              <div className="flex items-center gap-1.5 text-red-400 font-extrabold text-[10px] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                <span>Emergency Support</span>
              </div>
              <a 
                href={`tel:${HOSPITAL_CONTACT.phones[0]}`} 
                className="text-white text-sm font-extrabold hover:underline block"
              >
                +91 {HOSPITAL_CONTACT.phones[0]}
              </a>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} Dr1 Gene Hospital. All rights reserved.</p>
          
          {/* Scroll to Top button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 hover:text-white text-slate-400 px-3.5 py-1.5 rounded-full border border-slate-800/80 transition-all duration-200 text-[10px] font-extrabold uppercase tracking-wider cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
