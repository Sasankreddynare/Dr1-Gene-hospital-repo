import { MessageSquare } from "lucide-react";
import { HOSPITAL_CONTACT } from "../data";

export default function FloatingActions() {
  const handleWhatsApp = () => {
    const formattedPhone = HOSPITAL_CONTACT.whatsapp.replace("+", "");
    window.open(`https://wa.me/${formattedPhone}?text=Hi! I want to book a consultation at Dr1 Gene Hospital.`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Chat Float - All Screens */}
      <button
        id="float-whatsapp-btn"
        onClick={handleWhatsApp}
        className="flex items-center justify-center w-14 h-14 bg-teal-500 text-white rounded-full shadow-2xl shadow-teal-300 cursor-pointer hover:scale-110 transition-transform border-4 border-white group relative"
        aria-label="Enquire via WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-white" />
        <span className="absolute right-16 top-3 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-slate-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
          Enquire via WhatsApp
        </span>
      </button>
    </div>
  );
}
