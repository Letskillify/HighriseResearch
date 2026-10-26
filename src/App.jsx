import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/BackToTop";
import Preloader from "./Components/Preloader";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Admin from "./pages/Admin.jsx";
import AdminSignIn from "./pages/AdminSignIn.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import NotFound from "./Components/Notfound.jsx";
import InvestorCharter from "./pages/InvestorCharter.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/Terms.jsx";
import RefundPolicy from "./pages/Refund.jsx";
import AMLPolicy from "./pages/AmlPolicy.jsx";
import Disclaimer from "./pages/Disclamer.jsx";
import Complaints from "./pages/Complaints.jsx";
import KYC from "./pages/KYC.jsx";
import Alerts from "./pages/Alerts.jsx";
import Payment from "./pages/Payment.jsx";
import WhatsAppButton from "./Components/WhatsAppButton.jsx";
import PopupForm from "./Components/PopupForm.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ premium slow reveal

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {/* WCAG 2.4.1: Skip to content (Bypass Blocks) */}
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("main-content");
          if (target) {
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: false });
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[99999] focus:px-5 focus:py-2.5 focus:bg-white focus:text-slate-900 focus:font-semibold focus:text-sm focus:rounded-md focus:border focus:border-slate-300 focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all cursor-pointer"
      >
        Skip to content
      </a>
      {!isAdminPage && <Header />}
      {!isAdminPage && <WhatsAppButton />}
      {!isAdminPage && <PopupForm />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/admin-login" element={<AdminSignIn />} />
        <Route path="/investor" element={<InvestorCharter />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/aml" element={<AMLPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
