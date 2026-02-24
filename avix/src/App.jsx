import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useLayoutEffect } from "react";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import SocialPricing from "./pages/SocialPricing";
import WebsitePricing from "./pages/WebsitePricing";
import ThreeDPricing from "./pages/ThreeDPricing";


/* ================= Scroll To Top ================= */
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}


/* ================= App ================= */
function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <MainLayout>
        <Routes location={location} key={location.pathname}>

          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Pricing Routes */}
          <Route path="/pricing" element={<Navigate to="/pricing/social" replace />} />
          <Route path="/pricing/social" element={<SocialPricing />} />
          <Route path="/pricing/website" element={<WebsitePricing />} />
          <Route path="/pricing/3d" element={<ThreeDPricing />} />

        </Routes>
      </MainLayout>
    </>
  );
}


/* ================= Wrap Router ================= */
export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
