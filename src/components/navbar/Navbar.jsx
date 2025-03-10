import React from "react";
import { motion } from "framer-motion";

import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const linkVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ayan
        </motion.span>
        <motion.div
          className="social"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {["facebook", "instagram", "youtube", "dribbble"].map(
            (logo, index) => (
              <motion.a
                key={index}
                href="#"
                variants={linkVariants}
                transition={{ duration: 0.2 }}
              >
                <img src={`/public/${logo}.png`} alt={logo} />
              </motion.a>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
