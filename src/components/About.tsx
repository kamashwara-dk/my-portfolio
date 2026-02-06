import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SERVICES as services } from "../constants"; 
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    // FIX 1: Moved 'options' to the Tilt component where it belongs
    <Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        {/* FIX 1: Removed 'options' from this div to stop the error */}
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        // FIX 2: Changed "" to "left" to satisfy TypeScript requirements
        variants={fadeIn("left", "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        High-achieving Computer Science and Engineering undergraduate specializing in Cloud Computing with a 9.33 CGPA.
        Proven experience in AI model development, server infrastructure management, and network optimization through
        internships in Qatar and the UAE. proficient in Python, Java, and Apache Spark, with practical exposure to deploying
        Edge AI solutions and chatbot development.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service: any, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");