import React, { useState } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground";
import PageLoader from "./components/PageLoader";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Casestudies from "./components/Casestudies";
import NotFound from "./components/NotFound";
import Condition from "./components/Condition";
import Privacy from "./components/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import CareersPage from "./components/CareersPage";
import ClarityForm from "./components/ClarityForm";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // 🔥 Route change pe loader trigger
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
            <Route path="/404" element={<NotFound />} />
            <Route path="/terms" element={<Condition />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<CareersPage/>} />
            <Route path="/clarity" element={<ClarityForm/>} />
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
    <Router>
      <AppWrapper />
    </Router>
  );
}
