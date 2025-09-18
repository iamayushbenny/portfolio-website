import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4">
        <p>
          Hello! I am Ayush Benny, from a small village in Kannur, Kerala, surrounded by greenery and calm waters. Right now, I am studying at St. Vincent Pallotti College of Engineering and Technology in Nagpur, Maharashtra, turning my tech ideas into reality.
        </p>
        
        <p>
          From the peaceful villages of Kerala to the busy city of Nagpur, my journey shows my curiosity and adaptability. I am passionate about cybersecurity, working in SOC operations, red teaming, and penetration testing, and I also build web applications with the MERN stack. Lately, I am exploring AI and machine learning, always looking for ways to solve real problems and create new solutions.
        </p>
        
        <p>
          I enjoy working in calm, focused spaces, and I like trying to make things work where others see obstacles. Outside of tech, I love dancing, play sports and reading—always exploring, learning, and solving.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {services.slice(3, 6).map((service, index) => (
            <ServiceCard key={service.title} index={index + 3} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
