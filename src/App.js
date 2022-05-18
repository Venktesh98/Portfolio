import "./App.css";
import Navbar from "./components/Portfolio/Navbar/Navbar";
import Intro from "./components/Portfolio/Intro/Intro";
import Contact from "./components/Portfolio/Contact/Contact";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useEffect, useRef, useState } from "react";
import { useReference } from "./components/helpers/useReference";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [contactRef, scrollToContact] = useReference();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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

  // This function will scroll the window to the top
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // for smoothly scrolling
  //   });
  // };

  return (
    <div>
      <Navbar onScrollContact={scrollToContact} />
      <Intro />
      <Contact onRef={contactRef} />

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
