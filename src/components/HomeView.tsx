import { useState } from "react";
import { 
  Award, Activity, Pill, Heart, ShieldAlert, HeartHandshake, 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare, Phone, Calendar, Star,
  Syringe, Layers, ShieldCheck, TestTube, Wind
} from "lucide-react";
import { ActivePage, Package, Service } from "../types";
import { SERVICES_DATA, PACKAGES_DATA, HOME_CARE_DATA } from "../data";
import Hero from "./Hero";

interface HomeViewProps {
  onPageChange: (page: ActivePage) => void;
  setSelectedServiceId: (id: string | null) => void;
}

export default function HomeView({ onPageChange, setSelectedServiceId }: HomeViewProps) {
  const [hoveredPkgId, setHoveredPkgId] = useState<string | null>(null);

  const handleServiceLearnMore = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    onPageChange("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookPackage = (packageName: string) => {
    const formattedPhone = "919035054532";
    const text = encodeURIComponent(`Hi! I would like to book the "${packageName}" blood investigation package at Dr1 Gene Hospital.`);
    window.open(`https://wa.me/${formattedPhone}?text=${text}`, "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919035054532?text=Hi! I am looking to schedule a consultation.", "_blank");
  };

  // Why choose options with local inline icons
  const whyChooseItems = [
    {
      title: "Experienced Specialists",
      desc: "Our board-certified consultants have robust training background (e.g. Ex-military, international fellowships) ensuring advanced clinical care.",
      icon: Award,
      color: "border-blue-100 bg-blue-50/50 text-blue-700"
    },
    {
      title: "Modern Diagnostics",
      desc: "Advanced screening platforms including digital ECG, modern pathology lab systems, and home evaluation devices.",
      icon: Activity,
      color: "border-cyan-100 bg-cyan-50/50 text-cyan-700"
    },
    {
      title: "Pharmacy Services",
      desc: "In-house healthcare essentials, medical supplies, and prescribed therapeutics handled by registered pharmacology experts.",
      icon: Pill,
      color: "border-purple-100 bg-purple-50/50 text-purple-700"
    },
    {
      title: "Home Sample Collection",
      desc: "Sanitary, temperature-controlled home blood collection at no extra cost for standard packages in Whitefield.",
      icon: TestTube,
      color: "border-emerald-100 bg-emerald-50/50 text-emerald-700"
    },
    {
      title: "Ambulance Services",
      desc: "Swift emergency mobility and transport support equipped with life support monitors, keeping patients safe en route.",
      icon: ShieldAlert,
      color: "border-red-100 bg-red-50/50 text-red-700"
    },
    {
      title: "Patient-Centric Care",
      desc: "Empathetic, clear consultations with robust scheduling, prompt answers, and no endless clinic waiting times.",
      icon: HeartHandshake,
      color: "border-indigo-100 bg-indigo-50/50 text-indigo-700"
    }
  ];

  // Map icon names to Lucide icons for Services Cards
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope": return Award;
      case "Scissors": return Layers;
      case "Activity": return Activity;
      case "Brain": return ShieldCheck;
      case "Bone": return ShieldAlert;
      case "Ear": return Wind;
      case "Droplet": return Heart;
      case "ShieldAlert": return ShieldAlert;
      case "HeartHandshake": return HeartHandshake;
      case "Sparkles": return Star;
      case "Smile": return Star;
      case "Flame": return Wind;
      default: return Award;
    }
  };

  // Map icon names to Lucide icons for Home Healthcare
  const getHomeCareIcon = (iconName: string) => {
    switch (iconName) {
      case "Syringe": return Syringe;
      case "Layers": return Layers;
      case "ShieldCheck": return ShieldCheck;
      case "Heart": return Heart;
      case "TestTube": return TestTube;
      case "Wind": return Wind;
      default: return Syringe;
    }
  };

  return (
    <div className="w-full bg-white text-slate-800 antialiased">
      {/* 1. Hero and Statistics Section */}
      <Hero onPageChange={onPageChange} />

      {/* 2. Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
              Outstanding Clinical Excellence Close to Home
            </h2>
            <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
              We combine professional expertise, modern infrastructure, and compassionate patient care patterns to make diagnostic evaluation and cure painless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300 relative group text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-105 duration-200 border border-blue-100/50">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="text-left">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Medical Specialities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
                Specialized Care for Your Health
              </h2>
            </div>
            <button
              onClick={() => {
                setSelectedServiceId(null);
                onPageChange("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition"
            >
              <span>View All Specialities</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 6).map((service) => {
              const IconComponent = getServiceIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="flex flex-col bg-white rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden group text-left"
                >
                  <div className="h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="p-8 flex-1 flex flex-col items-start">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100/30 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed mb-6 font-semibold flex-1">
                      {service.shortDesc}
                    </p>

                    <button
                      onClick={() => handleServiceLearnMore(service.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/btn"
                    >
                      <span>Explore Symptoms & Treatments</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Blood Investigation Packages Section (Refined Light Mode Pricing Matrix) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Diagnostics Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
              Blood Investigation Packages
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-extrabold mt-5 uppercase tracking-wider">
              <span>FREE HOME SAMPLE COLLECTION AVAILABLE IN WHITEFIELD</span>
            </div>
          </div>

          {/* Packages Matrix Grid in elegant minimalist light theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES_DATA.map((pkg) => {
              const isHovered = hoveredPkgId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredPkgId(pkg.id)}
                  onMouseLeave={() => setHoveredPkgId(null)}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ease-out border text-left cursor-pointer transform ${
                    isHovered
                      ? "bg-blue-50/40 border-blue-600 shadow-xl shadow-blue-100/60 scale-103 -translate-y-1.5"
                      : "bg-white border-slate-200/80 shadow-sm"
                  }`}
                >
                  <div>
                    {pkg.isPopular && (
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-extrabold tracking-widest rounded-full uppercase mb-4">
                        Most Advanced Package
                      </span>
                    )}
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 tracking-tight">
                      {pkg.name}
                    </h3>
                    
                    {/* Pricing line */}
                    <div className="flex items-baseline gap-1.5 mb-6 mt-4">
                      <span className="text-3xl font-extrabold text-blue-600">₹{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-slate-400 text-xs line-through font-semibold">₹{pkg.originalPrice}</span>
                      )}
                    </div>

                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-4">Includes Tests:</p>
                    
                    {/* Tests list */}
                    <ul className="space-y-2.5 mb-8">
                      {pkg.includes.map((test, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleBookPackage(pkg.name)}
                    className={`w-full py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 ${
                      isHovered
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    Book via WhatsApp
                  </button>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-[11px] font-semibold mt-12">
            * All samples are evaluated under strict sanitary pathology protocols. Verified digital reports sent directly via email/WhatsApp.
          </p>
        </div>
      </section>

      {/* 5. Home Healthcare Services Section */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Bedside Care</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
              Home Healthcare Services
            </h2>
            <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
              We bring clinical precision and expert care of registered nurses directly to your home. Say goodbye to traffic and long waiting lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_CARE_DATA.map((hc) => {
              const IconComp = getHomeCareIcon(hc.icon);
              return (
                <div
                  key={hc.id}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex gap-5 items-start group text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {hc.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                      {hc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                const text = encodeURIComponent("Hello! I am inquiring about Home Healthcare nursing services (e.g. injection, ECG, dressing at home).");
                window.open(`https://wa.me/919035054532?text=${text}`, "_blank");
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-full shadow-lg shadow-emerald-200 transition"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>



      {/* 7. CTA Driving Panel - Beautiful Dark Minimalist Card */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-3xl py-14 px-8 md:px-16 relative overflow-hidden border border-slate-800 shadow-xl text-center">
            {/* Subtle design gradient accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Need Expert Medical Advice?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                Contact us today to arrange direct, convenient OPD consultation timings or coordinate home nursing diagnostics with our specialists.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-lg mx-auto">
                <button
                  onClick={() => {
                    onPageChange("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-50 font-extrabold rounded-xl text-xs uppercase tracking-wider transition active:scale-95 duration-150 whitespace-nowrap"
                >
                  <span>Visit Contact Desk</span>
                </button>
                
                <a
                  href={`tel:9035054532`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded-xl text-xs border border-slate-700 transition whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>Call +91 9035054532</span>
                </a>
                
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 text-white fill-white/10" />
                  <span>WhatsApp Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
