import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  Star, 
  Search, 
  ThumbsUp, 
  CheckCircle, 
  Heart, 
  Sparkles,
  Filter,
  User,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Building
} from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  tags: string[];
  initials: string;
  source: string;
}

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "BHASKAR GS",
    rating: 5,
    date: "June 2026",
    text: "Excellent service and care from both the doctor and hospital staff. Everyone was professional, caring, and supportive. Thank you for your dedication and kindness.",
    tags: ["Excellent Care", "Professional Staff", "Dedication & Kindness"],
    initials: "BG",
    source: "Verified Patient"
  },
  {
    id: "rev-2",
    name: "Dusty Rides",
    rating: 5,
    date: "May 2026",
    text: "Visited for my daughter’s sickness. Doctor was about to leave home; since I called, he waited. This was really nice, and the treatment was really good and effective. Definitely recommend.",
    tags: ["Effective Treatment", "Compassionate Care", "Highly Recommended"],
    initials: "DR",
    source: "Verified Family"
  },
  {
    id: "rev-3",
    name: "Aju Mahananda",
    rating: 5,
    date: "May 2026",
    text: "The clinic experience was satisfying as the staff there was very helpful. The doctors were also equally good at treating patients.",
    tags: ["Helpful Staff", "Satisfying Experience", "Patient Care"],
    initials: "AM",
    source: "Verified Visitor"
  },
  {
    id: "rev-4",
    name: "SUMANA MANDAL",
    rating: 5,
    date: "April 2026",
    text: "Very good facility. The hospital is very clean and well maintained. The entire staff, from the nurses to the doctors, were incredibly kind and attentive. Felt very well taken care of throughout my stay. Thank you, Dr1 Gene.",
    tags: ["Clean Facility", "Attentive Nurses", "Well Maintained"],
    initials: "SM",
    source: "Inpatient Review"
  },
  {
    id: "rev-5",
    name: "Verified Patient",
    rating: 5,
    date: "March 2026",
    text: "I have visited hospital with fever. Doctor and nursing staff gave good treatment.",
    tags: ["Fever Care", "Good Treatment", "Nursing Care"],
    initials: "VP",
    source: "Verified Patient"
  },
  {
    id: "rev-6",
    name: "simma kishore",
    rating: 5,
    date: "February 2026",
    text: "Good and clean hospital. Staff Ajai brother, thank you. Caring, nice.",
    tags: ["Clean Hospital", "Caring Staff", "Highly Appreciated"],
    initials: "SK",
    source: "Verified Visitor"
  },
  {
    id: "rev-7",
    name: "Verified Patient",
    rating: 5,
    date: "January 2026",
    text: "This is very good service & excellent performance. All staff and doctors take good care.",
    tags: ["Excellent Performance", "Good Service", "Doctor Care"],
    initials: "VP",
    source: "Verified Patient"
  },
  {
    id: "rev-8",
    name: "Mohibul Islam",
    rating: 5,
    date: "December 2025",
    text: "Such a good and cool hospital. Clean and nice. A brother was very helpful.",
    tags: ["Clean & Neat", "Helpful Staff", "Positive Vibe"],
    initials: "MI",
    source: "Verified Visitor"
  },
  {
    id: "rev-9",
    name: "Deepa deepu",
    rating: 5,
    date: "November 2025",
    text: "Good manner and behaviour. Nice experience.",
    tags: ["Good Manners", "Polite Behaviour", "Nice Experience"],
    initials: "DD",
    source: "Verified Patient"
  },
  {
    id: "rev-10",
    name: "Venu Gopal",
    rating: 5,
    date: "September 2025",
    text: "Fantastic experience at this hospital. I went there for an albumin injection for my mother, and the team made me feel completely at ease.",
    tags: ["Mother Care", "Albumin Injection", "Completely At Ease"],
    initials: "VG",
    source: "Verified Family"
  }
];

export default function TestimonialsView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, boolean>>({});

  // Compile list of unique tags for filtering
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    REVIEWS.forEach(r => r.tags.forEach(t => tags.add(t)));
    return ["All", ...Array.from(tags).slice(0, 8)]; // Top tags to avoid visual clutter
  }, []);

  // Filtered reviews based on tag selection and search string
  const filteredReviews = useMemo(() => {
    return REVIEWS.filter(r => {
      const matchesSearch = 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = selectedTag === "All" || r.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const handleHelpfulToggle = (id: string) => {
    setHelpfulVotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased pb-20">
      {/* Dynamic Visual Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 text-white py-20 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Patient Reviews
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            Real Stories, Honest Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Read reviews shared by our patients and their families regarding the healthcare, dedication, and clean environment experienced at our clinic.
          </motion.p>
        </div>
      </section>



      {/* Main filter & review list section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Search & Topic Filters */}
        <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search reviews, keywords, names..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200/80 pl-10 pr-4 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Title / Help Info */}
            <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 self-end md:self-center">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              Showing {filteredReviews.length} of {REVIEWS.length} real patient reviews
            </div>
          </div>

          {/* Quick Filter Pill list */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-50">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              Topics:
            </div>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition duration-200 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry or Two-column Grid for reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((rev, index) => (
                <motion.div
                  layout
                  key={rev.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Author & Header Info */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-slate-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-sm leading-tight">
                            {rev.name}
                          </h3>
                          <div className="flex items-center gap-1 text-slate-400 text-[11px] mt-0.5">
                            <Calendar className="w-3 h-3" />
                            <span>{rev.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-slate-700 text-sm leading-relaxed mb-4 whitespace-pre-line italic">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Tags and Helpful actions */}
                  <div className="pt-4 border-t border-slate-50 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1">
                      {rev.tags.map((t, idx) => (
                        <span 
                          key={idx} 
                          className="bg-slate-50 text-slate-500 text-[10px] font-semibold border border-slate-100 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleHelpfulToggle(rev.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                        helpfulVotes[rev.id]
                          ? "bg-emerald-50 border-emerald-100 text-emerald-600"
                          : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <ThumbsUp className={`w-3 h-3 ${helpfulVotes[rev.id] ? "fill-emerald-500 text-emerald-600" : ""}`} />
                      <span>{helpfulVotes[rev.id] ? "Helpful (1)" : "Helpful"}</span>
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">No matches found</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                  We couldn't find any reviews matching "{searchQuery}". Please clear your search or try another word.
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedTag("All"); }}
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-md shadow-emerald-600/10 cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>


    </div>
  );
}
