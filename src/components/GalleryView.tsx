import { Grid } from "lucide-react";

export default function GalleryView() {
  return (
    <div className="py-24 bg-white text-slate-800 antialiased min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-100/50 animate-pulse">
          <Grid className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
          Facility Gallery
        </h1>
        <p className="text-slate-500 font-semibold text-sm leading-relaxed">
          This section is currently under development.
        </p>
      </div>
    </div>
  );
}

