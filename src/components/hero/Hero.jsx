import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerchildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const slidertVariant = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-270%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Mohd. Ayan</motion.h2>
          <motion.h1 variants={textVariants}>Front-End Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Latest Work</motion.button>
            <motion.button variants={textVariants}>Contact</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingContainer"
        variants={slidertVariant}
        initial="initial"
        animate="animate"
      >
        Front-End Developer Front-End Developer
      </motion.div>

      <motion.div className="imageContainer" variants={imageVariants}>
        <motion.img
          src="/ayan.png"
          alt=""
          variants={imageVariants}
          initial="initial"
          animate="animate"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
