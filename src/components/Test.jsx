import { motion } from "framer-motion";
import React, { useState } from "react";

const Test = () => {
//   const [open, setOpen] = useState(false);
  const variants = (i)=>({
    visible: {
      opacity: 1,
      x: 100,
    //   transition: { type: "spring", stiffness: 500, damping: 10 },
    // transition: {staggerChildren: 0.4}
      transition: {delay: i * 0.2}
    },
    hidden: { opacity: 0 },
  });

  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        // initial={{ opacity: 0, scale: 0.5 }}
        // whileInView={{ opacity: 1, scale: 1.5 }}
        // drag
        // transition={{ duration: 2 }}
        animate= {open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={()=>setOpen((prev)=>!prev)}>click</button> */}

      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li key={item} variants={variants} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
