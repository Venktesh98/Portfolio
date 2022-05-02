import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Dummy from "./components/Dummy";
import CanvasToImageDemo from "./components/CanvasToImageDemo";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Contact />
      {/* <CanvasToImageDemo /> */}
      {/* <Dummy /> */}
    </div>
  );
}

export default App;
