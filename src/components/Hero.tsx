import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profilePic from "../assets/photo.jpeg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Hero Text — stays in upper portion */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Animated dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='w-5 h-5 rounded-full bg-[#915EFF]'
          />
          {/* Animated gradient line */}
          <div className='w-1 sm:h-60 h-32 violet-gradient gradient-line-grow' />
        </div>

        <div className="z-10 w-full pointer-events-auto">
          {/* Hero heading + profile pic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-3 sm:gap-8 mb-2 sm:mb-4"
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Kamashwara</span>
            </h1>

            {/* Profile pic with float animation */}
            <motion.img
              src={profilePic}
              alt="profile"
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-[#915EFF] object-cover profile-float flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5, duration: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(145, 94, 255, 0.6)",
                borderColor: "#00cea8"
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`${styles.heroSubText} mt-1 text-white-100`}
          >
            Cloud Computing & AI Enthusiast
          </motion.p>
        </div>
      </div>

      {/* 3D Computer — fills full section, model self-positions via camera */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('about');
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;