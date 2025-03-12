import './app.scss'
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';

const App = () => {
  return <div>
    <section id='Homepage'> <Navbar/></section>
    <section id='Services'><Parallax type='services'/></section>
    <section>Service</section>
    <section id='Portfolio'><Parallax type='portfolio'/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>

  </div>;
};

export default App;
