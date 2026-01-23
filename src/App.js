
import { useState } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import PageLoader from './components/PageLoader';
import { BrowserRouter as Router,Route,Routes } from 'react-router';
import About from './components/About';
import Contactus from './components/Contactus';
import Casestudies from './components/Casestudies';
import NotFound from './components/NotFound';
import Condition from './components/Condition';

function App() {
    const [loaded, setLoaded] = useState(false);
  return (
    <div className="App">
     {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <Router>
        <Routes>
          <Route path="/" element={ <AnimatedBackground />}/>
          <Route path="/about" element={ <About />}/>
          <Route path="/contact" element={ <Contactus/>}/>
          <Route path="/case-studies" element={ <Casestudies/>}/>
          <Route path="/not-found" element={ <NotFound/>}/>
          <Route path="/terms" element={ <Condition/>}/>
        </Routes>
      </Router>
     
       <div className="footerHead">
      <h1 className="gradienttext">no cap code</h1>
    </div>
     </div>
  );
}

export default App;
