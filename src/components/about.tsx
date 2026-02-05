import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am Kamashwara D K, a Computer Science and Engineering student
          specializing in Cloud Computing at SRM University, where I hold a 9.35
          CGPA. My background blends strong technical development with
          leadership; I currently serve as the President of the Andropedia Club
          and previously led Public Relations for the CloudConXpluse Symposium.
          I have practical experience building AI and IoT solutions, such as an
          AI-driven Stock Market Analyzer and a piezoelectric energy harvesting
          device. I am passionate about Full Stack Development and Cloud
          Technologies and am eager to apply my skills in C++, Python, and
          Database Management to solve real-world problems.
        </motion.p>

        {/* --- NEW: RESUME DOWNLOAD BUTTON --- */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)} // Fade in animation
          className="mt-8"
        >
          <a
            href="/resume.pdf"
            download="Kamashwara_Resume.pdf"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black-100 transition-all flex items-center gap-2"
          >
            {/* Optional: Add a download icon or just text */}
            Download Resume
          </a>
        </motion.div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};