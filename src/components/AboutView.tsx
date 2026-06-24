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
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Medical Board</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            Meet Our Expert Clinical Team
          </h2>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
            Highly certified consultants, former military medical officers, and advanced clinical specialists dedicated to providing top-tier patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 overflow-hidden flex flex-col justify-between group transition-all duration-300 text-left"
            >
              <div className="p-6 md:p-8">
                {/* Specialty Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-wider rounded-md border border-blue-100/50">
                    {doctor.specialty}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {doctor.name}
                </h3>

                {/* Experience */}
                {doctor.experience && (
                  <p className="text-xs font-bold text-slate-500 mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    {doctor.experience}
                  </p>
                )}

                {/* Qualifications list */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {doctor.qualifications.map((qual, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[10px] font-extrabold border border-slate-200/60 rounded-md uppercase"
                    >
                      {qual}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                {doctor.bio && (
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-2">
                    {doctor.bio}
                  </p>
                )}

                {doctor.timings && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider mb-1">Timing Slots:</p>
                    <p className="text-[11px] font-bold text-slate-700 leading-normal">{doctor.timings}</p>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="p-6 md:p-8 pt-0">
                <a
                  href={`https://wa.me/919035054532?text=Hi! I want to book an appointment with ${doctor.name} (${doctor.specialty}).`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-extrabold text-[10px] tracking-wider uppercase rounded-xl border border-slate-200 flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
