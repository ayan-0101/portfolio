import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Fit Club",
    img: "/Project1.jpg",
    url: "https://fitclubgroup.netlify.app/",
    description:
      "Fit Club is a modern and interactive gym website built using React. It features engaging animations powered by Framer Motion, enhancing the overall user experience with smooth transitions and effects. The project also integrates EmailJS, enabling automated contact form submissions to streamline communication between users and the gym. Designed with a responsive layout, the website ensures seamless accessibility across all devices, providing an intuitive and visually appealing interface for fitness enthusiasts.",
  },
  {
    id: 2,
    title: "Food Hub",
    img: "/Project2.jpg",
    url: "https://food-hub-web.onrender.com/",
    description:
      "Food Hub is a full-featured food delivery web application designed to provide a seamless ordering experience. The frontend is built with React and JavaScript (ES6+), ensuring a dynamic and responsive interface. Additionally, an admin portal (currently in development) will allow owners to manage orders, menus, and customer interactions efficiently. Leveraging the MERN stack, the application enables smooth data handling, real-time updates, and secure authentication, making it a robust solution for online food services.",
  },
];

const onSeeDemo = (url) => {
  window.open(url, "_blank");
};

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <div
              className="blurbackground"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => onSeeDemo(item.url)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
