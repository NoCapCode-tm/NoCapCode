import React, { useState } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import PageLoader from "./components/PageLoader";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes, useLocation, useParams, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// --- STANDARD IMPORTS (Works perfectly with react-snap) ---
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./components/NotFound";
import Condition from "./components/Condition";
import Privacy from "./components/Privacy";
import CareersPage from "./components/CareersPage";
import ClarityForm from "./components/ClarityForm";
import AddCaseStudy from "./components/AddCaseStudy";
import Addjobposting from "./components/JobPosting";
import AdminLogin from "./components/AdminLogin";
import Jobdetailspage from "./components/Jobdetailspage";
import Applicationform from "./components/Applicationform";
import Home from "./components/Home";
import Verify from "./components/Verify";
import Certificate from "./components/Certificate";
import Contactus from "./components/Contactus";
import Addcertificate from "./components/Addcertificate";
import Service from "./components/Service";
import Security from "./components/Security";

// Dedicated Portfolio Pages
import WebsiteProjectOne from "./components/website/WebsiteProjectOne";
import LogoProjectOne from "./components/logo/LogoProjectOne";
import LogoProjectTwo from "./components/logo/LogoProjectTwo";

// 1. ADD VALID COUNTRIES LIST
const validCountries = [
  "us", "ca", "mx", "uk", "ie", "de", "fr", "nl", "ch", "se", "no", "dk", "fi", 
  "it", "es", "pt", "be", "pl", "cz", "ro", "ua", "at", "in", "au", "nz", "sg", 
  "jp", "kr", "tw", "hk", "cn", "id", "my", "ph", "vn", "th", "pk", "bd", "lk", 
  "ae", "sa", "qa", "kw", "bh", "om", "il", "za", "ng", "eg", "br", "ar"
];

function NotFoundPage({ setNotFound }) {
  React.useEffect(() => {
    setNotFound(true);
    return () => setNotFound(false);
  }, [setNotFound]);
  return <NotFound />;
}

// 2. ROUTE WRAPPER TO VALIDATE THE COUNTRY
function LocalizedRoute({ setNotFound }) {
  const { countryCode } = useParams();
  
  if (countryCode && !validCountries.includes(countryCode.toLowerCase())) {
    return <NotFoundPage setNotFound={setNotFound} />;
  }
  
  return <AnimatedBackground />;
}

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  React.useEffect(() => {
    const isReactSnap = navigator.userAgent === 'ReactSnap';
    if (isReactSnap) {
      setLoading(false); 
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); 
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  React.useEffect(() => {
    setNotFound(false);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      {!loading && (
        <div className="App">
          <ScrollToTop />
          
          <Routes>
            <Route path="/" element={<AnimatedBackground />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/services" element={<Service />} />
            
            {/* Static SEO-Optimized Portfolio Routes */}
            <Route path="/portfolio/website-design/medvitals-ai-triage" element={<WebsiteProjectOne />} />
            <Route path="/portfolio/logo-redesign/symbol-of-identity" element={<LogoProjectOne />} />
            <Route path="/portfolio/logo-redesign/axon-human-connection" element={<LogoProjectTwo />} />

            {/* Dynamic International Route */}
            <Route path="/:countryCode" element={<LocalizedRoute setNotFound={setNotFound} />} />
            <Route path="/:countryCode/software-development" element={<LocalizedRoute setNotFound={setNotFound} />} />
            
            <Route path="/casestudies" element={<Navigate to="/portfolio" replace />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />

            <Route path="/addcasestudies" element={<AddCaseStudy />} />
            <Route path="/terms" element={<Condition />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:id" element={<Jobdetailspage />} />
            <Route path="/addjobposting" element={<Addjobposting />} />
            <Route path="/addcertificate" element={<Addcertificate />} />
            <Route path="/career/:id/applicationform" element={<Applicationform />} />
            <Route path="/clarity" element={<ClarityForm />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/verify/certificate/:credid" element={<Certificate />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<Home />} />
            <Route path="/security" element={<Security />} />
            <Route path="*" element={<NotFoundPage setNotFound={setNotFound} />} />
          </Routes>

          {!notFound && (
            <div className="footerHead">
              <h1 className="gradienttext">no cap code</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={1000} icon={false} hideProgressBar={true} />
    </>
  );
}