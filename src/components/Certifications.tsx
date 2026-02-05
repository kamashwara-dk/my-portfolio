import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { CERTIFICATIONS } from "../constants";

const CertificationCard = ({
  index,
  name,
  issuer,
  image,
  date,
  description,
}: {
  index: number;
  name: string;
  issuer: string;
  image: string;
  date: string;
  description: string;
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-fill rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[20px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px] font-semibold'>{issuer}</p>
        <p className='mt-1 text-gray-400 text-[12px] italic'>{date}</p>
        
        <p className='mt-4 text-white text-[14px] leading-6'>
          {description}
        </p>
      </div>
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  return (
    // We manually add the SectionWrapper logic here to prevent errors
    <motion.section
      variants={staggerContainer(0, 0)} // Added basic stagger args
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      {/* This span creates the ID for scrolling */}
      <span className="hash-span" id="certifications">
        &nbsp;
      </span>

      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My Credentials</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </motion.section>
  );
};

export { Certifications }; // Named export for index.ts
export default Certifications; // Default export for standard usage