// src/constants/index.ts

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  linkedin,
  github,
  carrental,
  iot,
  piezo,
  stock,
  railway, // <--- Now this will work because we exported it above
  alajjai,
  iei,
  alsahraa,
  andro,
  bigdata,
  careerskills,
  dataanalytic,
  hybridhack,
  ibm,
  sih,
  solutionarch
} from "../assets";

export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
  },
  {
    id: "LinkedIn",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/kamashwara-dk",
  },
  {
    id: "GitHub",
    title: "GitHub",
    link: "https://github.com/kamashwara-dk",
  },
] as const;

export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
] as const;

export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

export const EXPERIENCES = [
  {
    title: "IT Intern",
    company_name: "Al Ajjai Limited Company WLL | Doha, Qatar",
    icon: alajjai,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Managed and maintained server infrastructure by taking day to day Cloud-Backup, ensuring high availability and optimal performance for internal systems.",
      "Optimized network connectivity by configuring subnets and assigning static/dynamic IP addresses for user systems.",
      "Assisted in the deployment and configuration of new hardware and software, ensuring seamless integration with existing systems.",
      "Provided technical support to staff, troubleshooting hardware and software issues to ensure smooth daily operations.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "The Institution of Engineers (India) IEI | Qatar Chapter",
    icon: iei,
    iconBg: "#E6DEDD",
    date: "June 2025 - July 2025",
    points: [
      "Developed and deployed an AI-powered chatbot designed to automate customer support and enhance user interaction.",
      "Utilized Python, Dialogflow, and NLP tools to design complex conversation flows and natural language understanding modules.",
      "Integrated the chatbot with existing web platforms and messaging services to ensure seamless user experience.",
      "Conducted rigorous testing and optimization to improve response accuracy and reduce latency.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Al Sahraa Recruitment Services | Abu Dhabi, UAE",
    icon: alsahraa,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Provided advanced support within the Microsoft 365 environment, managing user identities and troubleshooting cloud-based applications.",
      "Assisted in the administration of Azure services, including virtual machines, storage solutions, and network configurations.",
      "Collaborated with the IT team to implement security protocols and ensure compliance with organizational policies.",
      "Assisted with Fortinet security infrastructure, gaining practical exposure to configuring and monitoring FortiGate firewalls.",
    ],
  },
  {
    title: "President",
    company_name: "Andropedia Club | SRM University",
    icon: andro,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Leading technical development teams and maintaining web applications using React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and developers.",
      "Implementing responsive design and ensuring cross-browser compatibility for club projects.",
      "Participating in code reviews and providing constructive feedback to junior developers.",
    ],
  },
] as const;

export const PROJECTS = [
  {
    name: "AI Stock Market Predictor",
    description:
      "A financial forecasting tool utilizing Convolutional Neural Networks (CNN) to analyze historical stock data and predict future market trends with high accuracy.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "CNN", color: "pink-text-gradient" },
    ],
    image: stock,
    source_code_link: "https://github.com/kamashwara-dk/AI-Stock-Market-predection-analysis-using-CNN",
  },
  {
    name: "Car Rental System",
    description:
      "A comprehensive management system for car rental agencies, featuring inventory tracking, booking management, and customer billing functionality.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: carrental,
    source_code_link: "https://github.com/kamashwara-dk/Car-rental-Management-System",
  },
  {
    name: "Rail Defect Detection",
    description:
      "An ML-based safety system detecting railway track faults using image processing and deep learning algorithms to prevent accidents.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
    ],
    image: railway, // <--- USING THE ACTUAL RAILWAY IMAGE
    source_code_link: "https://github.com/kamashwara-dk/Rail-defect-detection-ML-model",
  },
  {
    name: "Piezo Footpath",
    description:
      "A sustainable energy solution harvesting electricity from foot traffic using piezoelectric sensors embedded in pathways.",
    tags: [
      { name: "hardware", color: "orange-text-gradient" },
      { name: "IoT", color: "green-text-gradient" },
    ],
    image: piezo,
    source_code_link: "",
  },
  {
    name: "Smart Car Parking",
    description:
      "An IoT-enabled smart parking system using ultrasonic sensors to detect vehicle presence and manage parking space availability in real-time.",
    tags: [
      { name: "IoT", color: "blue-text-gradient" },
      { name: "ultrasonic-sensor", color: "green-text-gradient" },
    ],
    image: iot,
    source_code_link: "",
  },
] as const;

export const CERTIFICATIONS = [
  {
    name: "Internal Hackathon SIH 2025",
    issuer: "Smart India Hackathon",
    image: sih,
    date: "Sept 2025",
    description: "Secured a position in the top 50 teams at SRM IST for the Smart India Hackathon internal round, showcasing innovative problem-solving skills."
  },
  {
    name: "Big Data Analysis with Scala and Spark",
    issuer: "EPFL (Coursera)",
    image: bigdata,
    date: "Oct 2025",
    description: "Mastered key concepts in Big Data analysis, utilizing Scala and Apache Spark to process large datasets efficiently."
  },
  {
    name: "Solutions Architecture Job Simulation",
    issuer: "AWS (Forage)",
    image: solutionarch,
    date: "July 2025",
    description: "Completed a practical job simulation involving the design of simple, scalable hosting architectures using AWS cloud services."
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    image: dataanalytic,
    date: "July 2025",
    description: "Gained hands-on experience in forensic technology and data analysis, working on realistic client scenarios and data visualization."
  },
  {
    name: "IBM Z Datathon 2025",
    issuer: "IBM & Shooting Stars",
    image: ibm,
    date: "2025",
    description: "Participated in a global datathon event, leveraging IBM Z technologies to solve data-centric challenges."
  },
  {
    name: "Hybrid Hack",
    issuer: "Aaruush '25 (SRM)",
    image: hybridhack,
    date: "Aug 2025",
    description: "Participated in a national-level techno-management fest hackathon, collaborating on hybrid innovation solutions."
  },
  {
    name: "Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    image: careerskills,
    date: "Oct 2025",
    description: "Developed foundational career skills specific to the data analytics industry, focusing on professional growth and technical readiness."
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kamashwara-dk",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/kamashwara-dk",
  },
] as const;