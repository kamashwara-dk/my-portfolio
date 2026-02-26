import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { CERTIFICATIONS as certifications } from "../constants";

const CertificationCard = ({
  index,
  name,
  issuer,
  date,
  image,
  link,
}: any) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card-glow'
    >
      {/* Image with zoom effect */}
      <div className='relative w-full h-[230px] img-zoom rounded-2xl'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{issuer}</p>
        <p className='text-secondary text-[12px]'>{date}</p>

        {link && (
          <div className="mt-4">
            <a href={link} target="_blank" rel="noreferrer" className="text-blue-400 text-[14px] hover:underline credential-link">
              View Credential →
            </a>
          </div>
        )}
      </div>
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("up", "spring", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of the professional certifications I have earned.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((cert: any, index: number) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");