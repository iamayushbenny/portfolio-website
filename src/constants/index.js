import {
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  python,
  burpsuite,
  metasploit,
  nessus,
  nikto,
  owasp,
  tryhackme,
  htb,
  kalilinux,
  webscanner,
  ddosDetector,
  badUsb,
  avadhSchool,
  phoenix,
  fenishop,
  phoenixcybersec,
  theavadhschool,
  diamond,
  diamond2,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import additional tech icons
import docker from "../assets/tech/docker.png";


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cyber Security Expert",
    icon: backend,
  },
  {
    title: "Application Security",
    icon: web,
  },
  {
    title: "Penetration Tester",
    icon: mobile,
  },
  {
    title: "SOC Analyst",
    icon: diamond,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "AI/ML Enthusiast",
    icon: diamond2,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "Burp Suite",
    icon: burpsuite,
  },
  {
    name: "Nessus",
    icon: nessus,
  },
  {
    name: "Nikto",
    icon: nikto,
  },
  {
    name: "OWASP Top 10",
    icon: owasp,
  },
  {
    name: "Try Hack Me",
    icon: tryhackme,
  },
  {
    name: "Hack The Box",
    icon: htb,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "Fenishop",
    icon: fenishop,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Dec 2023",
    points: [
      "Managed all finances and customer interactions, ensuring smooth day-to-day operations.",
      "Grew customer base to 200–250 students within the hostel campus.",
      "Made snacks and food items easily accessible across the campus.",
      "Offered 24/7 service with convenient door-to-door delivery.",
    ],
  },
  {
    title: "Vice Captain",
    company_name: "Phoenix Cybersecurity Club",
    icon: phoenixcybersec,
    iconBg: "#383E56",
    date: "Apr 2023 - Present",
    points: [
      "Mentoring juniors and guiding them through projects and research work.",
      "Conducted Encipher X (a national-level CTF) with 70+ participating teams.",
      "Achieving multiple wins and runner-up positions in CTF competitions.",
      "Organizing awareness sessions, seminars, and technical programs for the community and college.",
    ],
  },
  {
    title: "Backend and Application Security Intern",
    company_name: "The Avadh School",
    icon: theavadhschool,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed backend systems for websites, including an admin panel for content management.",
      "Conducted threat modeling to identify attack surfaces using the STRIDE framework.",
      "Performed reconnaissance and penetration testing to uncover and document vulnerabilities.",
      "Implemented defensive measures to mitigate identified vulnerabilities and strengthen security posture.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ayush has been my co-founder in multiple ventures, and what sets him apart is his mix of passion, practicality, and technical depth. He dreams big but grounds every vision in reality with sharp execution and constructive criticism. Every project we’ve built together has been stronger because of his critical thinking and ability to turn ideas into impact.",
    name: "Allen Jess",
    designation: "Founder",
    company: "Ratan",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I’ve had the pleasure of working with Ayush Benny across multiple projects and even some of my startups. His unique blend of management skills and technical expertise is truly exceptional, he consistently delivers results with precision, creativity, and reliability. Ayush is a rare talent who makes any team stronger.",
    name: "Ashwin Renjith",
    designation: "Founder & CEO",
    company: "FynqAi",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Collaborating with Ayush on the Avadh School website redesign was a privilege. His expertise in backend development and security greatly improved the project and gave me valuable insights into cybersecurity. Ayush makes smart decisions under pressure, and he’s not only a talented professional but also a patient teacher and good friend.",
    name: "Alwyn Paul",
    designation: "ML Intern",
    company: "IMD ",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "WebGuard-Python",
    description:
      "WebGuard-Python is a powerful web vulnerability scanner designed to help developers and security enthusiasts detect critical vulnerabilities such as IDOR, XSS, and SQL Injection in their web applications. Built with Python and BeautifulSoup, it simplifies security testing while providing clear, actionable insights.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "websecurity",
        color: "green-text-gradient",
      },
      {
        name: "webscraping",
        color: "pink-text-gradient",
      },
      {
        name: "penetrationtesting",
        color: "white-text-gradient",
      },
    ],
    image: webscanner,
    source_code_link: "https://github.com/iamayushbenny/Web-Vulnerability-Scanner.git",
  },
  {
    name: "Real-Time DDOS Detector",
    description:
      "Real-Time DDOS Detector monitors network traffic to identify and alert on attacks such as SYN Flood, UDP Flood, and HTTP Flood in real time. Built with C++, Npcap, and advanced detection algorithms, it helps secure systems proactively by providing immediate warnings.",
    tags: [
      {
        name: "cpp",
        color: "blue-text-gradient",
      },
      {
        name: "networksecurity",
        color: "green-text-gradient",
      },
      {
        name: "npcap",
        color: "pink-text-gradient",
      },
      {
        name: "realtimedetection",
        color: "white-text-gradient",
      },
    ],
    image: ddosDetector,
    source_code_link: "https://github.com/iamayushbenny/DDOS_Detection.git",
  },
  {
    name: "Bad USB Emulator",
    description:
      "Bad USB Emulator leverages the Sliver framework to simulate USB devices and gain shell access for security testing purposes. Implemented with Python and a Raspberry Pi Zero W, it demonstrates practical penetration testing techniques in a controlled environment.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "raspberrypi",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "pink-text-gradient",
      },
      {
        name: "redteaming",
        color: "white-text-gradient",
      },
    ],
    image: badUsb,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Avadh School Website",
    description:
      "Developed a full-featured MERN stack website for a school, handling the backend including API authentication and ensuring robust security. Conducted penetration testing and threat modeling using STRIDE to safeguard the application from potential vulnerabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "websecurity",
        color: "green-text-gradient",
      },
    ],
    image: avadhSchool,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phoenix Cybersecurity Club Website",
    description:
      "Built a dynamic MERN stack website for the Phoenix Cybersecurity Club, handling key features like the blogs section and user login system. The platform enables members to share knowledge, stay updated on cybersecurity trends, and engage with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "webdevelopment",
        color: "green-text-gradient",
      },
    ],
    image: phoenix,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
