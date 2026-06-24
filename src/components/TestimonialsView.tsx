import { useState } from "react";
import { MessageSquare, Star, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function TestimonialsView() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const departments = ["All", "Orthopedics", "Diagnostics", "Dermatology", "Cardiology"];

  const filteredReviews = activeFilter === "All"
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(item => item.department === activeFilter);

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Patient Stories</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            Reviews & Testimonials
          </h1>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
            Read stories of recovery, professional diagnostics, and compassionate medical care from patients who trusted Dr1 Gene Hospital beside OWIS, Whitefield.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                activeFilter === dept
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 shadow-sm relative text-left flex flex-col justify-between group hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-100 group-hover:text-blue-50 transition-colors pointer-events-none" />

              <div>
                {/* Source and Star Rating */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase bg-blue-50 border border-blue-100/30 px-3 py-1 rounded-full tracking-wider">
                    {review.source} Verified
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="border-t border-slate-200/60 pt-5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight">{review.name}</h4>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-0.5">{review.date}</p>
                </div>
                {review.department && (
                  <span className="text-[10px] font-extrabold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md uppercase">
                    {review.department}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 text-center max-w-xl mx-auto bg-blue-50/40 rounded-2xl p-6 border border-blue-100/30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-extrabold text-slate-900">100% Patient Trust & Recovery Focus</span>
          </div>
          <p className="text-slate-500 text-xs font-semibold leading-relaxed">
            Every piece of feedback is continuously evaluated by our Chief Medical Board to keep clinical sanitization, consulting timings, and nursing care standards outstanding.
          </p>
        </div>

      </div>
    </div>
  );
}

