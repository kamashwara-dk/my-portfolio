import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profilePic from "../assets/photo.jpeg"; 

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="z-10 w-full"> {/* Added w-full */}
          
          {/* FIX: Added 'flex-col-reverse' for mobile (stack up) and 'sm:flex-row' for desktop (side-by-side) */}
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-4 sm:mb-8">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Kamashwara</span>
            </h1>
            
            {/* FIX: Smaller image on mobile (w-24) to fit better */}
            <img 
              src={profilePic} 
              alt="profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#915EFF] object-cover"
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
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