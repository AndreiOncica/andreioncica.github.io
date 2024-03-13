import { GlobalStyles } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Main from './components/Main/Main'
import { useState, useEffect } from "react";

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
      <Main />
    </>
  );
}
