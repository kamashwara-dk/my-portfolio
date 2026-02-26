import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Animated routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route
          path="/"
          element={
            <div className="bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
          }
        />

        {/* About / Overview */}
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
              <Tech />
            </PageTransition>
          }
        />

        {/* Work Experience */}
        <Route
          path="/experience"
          element={
            <PageTransition>
              <Experience />
            </PageTransition>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Works />
            </PageTransition>
          }
        />

        {/* Certifications */}
        <Route
          path="/certifications"
          element={
            <PageTransition>
              <Certifications />
            </PageTransition>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <PageTransition>
              <div className="relative z-0">
                <Contact />
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Main Container */}
      <div className="relative z-0 bg-primary min-h-screen">
        <Navbar />

        {/* Page Content */}
        <div className="pt-[80px]">
          <AnimatedRoutes />
        </div>

        {/* Global Stars Background */}
        <div className="fixed inset-0 z-[-1]">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;