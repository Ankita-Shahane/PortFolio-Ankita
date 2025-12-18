import Navbar from "../src/Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"
import { useEffect } from "react";

 

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      

    </>
  );
}

export default App;
