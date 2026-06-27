import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function TestimonialsView() {
  return (
    <div className="bg-slate-50 min-h-[85vh] font-sans flex flex-col justify-between">
      {/* Page Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-blue-300 font-semibold text-xs tracking-wider uppercase mb-6"
          >
            <Clock className="w-3.5 h-3.5 animate-pulse text-blue-400" />
            Work In Progress
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Patient Reviews &amp; Testimonials
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            This section is currently under working and being prepared for verified patient feedback.
          </motion.p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-3xl mx-auto px-6 py-16 flex-1 flex items-center w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center w-full relative overflow-hidden"
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 shadow-inner">
            <MessageSquare className="w-8 h-8" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Section Currently Under Working
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
            All placeholder reviews have been cleared as requested. This page is ready to receive authentic patient stories, verified clinical feedback, or custom integrations as per your next instructions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Verified Authenticity</h4>
                <p className="text-slate-500 text-xs mt-0.5">Ready for direct patient submissions or official platform ratings.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Awaiting Next Steps</h4>
                <p className="text-slate-500 text-xs mt-0.5">Please share your exact content or workflow requirements.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Subtle bottom info */}
      <div className="py-6 text-center text-xs font-medium text-slate-400 border-t border-slate-200/60 bg-white">
        Dr. (Major) Jayaprasad's Advanced Cardiology Clinic &bull; Bengaluru
      </div>
    </div>
  );
}
