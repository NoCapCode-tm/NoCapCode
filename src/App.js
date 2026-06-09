import React, { use, useState } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import PageLoader from "./components/PageLoader";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import ServicePage from "./components/ServicePage";
import RegionalLanding from './components/region/RegionalLanding'; // The new regional landing page component by Om, which will handle all the localized content and SEO for the top markets.



function NotFoundPage({ setNotFound }) {
  React.useEffect(() => {
    setNotFound(true);
    return () => setNotFound(false);
  }, [setNotFound]);
  return <NotFound />;
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
            <Route path="/:countryCode" element={<AnimatedBackground />} />
            <Route path="/:countryCode/software-development" element={<AnimatedBackground />} />

            <Route path="/contact" element={<Contactus />} />
            <Route path="/services" element={<ServicePage />} />
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
