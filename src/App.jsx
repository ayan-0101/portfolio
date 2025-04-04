import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Technology from "./components/technology/Technology";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        {" "}
        <Navbar />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id="Technologies">
        <Parallax type="technologies" />
      </section>
      <section>
        <Technology />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
