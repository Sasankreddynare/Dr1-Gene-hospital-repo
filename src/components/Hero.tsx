import { Phone, MessageSquare } from "lucide-react";
import { ActivePage } from "../types";
import { HOSPITAL_CONTACT } from "../data";

interface HeroProps {
  onPageChange: (page: ActivePage) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  const handleWhatsApp = () => {
    const formattedPhone = HOSPITAL_CONTACT.whatsapp.replace("+", "");
    window.open(`https://wa.me/${formattedPhone}?text=Hi! I am looking to schedule a medical consult at Dr1 Gene Hospital.`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${HOSPITAL_CONTACT.phones[0]}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/80">
      {/* Subtle decorative background glow */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100/50">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Available 24/7 in Whitefield
        </div>

        {/* Main Headline */}
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
          Advanced Multi-Speciality <br />
          <span className="text-blue-600">Healthcare</span> Under One Roof
        </h1>

        {/* Subheading */}
        <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
          Trusted doctors, advanced diagnostics, emergency support, and personalized treatment plans designed meticulously for your family's lifelong wellness. We Find. We Treat.
        </p>

        {/* CTA Buttons Grid */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl shadow-blue-100 hover:scale-105 transition-all duration-200"
          >
            <Phone className="w-4 h-4 fill-white/10" />
            <span>Call Support</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl shadow-emerald-100 hover:scale-105 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 fill-white/10" />
            <span>WhatsApp Chat</span>
          </button>

          <button
            onClick={() => {
              onPageChange("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-colors duration-200"
          >
            <span>Location & OPD Timings</span>
          </button>
        </div>



      </div>
    </section>
  );
}
