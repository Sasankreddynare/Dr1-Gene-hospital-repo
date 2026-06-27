import { CheckCircle, Shield, Heart, Eye, Target, Sparkles, Users, Award, Mail, Phone, ExternalLink } from "lucide-react";
import { HOSPITAL_CONTACT, DOCTORS_DATA } from "../data";

export default function AboutView() {
  const values = [
    {
      title: "Patient First",
      desc: "All clinical procedures, consultation timings, and home care programs are structured entirely around patient convenience and painless recovery.",
      icon: Heart,
      color: "bg-rose-50 text-rose-600 border border-rose-100/50"
    },
    {
      title: "Compassion",
      desc: "We treat every patient with profound empathy, respect, and care, ensuring a healing and supportive clinical environment.",
      icon: Users,
      color: "bg-blue-50 text-blue-600 border border-blue-100/50"
    },
    {
      title: "Excellence",
      desc: "Striving for premium quality standards in everything we do, from pathology precision to minor surgeries and aesthetic treatments.",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border border-amber-100/50"
    },
    {
      title: "Integrity",
      desc: "Absolute honesty in diagnostics, prescriptions, and pricing structures. We suggest only what is medically necessary for your safety.",
      icon: Shield,
      color: "bg-emerald-50 text-emerald-600 border border-emerald-100/50"
    },
    {
      title: "Innovation",
      desc: "Continuously updating clinical protocols, implementing portable diagnostics (ECG, Spirometry at home), and safe cosmetic skin lasers.",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600 border border-purple-100/50"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased">
      {/* Intro section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Our Legacy</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-6 mb-6">
              Empathetic, Professional Medical Care At Dr1 Gene Hospital
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Located in the heart of Whitefield, Bangalore (Beside One World International School), Dr1 Gene Hospital has grown to become a cornerstone of primary and specialty healthcare. We bring together highly qualified medical professionals—including former military physicians, joint-replacement specialists, and aesthetics experts—to provide affordable clinical solutions.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              We understand that visiting a hospital can be overwhelming. Therefore, we have designed a premium clinical layout with warm lighting, highly sterilized consultation spaces, spacious lounge seating, and an in-house laboratory and pharmacy to keep your medical journey completely hassle-free.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-slate-200/60 pt-8">
              <div>
                <p className="text-2xl font-extrabold text-blue-600">100%</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">Sterilization Rating</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-blue-600">8+</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">Expert Consultants</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  className="rounded-2xl shadow-sm w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400&h=600"
                  alt="Consultation desk layout"
                />
                <img
                  className="rounded-2xl shadow-sm w-full h-40 object-cover"
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Waiting lobby visual"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  className="rounded-2xl shadow-sm w-full h-40 object-cover"
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400&h=300"
                  alt="Lab Diagnostics system"
                />
                <img
                  className="rounded-2xl shadow-sm w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400&h=600"
                  alt="Modern clinical front desk"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mission & Vision cards */}
      <div className="bg-[#F8FAFC] py-16 mt-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-sm text-left relative overflow-hidden group">
              <div className="h-1 bg-blue-600 absolute top-0 left-0 right-0"></div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100/50">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                To provide affordable, high-quality, and ethical healthcare solutions by integrating expert medical clinicians, precise diagnostics, and compassionate support services close to your home.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200/80 shadow-sm text-left relative overflow-hidden group">
              <div className="h-1 bg-teal-500 absolute top-0 left-0 right-0"></div>
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 border border-teal-100/50">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                To become the most trusted multi-speciality healthcare and diagnostics provider in the Whitefield region, recognized for transparent clinical ethics and patient-centric innovations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-b border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Our Ideology</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            The Values We Live By Every Day
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-left"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${v.color}`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 tracking-tight">{v.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* OUR TEAM Section (Faithful to Images) */}
      <div id="our-clinical-team" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Our Team</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            Meet Our Expert Clinical Team
          </h2>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
            Highly qualified consultants, former military medical officers, and specialists dedicated to providing top-tier patient care.
          </p>
        </div>

        {/* Seven Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor) => {
            const isDerm = doctor.id === "dr-sushma";
            return (
              <div
                key={doctor.id}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md hover:border-slate-300 ${
                  isDerm ? "md:col-span-2 lg:col-span-3 border-emerald-100 bg-emerald-50/5" : ""
                }`}
              >
                <div>
                  {/* Specialty Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md border ${
                      isDerm 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                        : "bg-blue-50 text-blue-700 border-blue-200"
                    }`}>
                      {doctor.specialty}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                    {doctor.name}
                  </h3>

                  {/* Qualifications */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {doctor.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200 rounded-md"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>

                  {/* Dermatology Specific Skills Lists */}
                  {isDerm && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-200">
                      <div>
                        <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          Skin Related Problems
                        </h4>
                        <ul className="space-y-1 text-slate-600 text-xs font-semibold">
                          {doctor.skinProblems?.map((prob, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-emerald-500">•</span>
                              {prob}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          Skin Related Procedures
                        </h4>
                        <ul className="space-y-1 text-slate-600 text-xs font-semibold">
                          {doctor.skinProcedures?.map((proc, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-emerald-500">•</span>
                              {proc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Timings */}
                  {doctor.timings && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider mb-1">Available Timings:</p>
                      <p className="text-xs font-bold text-slate-800 leading-normal bg-emerald-50 border border-emerald-100 px-3 py-2 rounded-xl">
                        {doctor.timings}
                      </p>
                    </div>
                  )}
                </div>

                {/* Book Action */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/919035054532?text=Hi! I want to book an appointment with ${doctor.name} (${doctor.specialty}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-800 font-extrabold text-[10px] tracking-widest uppercase rounded-xl border border-slate-200 flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Book Appointment</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
