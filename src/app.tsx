import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Certifications,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Main Container - bg-primary ensures it's always dark */}
      <div className='relative z-0 bg-primary'>
        
        {/* --- INTRODUCTION SECTION --- */}
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* --- MIDDLE SECTIONS --- */}
        <About />
        <Experience />
        <Tech />
        <Works />

        {/* --- BOTTOM SECTION --- */}
        <div className='relative z-0'>
          <Certifications />
          <Contact />
        </div>

        {/* --- GLOBAL ANIMATION --- */}
        {/* 'fixed' makes the stars stay on screen while you scroll */}
        {/* 'z-[-1]' puts them BEHIND everything else */}
        <div className="fixed inset-0 z-[-1]">
          <StarsCanvas />
        </div>
        
      </div>
    </BrowserRouter>
  );
};

export default App;