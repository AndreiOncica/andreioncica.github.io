import { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Proiecte/Projects";
import Mobila from "./components/Mobila/Mobila";
import Prices from './components/Prices/Prices'
import Footer from './components/Footer/Footer'

export default function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar isDesktop={viewportWidth >= 768} />
      <Main viewportWidth={viewportWidth} />
      <About viewportWidth={viewportWidth} />
      <Projects isDesktop={viewportWidth >= 768}/>
      <Mobila />
      <Prices />
      <Footer isDesktop={viewportWidth >= 768}/>
    </>
  );
}
