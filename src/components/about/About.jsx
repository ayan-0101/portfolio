import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 } 
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 } 
  }
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="about"
      initial="hidden" 
      whileInView="visible"
    >
      <div className="container">
        <motion.div className="image-container" variants={imageVariants}>
          <img src="/profile.jpg" alt="Profile" />
        </motion.div>

        <motion.div className="content" variants={contentVariants}>
          <h2>Hello there,</h2>
          <p>
            I'm a passionate Frontend Developer specializing in <strong>React and JavaScript</strong>. 
            I love creating interactive, user-friendly web applications with <strong>modern UI/UX design</strong>.
            With expertise in <strong>React.js, SCSS, Webpack, and Storybook</strong>, 
            I focus on performance, accessibility, and optimized code.
          </p>
          <p>
            When I'm not coding, I explore new web technologies, contribute to open-source, 
            and enjoy creative UI/UX design. Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
