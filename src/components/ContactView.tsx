import { 
  MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, Heart, Sparkles, PhoneCall 
} from "lucide-react";
import { HOSPITAL_CONTACT } from "../data";

export default function ContactView() {
  const handleWhatsApp = () => {
    const formattedPhone = HOSPITAL_CONTACT.whatsapp.replace("+", "");
    window.open(`https://wa.me/${formattedPhone}?text=Hi! I am inquiring about medical support at Dr1 Gene Hospital.`, "_blank");
  };

  const handleDial = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\s+/g, "").replace("+", "");
    window.location.href = `tel:${cleanNumber}`;
  };

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Connect with Us</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6 mb-4">
            Connect Directly with Dr1 Gene
          </h1>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
            We do not require complex forms or consultation bookings. Connect with our dedicated clinical representatives instantly via WhatsApp or Direct Call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Details & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Details Cards */}
            <div className="bg-white rounded-2xl p-6.5 border border-slate-200/80 shadow-sm space-y-6">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-1">Our Location</h3>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                    {HOSPITAL_CONTACT.address}
                  </p>
                  <a 
                    href={HOSPITAL_CONTACT.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-xs font-bold mt-2 transition"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="flex gap-4 border-t border-slate-200/60 pt-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-1">Call Desk</h3>
                  <div className="space-y-1 text-slate-500 text-xs font-semibold">
                    {HOSPITAL_CONTACT.phones.map((phone, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleDial(phone)}
                        className="block text-left hover:text-blue-600 transition"
                      >
                        {phone}
                      </button>
                    ))}
                    <button 
                      onClick={handleWhatsApp}
                      className="block text-left text-emerald-600 font-bold hover:text-emerald-700 transition"
                    >
                      WhatsApp: {HOSPITAL_CONTACT.whatsapp}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4 border-t border-slate-200/60 pt-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-1">Email Queries</h3>
                  <div className="space-y-1.5 text-slate-500 text-xs font-semibold">
                    <p>{HOSPITAL_CONTACT.email}</p>
                    <p className="text-slate-400">Alternate: {HOSPITAL_CONTACT.altEmail}</p>
                  </div>
                </div>
              </div>

              {/* OPD Hours */}
              <div className="flex gap-4 border-t border-slate-200/60 pt-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/50">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider mb-1">OPD Consultations Timings</h3>
                  <div className="space-y-1 text-slate-500 text-xs font-semibold">
                    <p>Monday – Saturday: 08:00 AM – 09:00 PM</p>
                    <p>Sunday: 10:00 AM – 01:00 PM</p>
                    <p className="text-red-500 font-bold">Emergency & Ambulance Support: Live Response</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Embedded Iframe */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm aspect-video w-full">
              <iframe
                title="Dr1 Gene Hospital Google Maps location"
                src="https://maps.google.com/maps?q=Dr1%20Gene%20Hospital,%20Goravigere,%20Whitefield,%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none filter brightness-95"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Connection Hub (No Consultation Bookings / Forms) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6.5 md:p-10 border border-slate-200/80 shadow-sm space-y-8">
              <div>
                <span className="inline-flex items-center gap-1 text-[9px] font-extrabold text-blue-600 bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  INSTANT CLINICAL CONNECT DESK
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Choose Your Preferred Connection Mode
                </h2>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed mt-2">
                  Avoid navigating complex forms or waiting for generic emails. Select any of the instant clinical channels below to chat or speak directly with our team.
                </p>
              </div>

              {/* Action Panels */}
              <div className="space-y-6">
                
                {/* Panel 1: WhatsApp Support */}
                <div className="bg-emerald-50/20 border border-emerald-100/50 p-6 rounded-2xl flex flex-col md:flex-row gap-5 items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm font-extrabold text-emerald-950 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-100/10" />
                      <span>WhatsApp Direct Support</span>
                    </h3>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Instant message inquiries for general clinic support, pediatric vaccination schedules, GFC therapies, or uploading digital prescriptions directly to our dispensary desk.
                    </p>
                  </div>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open WhatsApp Chat</span>
                  </button>
                </div>

                {/* Panel 2: Direct Call Support */}
                <div className="bg-blue-50/20 border border-blue-100/50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold text-blue-950 flex items-center gap-2 mb-2">
                      <PhoneCall className="w-4 h-4 text-blue-600" />
                      <span>Direct Voice Call Desk</span>
                    </h3>
                    <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                      Direct voice assistance for immediate doctor OPD slot inquiries, roadside emergency ambulance tracking, free bedside nursing collection protocols, or specialist reference bookings.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => handleDial("+91 9035054532")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition"
                    >
                      <Phone className="w-4 h-4 fill-white/10" />
                      <span>Call Primary Desk</span>
                    </button>
                    <button
                      onClick={() => handleDial("+91 9035054533")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-200 transition"
                    >
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span>Call Secondary Desk</span>
                    </button>
                  </div>
                </div>



              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
