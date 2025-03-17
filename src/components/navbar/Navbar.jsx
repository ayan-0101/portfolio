import React from "react";
import { motion } from "framer-motion";

import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import Hero from "../hero/Hero";

const social = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohd-ayan-060b25190/",
    duration: 2,
  },
  { name: "Git", url: "https://github.com/ayan-0101/", duration: 2.5 },
  {
    name: "instagram",
    url: "https://www.instagram.com/_ayan_01__/",
    duration: 2.3,
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ayan
        </motion.span>
        <motion.div className="social">
          {social.map((logo, index) => (
            <motion.a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: -10, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
                scale: 1,
                transition: {
                  duration: logo.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <img src={`/${logo.name}.png`} alt={logo} />
            </motion.a>
          ))}
        </motion.div>
      </div>
      <Hero />
    </div>
  );
};

export default Navbar;
