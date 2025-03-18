import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiStorybook,
  SiGit,
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import "./technology.scss";

const technologies = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
    duration: 1.2,
  },
  { name: "React.js", icon: <SiReact />, color: "#61DAFB", duration: 1.4 },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#83CD29", duration: 1.6 },
  { name: "React Native", icon: <FaReact />, color: "#61DAFB", duration: 1.8 },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC", duration: 2.0 },
  { name: "HTML 5", icon: <SiHtml5 />, color: "#E34F26", duration: 2.2 },
  { name: "CSS 3", icon: <SiCss3 />, color: "#1572B6", duration: 2.4 },
  { name: "Sass", icon: <SiSass />, color: "#CC6699", duration: 1.2 },
  { name: "Storybook", icon: <SiStorybook />, color: "#FF4785", duration: 1.4 },
  { name: "Git", icon: <SiGit />, color: "#F05032", duration: 1.6 },
  { name: "C", icon: <SiC />, color: "#ccd1d7", duration: 1.8 },
  { name: "C++", icon: <SiCplusplus />, color: "#2886cd", duration: 2.0 },
  { name: "Express", icon: <SiExpress />, color: "#d7d4d4", duration: 2.2 },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", duration: 2.4 },
];

const variants = {
  initial: { x: -500, y: 80, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
  visible: { opacity: 1, x: 0, y: 0 }, // No animations, static view
};

const Technology = () => {
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setDisableAnimation(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      className="technology"
      variants={disableAnimation ? undefined : variants}
      initial={disableAnimation ? "visible" : "initial"}
      animate={disableAnimation ? "visible" : "animate"}
    >
      <motion.div
        className="titleContainer"
        variants={disableAnimation ? undefined : variants}
        initial={disableAnimation ? "visible" : "initial"}
        animate={disableAnimation ? "visible" : "animate"}
      >
        <h1>
          <b>
            Technologies <span> Stack</span>
          </b>
        </h1>
      </motion.div>

      <motion.div
        className="textContainer"
        variants={disableAnimation ? undefined : variants}
        initial={disableAnimation ? "visible" : "initial"}
        animate={disableAnimation ? "visible" : "animate"}
      >
        <p>
          I prioritize continuous learning and skill enhancement to stay updated
          with the latest technologies and best practices.
        </p>
        <hr />
      </motion.div>
      
      <motion.div
        className="listContainer"
        variants={disableAnimation ? undefined : variants}
        initial={disableAnimation ? "visible" : "initial"}
        animate={disableAnimation ? "visible" : "animate"}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="techItem"
            initial={disableAnimation ? "visible" : { opacity: 1, y: -10 }}
            animate={
              disableAnimation
                ? "visible"
                : {
                    opacity: 1,
                    y: [0, -10, 0],
                    transition: {
                      duration: tech.duration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <div className="icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <p>
              <b>{tech.name}</b>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Technology;
