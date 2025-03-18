import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Technologies", "Portfolio", "Contact"];

  const handleScroll = (e, item) => {
    e.preventDefault();
    document.getElementById(item)?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          onClick={(e) => handleScroll(e, item)}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
