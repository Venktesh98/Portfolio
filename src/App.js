import "./App.css";
import Navbar from "./components/Portfolio/Navbar/Navbar";
import Intro from "./components/Portfolio/Intro/Intro";
import Contact from "./components/Portfolio/Contact/Contact";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useEffect, useState } from "react";
import About from "./components/Portfolio/About/About";
import { animateScroll as scroll } from "react-scroll";

function App() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Contact />

      {/* Scrolls to the top of the page */}
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
}

export default App;
