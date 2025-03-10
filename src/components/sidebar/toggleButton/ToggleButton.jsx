import React from "react";
import {motion} from 'framer-motion'


const ToggleButton = ({ setIsOpen }) => {
  return (
    <div className="button" onClick={() => setIsOpen((prev) => !prev)}>
      <svg viewBox="0 0 23 23" width="23" height="23">
        <motion.path
          d="M2 4.5h19"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M2 4.5h19" },
            open: { d: "M4 4.5L19 19" },
          }}
        />
        <motion.path
          d="M2 11.5h19"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          d="M2 18.5h19"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M2 18.5h19" },
            open: { d: "M4 19L19 4.5" },
          }}
        />
      </svg>
    </div>
  );
};

export default ToggleButton;
