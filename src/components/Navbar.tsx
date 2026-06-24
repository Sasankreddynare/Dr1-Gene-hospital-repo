import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { ActivePage } from "../types";
import { HOSPITAL_CONTACT } from "../data";
import HospitalLogo from "./HospitalLogo";

interface NavbarProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", page: "home" as ActivePage },
    { label: "About Us", page: "about" as ActivePage },
    { label: "Services", page: "services" as ActivePage },
    { label: "Gallery", page: "gallery" as ActivePage },
    { label: "Testimonials", page: "testimonials" as ActivePage },
    { label: "Contact", page: "contact" as ActivePage },
  ];

  const handleNavClick = (page: ActivePage) => {
    onPageChange(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200 py-1"
          : "bg-white border-b border-slate-200/80 py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Brand Logo */}
          <button onClick={() => handleNavClick("home")} className="focus:outline-none hover:opacity-95 transition-opacity">
            <HospitalLogo variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-semibold tracking-tight transition-all duration-200 relative pb-1 ${
                  activePage === item.page
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call and Book CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${HOSPITAL_CONTACT.phones[0]}`}
              className="flex items-center gap-1.5 px-4.5 py-2 text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-blue-600 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Support</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-[0.97]"
            >
              <span>Connect Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:outline-none transition"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 pt-4 pb-6 space-y-2 shadow-lg animate-fade-in-down">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`py-3 px-4 rounded-xl text-left text-sm font-bold transition ${
                  activePage === item.page
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-4 flex flex-col gap-3">
            <a
              href={`tel:${HOSPITAL_CONTACT.phones[0]}`}
              className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 bg-slate-50 text-slate-700 font-bold rounded-full text-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call {HOSPITAL_CONTACT.phones[0]}</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white font-bold rounded-full text-sm shadow-lg shadow-blue-200"
            >
              <Phone className="w-4 h-4" />
              <span>Connect Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
