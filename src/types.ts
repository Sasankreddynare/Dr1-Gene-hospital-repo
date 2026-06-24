export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string[];
  timings?: string;
  imageUrl: string;
  experience?: string;
  bio?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  conditions: string[];
  benefits: string[];
}

export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  includes: string[];
}

export interface HomeCareService {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  source: "Google" | "Patient Story" | "Video";
  department?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Infrastructure" | "Consultation" | "Diagnostics" | "Pharmacy" | "Doctors" | "Events" | "Patient Care";
  imageUrl: string;
}

export type ActivePage = "home" | "about" | "services" | "gallery" | "testimonials" | "contact";
