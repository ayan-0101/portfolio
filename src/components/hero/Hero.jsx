import React, { useState } from "react";
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
      staggerChildren: 0.1,
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
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Mohd_Ayan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setLoading(false), 1000);
  };

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
            <motion.button
              className="resume-button"
              variants={textVariants}
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
            >
              {loading ? <span /> : "Download Resume"}
            </motion.button>
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
