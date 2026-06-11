import React, { useState } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import PageLoader from "./components/PageLoader";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
import About from "./components/About";

import Casestudies from "./components/Casestudies";
import NotFound from "./components/NotFound";
import Condition from "./components/Condition";
import Privacy from "./components/Privacy";
import ScrollToTop from "./components/ScrollToTop";
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


// 2. ADD THIS ROUTE WRAPPER TO VALIDATE THE COUNTRY
function LocalizedRoute({ setNotFound }) {
  const { countryCode } = useParams();
  
  // If the path is something like "/service", it won't be in the validCountries array.
  // It will immediately return the 404 Page Not Found.
  if (countryCode && !validCountries.includes(countryCode.toLowerCase())) {
    return <NotFoundPage setNotFound={setNotFound} />;
  }
  
  return <AnimatedBackground />;
}

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  //  Route change pe loader trigger
  React.useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // loader duration (match with animation)

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

            {/* Dynamic International Route */}
            {/* Localized versions of your exact same homepage */}
            <Route path="/:countryCode" element={<LocalizedRoute setNotFound={setNotFound} />} />
            <Route path="/:countryCode/software-development" element={<LocalizedRoute setNotFound={setNotFound} />} />

            <Route path="/contact" element={<Contactus />} />
            <Route path="/services" element={<Service />} />
            <Route path="/casestudies" element={<Casestudies />} />
            <Route path="/addcasestudies" element={<AddCaseStudy />} />
            <Route path="/terms" element={<Condition />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<CareersPage/>} />
            <Route path="/careers/:id" element={<Jobdetailspage/>} />
            <Route path="/addjobposting" element={<Addjobposting/>} />
            <Route path="/addcertificate" element={<Addcertificate/>} />
            <Route path="/career/:id/applicationform" element={<Applicationform/>} />
            <Route path="/clarity" element={<ClarityForm/>} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/verify/certificate/:credid" element={<Certificate />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<Home/>} />
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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        icon={false}
        hideProgressBar={true}
      />

    </>

  );
}
