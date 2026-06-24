import { useEffect, useState } from "react";
import { 
  Stethoscope, Scissors, Activity, Brain, Bone, Ear, 
  Droplet, ShieldAlert, HeartHandshake, Sparkles, Smile, Flame,
  CheckCircle, ArrowRight, Phone, MessageSquare, Calendar, Clock, Sparkle
} from "lucide-react";
import { ActivePage, Service } from "../types";
import { SERVICES_DATA, HOSPITAL_CONTACT, DERMATOLOGY_PAGES_DATA } from "../data";

interface ServicesViewProps {
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
  onPageChange: (page: ActivePage) => void;
}

export default function ServicesView({ selectedServiceId, setSelectedServiceId, onPageChange }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<string>("general-medicine");

  // Synchronize when coming from Homepage "Learn More"
  useEffect(() => {
    if (selectedServiceId) {
      setActiveTab(selectedServiceId);
      // reset after loading so future visits don't get forced
      setSelectedServiceId(null);
    }
  }, [selectedServiceId, setSelectedServiceId]);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  // Map icon strings to Lucide icon components
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope": return Stethoscope;
      case "Scissors": return Scissors;
      case "Activity": return Activity;
      case "Brain": return Brain;
      case "Bone": return Bone;
      case "Ear": return Ear;
      case "Droplet": return Droplet;
      case "ShieldAlert": return ShieldAlert;
      case "HeartHandshake": return HeartHandshake;
      case "Sparkles": return Sparkles;
      case "Smile": return Smile;
      case "Flame": return Flame;
      default: return Stethoscope;
    }
  };

  const handleWhatsApp = (serviceName: string) => {
    const formattedPhone = HOSPITAL_CONTACT.whatsapp.replace("+", "");
    window.open(`https://wa.me/${formattedPhone}?text=Hi! I am inquiring about the ${serviceName} specialty at Dr1 Gene Hospital.`, "_blank");
  };

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Our Medical Departments</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            Advanced Clinical Specialties
          </h1>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
            Explore our specialized departments, symptoms managed, and modern therapeutic options designed under premium standard protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar - Scrollable Menu of 12 Services */}
          <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm max-h-[700px] overflow-y-auto lg:sticky lg:top-36 text-left">
            <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 mb-4">Select Department</p>
            
            {/* Horizontal scroll on small screen, vertical on large screen */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2.5 lg:gap-1 scrollbar-hide pb-2 lg:pb-0">
              {SERVICES_DATA.map((service) => {
                const IconComponent = getServiceIcon(service.icon);
                const isSelected = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center gap-3.5 px-4.5 py-3 rounded-xl text-left text-xs font-bold tracking-wider uppercase transition-all duration-200 shrink-0 select-none ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                        : "text-slate-700 bg-slate-50/40 border border-slate-200/50 hover:bg-slate-100 hover:text-blue-600"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isSelected ? "text-white" : "text-blue-500"}`} />
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Content Panel */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-10 text-left relative">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-6 border border-blue-100/50">
              ✨ Speciality Spotlight
            </span>

            {/* Department Title */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200/60 pb-6 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeService.title}
                </h2>
                <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-wider">Dr1 Gene Clinical Care</p>
              </div>
              <a
                href="tel:9035054532"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk</span>
              </a>
            </div>

            {/* If Dermatology tab, render the high fidelity leaflet version */}
            {activeService.id === "dermatology" ? (
              <div>
                {/* Consultant Timings Banner */}
                <div className="mb-8 p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      <span>Dr. Sushma A (Consultant Dermatologist)</span>
                    </h3>
                    <p className="text-slate-500 text-xs font-semibold mt-1">One-Stop Solution for Skin and Hair Problems</p>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-xl border border-blue-100 shadow-sm text-left">
                    <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Consulting Hours</span>
                    </p>
                    <p className="text-[11px] font-bold text-slate-700">Mon, Wed, Fri: 2 PM – 4 PM & 6 PM – 9 PM</p>
                    <p className="text-[11px] font-bold text-slate-700">Tue, Thu, Sat: 6 PM – 9 PM</p>
                  </div>
                </div>

                {/* Dermatology overview */}
                <div className="mb-8">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-3">Clinical Overview</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                    Our Dermatology department is a dedicated skin, hair, and medical aesthetics hub. 
                    From clinical cures for chronic skin diseases to painless laser cosmetology, we utilize advanced medical technologies under strict sterile settings.
                  </p>
                </div>

                {/* Two Column Grid for Problems and Procedures */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  
                  {/* Skin Related Problems */}
                  <div className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/60 text-left">
                    <h4 className="text-[10px] font-extrabold text-blue-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-200/40 pb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      Skin & Hair Related Problems
                    </h4>
                    <ul className="space-y-2.5">
                      {DERMATOLOGY_PAGES_DATA.skinProblems.map((problem, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-900">{problem.name}</span>
                            <p className="text-[10px] text-slate-400 font-medium normal-case mt-0.5 leading-normal">{problem.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skin Related Procedures */}
                  <div className="bg-blue-50/20 p-6 rounded-xl border border-blue-100/20 text-left">
                    <h4 className="text-[10px] font-extrabold text-blue-950 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-blue-100/30 pb-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      Advanced Skin Procedures
                    </h4>
                    <ul className="space-y-2.5">
                      {DERMATOLOGY_PAGES_DATA.procedures.map((proc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <Sparkle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-900 uppercase tracking-wider text-[11px] font-extrabold">{proc.name}</span>
                            <p className="text-[10px] text-slate-500 font-semibold normal-case mt-0.5 leading-normal">{proc.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Dermatology Benefits */}
                <div className="mb-10">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-4">Quality Standards</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2.5 bg-emerald-50/30 px-4 py-3 rounded-xl border border-emerald-100/30">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">Advanced Painless Laser Setup</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-emerald-50/30 px-4 py-3 rounded-xl border border-emerald-100/30">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">100% Sterile Minor Surgery Theatre</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-emerald-50/30 px-4 py-3 rounded-xl border border-emerald-100/30">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">FDA-Approved Custom Chemical Peels</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-emerald-50/30 px-4 py-3 rounded-xl border border-emerald-100/30">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 leading-tight">Confidential STD Clinical Screenings</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Standard department view
              <div>
                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-3">Clinical Overview</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                    {activeService.fullDesc}
                  </p>
                </div>

                {/* Two Column Grid for Symptoms and Conditions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  
                  {/* Symptoms Treated */}
                  <div className="bg-[#F8FAFC] p-6 rounded-xl border border-slate-200/60">
                    <h4 className="text-[10px] font-extrabold text-blue-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Symptoms Treated
                    </h4>
                    <ul className="space-y-3">
                      {activeService.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conditions Managed */}
                  <div className="bg-blue-50/20 p-6 rounded-xl border border-blue-100/20">
                    <h4 className="text-[10px] font-extrabold text-blue-950 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Conditions Managed
                    </h4>
                    <ul className="space-y-3">
                      {activeService.conditions.map((condition, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Core Medical Benefits */}
                <div className="mb-10">
                  <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-4">Patient Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-emerald-50/30 px-4 py-3 rounded-xl border border-emerald-100/30">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-700 leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Special CTA Action Bar */}
            <div className="mt-12 bg-slate-900 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 border border-slate-800 shadow-xl">
              <div className="text-center md:text-left">
                <h4 className="font-extrabold text-base tracking-tight leading-tight mb-1">Inquire About {activeService.title}</h4>
                <p className="text-slate-300 text-xs font-semibold">Connect directly with our clinical desk via WhatsApp or Call.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleWhatsApp(activeService.title)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4.5 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </button>
                <a
                  href="tel:9035054532"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white text-slate-900 hover:bg-slate-50 font-extrabold rounded-xl text-xs shadow-md transition"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* OUR FACILITIES & OTHER SERVICES split block (faithful to images) */}
        <div id="facilities-and-infrastructure" className="mt-24 pt-16 border-t border-slate-200/80 text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Our Infrastructure</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-6">
              Our Facilities & Diagnostic Support
            </h2>
            <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
              We provide comprehensive multi-speciality clinical services, modern state-of-the-art diagnostic scans, and dedicated bedside home nursing care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Our Facilities Block */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">OUR FACILITIES</h3>
                    <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider mt-1">Integrated Hospital Facilities</p>
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full border border-slate-100">In-House</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* General Facilities */}
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-3">Core Services</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>Multi Speciality Services</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>OPD Management</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>Day Care Management</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>Laboratory & Pharmacy Setup</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>ECG & Ambulance Services</span>
                      </li>
                    </ul>
                  </div>

                  {/* Diagnostic at Home / Home Care */}
                  <div className="space-y-5 text-left">
                    <div>
                      <h4 className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider mb-2.5">Diagnostic At Home</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-5 h-5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-[10px] border border-blue-100">1</span>
                          <span>Blood Test (Home collection available)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-5 h-5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-[10px] border border-blue-100">2</span>
                          <span>Pulmonary Function Test (PFT)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-5 h-5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-[10px] border border-blue-100">3</span>
                          <span>ECG at Home support</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider mb-2.5">Home Care Nursing</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold text-[10px] border border-emerald-100">1</span>
                          <span>Bedside Injection administrations</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold text-[10px] border border-emerald-100">2</span>
                          <span>Hygienic Surgical Dressings</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                          <span className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold text-[10px] border border-emerald-100">3</span>
                          <span>Pediatric & Adult Vaccination</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-slate-500 font-bold">We also offer "Book Any Doctor" support for seamless specialist referrals.</span>
                <button
                  onClick={() => {
                    const text = encodeURIComponent("Hi! I would like to inquire about specialist doctor referrals / facility availability at Dr1 Gene Hospital.");
                    window.open(`https://wa.me/919035054532?text=${text}`, "_blank");
                  }}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition active:scale-95 flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Other Services Block */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <div className="border-b border-slate-800 pb-4 mb-6">
                  <h3 className="text-lg font-extrabold text-white tracking-tight">OTHER SERVICES</h3>
                  <p className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider mt-1">Advanced Diagnostic Scans</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                    <span className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center font-extrabold text-xs shrink-0 border border-cyan-900/30">XR</span>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider uppercase text-white">X-RAY</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">Precise diagnostic skeletal imaging</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                    <span className="w-9 h-9 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-extrabold text-xs shrink-0 border border-blue-900/30">US</span>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider uppercase text-white">ULTRA SOUND</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">Maternal fetal & abdominal screenings</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                    <span className="w-9 h-9 rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center font-extrabold text-xs shrink-0 border border-purple-900/30">ES</span>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider uppercase text-white">ENDOSCOPY</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">Safe internal digestive tract evaluations</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                    <span className="w-9 h-9 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center font-extrabold text-xs shrink-0 border border-teal-900/30">CT</span>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider uppercase text-white">CT SCANS</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">Advanced high-definition cross-sections</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-slate-800/40 p-3.5 rounded-xl border border-slate-800">
                    <span className="w-9 h-9 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center font-extrabold text-xs shrink-0 border border-indigo-900/30">MR</span>
                    <div>
                      <h4 className="font-extrabold text-xs tracking-wider uppercase text-white">MRI</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">High-resolution resonance imaging</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-850">
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">
                  * Diagnostic scans are conducted under extreme sanitization standards. Report delivery is prompt.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
