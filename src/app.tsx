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
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        {/* Global background animation — runs across entire portfolio */}
        <BackgroundAnimation />

        {/* Global stars background */}
        <div className="fixed inset-0 z-[0] pointer-events-none">
          <StarsCanvas />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>

        {/* About & Tech */}
        <About />
        <Tech />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Works />

        {/* Certifications */}
        <Certifications />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;