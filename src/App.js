import React, { useState } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import PageLoader from "./components/PageLoader";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { HashRouter as Router, Route, Routes, useLocation, HashRouter } from "react-router";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Casestudies from "./components/Casestudies";
import NotFound from "./components/NotFound";
import Condition from "./components/Condition";
import Privacy from "./components/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import CareersPage from "./components/CareersPage";
import ClarityForm from "./components/ClarityForm";
import Onboarding from "./components/Onboarding";
import Step1 from "./components/onboarding/Step1";
import Step2 from "./components/onboarding/Step2";
import Step3 from "./components/onboarding/Step3";
import Step4 from "./components/onboarding/Step4";
import Step5 from "./components/onboarding/Step5";
import Step6 from "./components/onboarding/Step6";
import Step7 from "./components/onboarding/Step7";
import OnboardingComplete from "./components/OnboardingComplete";
import Login from "./components/Login"
import AddCaseStudy from "./components/AddCaseStudy";
import Addjobposting from "./components/JobPosting";
import AdminLogin from "./components/AdminLogin";
import Jobdetailspage from "./components/Jobdetailspage";
import Applicationform from "./components/Applicationform";
import Home from "./components/Home";


function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  //  Route change pe loader trigger
  React.useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // loader duration (match with animation)

    return () => clearTimeout(timer);
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
            <Route path="/casestudies" element={<Casestudies />} />
            <Route path="/addcasestudies" element={<AddCaseStudy />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/terms" element={<Condition />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<CareersPage/>} />
            <Route path="/careers/:id" element={<Jobdetailspage/>} />
            <Route path="/addjobposting" element={<Addjobposting/>} />
            <Route path="/career/:id/applicationform" element={<Applicationform/>} />
            <Route path="/clarity" element={<ClarityForm/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<Home/>} />
            <Route path="/onboarding" element={ <Onboarding /> } />
            <Route path="/onboarding/step1" element={<Step1 />} />
            <Route path="/onboarding/step2" element={<Step2 />} />
            <Route path="/onboarding/step3" element={<Step3 />} />
            <Route path="/onboarding/step4" element={<Step4 />} />
            <Route path="/onboarding/step5" element={<Step5 />} />
            <Route path="/onboarding/step6" element={<Step6 />} />
            <Route path="/onboarding/step7" element={<Step7 />} />
            <Route path="/onboarding/complete" element={<OnboardingComplete />} />
          </Routes>

          <div className="footerHead">
            <h1 className="gradienttext">no cap code</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
    <HashRouter>
      <AppWrapper />
    </HashRouter>
    <ToastContainer
  position="top-center"
  autoClose={1000}
  icon={false}
  hideProgressBar={true}
/>

     </>
  );
}
