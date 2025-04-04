import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about" || "portfolio"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradiant(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {" "}
        {type === "about"
          ? "About me"
          : type === "technologies"
          ? "What I've learned"
          : "Some of my work"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "technologies" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
