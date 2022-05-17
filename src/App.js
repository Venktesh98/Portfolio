import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

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


  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <Navbar />
      <Intro />
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
