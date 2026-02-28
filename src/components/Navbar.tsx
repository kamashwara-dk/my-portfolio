import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { NAV_LINKS as navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => !["Resume", "LinkedIn", "GitHub"].includes(link.id))
      .map((link) => link.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchingLink = navLinks.find((l) => l.id === entry.target.id);
            if (matchingLink) {
              setActive(matchingLink.title);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string, isMobile = false) => {
    if (isMobile) setToggle(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const renderNavLink = (link: (typeof navLinks)[number], isMobile = false) => {
    // External links
    if (link.id === "GitHub") {
      return (
        <a href="https://github.com/kamashwara-dk" target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>
      );
    }
    if (link.id === "LinkedIn") {
      return (
        <a href="https://www.linkedin.com/in/kamashwara-dk/" target="_blank" rel="noopener noreferrer">
          {link.title}
        </a>
      );
    }
    if (link.id === "Resume") {
      return (
        <a href="/resume.pdf" download="Kamashwara_Resume.pdf">
          {link.title}
        </a>
      );
    }

    // Internal scroll links
    return (
      <a
        href={`#${link.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleScrollTo(link.id, isMobile);
        }}
      >
        {link.title}
      </a>
    );
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
        } transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='#'
          className='flex items-center gap-2 group'
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <motion.img
            src={logo}
            alt='logo'
            className='w-9 h-9 object-contain rounded-full'
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Kamashwara &nbsp;
            <span className='sm:block hidden'>| Portfolio</span>
          </p>
        </a>

        {/* --- DESKTOP MENU --- */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link, i) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer nav-link-hover`}
              onClick={() => setActive(link.title)}
            >
              {renderNavLink(link)}
            </motion.li>
          ))}
        </ul>

        {/* --- MOBILE MENU --- */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.85 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl shadow-xl shadow-black/40"
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? "text-white" : "text-secondary"
                        }`}
                      onClick={() => setActive(link.title)}
                    >
                      {renderNavLink(link, true)}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;