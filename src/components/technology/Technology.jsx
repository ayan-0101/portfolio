import React from "react";
import { motion, stagger } from "framer-motion";
import "./technology.scss";

const technologies = [
  { name: "JavaScript", logo: "/JavaScript.png" },
  { name: "React.js", logo: "/React.png" },
  { name: "Node.js", logo: "/Node.png" },
  { name: "React Native", logo: "/ReactNative.png" },
  { name: "Redux", logo: "/Redux.png" },
  { name: "HTML 5", logo: "/Html.png" },
  { name: "CSS 3", logo: "/Css.png" },
  { name: "Sass", logo: "/Scss.png" },
  { name: "Storybook", logo: "/Storybook.svg" },
  { name: "Git", logo: "/Git.png" },
  { name: "C", logo: "/C.png" },
  { name: "C++", logo: "/C++.png" },
  { name: "Express", logo: "/Express.png" },
  { name: "MongoDB", logo: "/MongoDb.png" },
];

const variants = {
  initial: {
    x: -500,
    y:80,
    opacity: 0
  },
  animate: {
    x: 0,
    y:0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.2
    }
  }
}

const Technology = () => {
  return (
    <motion.div className="technology" variants={variants} >
      <motion.div className="textContainer" variants={variants} initial="initial" whileInView="animate">
        <p>
          I prioritize continuous learning and skill enhancement <br />
          to stay updated with the latest technologies and best practices.
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants} initial="initial" whileInView="animate">
        <h1>
          <b>
            Technologies <span> I Use</span>
          </b>
        </h1>
      </motion.div>

      <motion.div className="listContainer" variants={variants} initial="initial" whileInView="animate">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="techItem"
          >
            <img src={tech.logo} alt={tech.name} />
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
