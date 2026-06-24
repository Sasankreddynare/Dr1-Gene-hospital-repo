import { ActivePage } from "../types";
import { HOSPITAL_CONTACT, PACKAGES_DATA } from "../data";
import HospitalLogo from "./HospitalLogo";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

interface FooterProps {
  onPageChange: (page: ActivePage) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (page: ActivePage) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", page: "home" as ActivePage },
    { label: "About Us", page: "about" as ActivePage },
    { label: "Our Specialties", page: "services" as ActivePage },
    { label: "Gallery Tour", page: "gallery" as ActivePage },
    { label: "Testimonials", page: "testimonials" as ActivePage },
    { label: "Contact Us", page: "contact" as ActivePage }
  ];

  return (
    <footer className="bg-[#F8FAFC] text-slate-500 border-t border-slate-200 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-200 pb-12">
          
          {/* Col 1: Logo & Contacts */}
          <div className="lg:col-span-8 space-y-5">
            <button onClick={() => handleNavClick("home")} className="focus:outline-none">
              <HospitalLogo variant="dark" />
            </button>
            <p className="text-slate-500 text-xs leading-relaxed font-semibold max-w-2xl">
              Dr1 Gene Hospital beside One World International School provides advanced multi-speciality therapies, diagnostic blood evaluation, and expert consultations close to Whitefield.
            </p>
            <div className="space-y-3 text-xs font-bold text-slate-600">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{HOSPITAL_CONTACT.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>+91 {HOSPITAL_CONTACT.phones[0]} / {HOSPITAL_CONTACT.phones[1]}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{HOSPITAL_CONTACT.email}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Timings & Emergencies */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-5 border-l-2 border-blue-600 pl-3">
              Support
            </h3>
            <div className="space-y-4 text-xs font-bold text-slate-500">
              <div>
                <p className="text-slate-800 font-extrabold flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>OPD Hours</span>
                </p>
                <p className="text-[11px] text-slate-500">Mon-Sat: 8 AM - 9 PM</p>
                <p className="text-[11px] text-slate-500">Sunday: 10 AM - 1 PM</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-red-600 font-extrabold text-[10px] uppercase tracking-wider mb-1">Emergency Support</p>
                <a href="tel:9035054532" className="text-slate-900 text-xs font-bold hover:underline">
                  +91 9035054532
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-semibold text-slate-400">
          <p>© {new Date().getFullYear()} Dr1 Gene Hospital. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
