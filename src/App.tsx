/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ActivePage } from "./types";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import GalleryView from "./components/GalleryView";
import TestimonialsView from "./components/TestimonialsView";
import ContactView from "./components/ContactView";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const renderActiveView = () => {
    switch (activePage) {
      case "home":
        return (
          <HomeView
            onPageChange={setActivePage}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
      case "about":
        return <AboutView />;
      case "services":
        return (
          <ServicesView
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            onPageChange={setActivePage}
          />
        );
      case "gallery":
        return <GalleryView />;
      case "testimonials":
        return <TestimonialsView />;
      case "contact":
        return <ContactView />;
      default:
        return (
          <HomeView
            onPageChange={setActivePage}
            setSelectedServiceId={setSelectedServiceId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-800 antialiased font-sans">
      <div>
        {/* Navigation bar */}
        <Navbar activePage={activePage} onPageChange={setActivePage} />

        {/* Dynamic page area with micro-interaction animation wrapper */}
        <main className="flex-1">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </main>
      </div>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Comprehensive Subfooter */}
      <Footer onPageChange={setActivePage} />
    </div>
  );
}

