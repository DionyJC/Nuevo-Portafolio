import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      
    </div>
  );
};

export default Header;
