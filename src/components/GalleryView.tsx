import { useState } from "react";
import { Grid, Eye } from "lucide-react";
import { GALLERY_DATA } from "../data";

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Infrastructure", "Consultation", "Diagnostics", "Pharmacy", "Doctors", "Patient Care"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 md:py-24 bg-white text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">Visual Tour</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            Our Facility Gallery
          </h1>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed text-sm">
            Take a virtual tour of Dr1 Gene Hospital. Explore our highly sterilized environments, advanced medical equipment, and modern consultation lounges.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                selectedCategory === category
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-white/90 rounded-full text-blue-600 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-extrabold text-blue-600 bg-blue-50 border border-blue-100/30 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xs font-bold text-slate-800 tracking-tight leading-snug mt-3 mb-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Grid className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-400">No facility images found for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
