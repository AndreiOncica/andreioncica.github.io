import React, { useState, useEffect, useRef } from "react";
import { colors, Container } from "../../GlobalStyles";
import { MainDiv, Button } from "./Main.styles";
import MainImg from "../../assets/MainImg.jpeg";

export default function Main() {
  const [titleFontSize, setTitleFontSize] = useState(56);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const wrapperRef = useRef(undefined);
  const imageRef = useRef(undefined);
  const sectionRef = useRef(undefined);

  useEffect(() => {
    wrapperRef.current.style.transform = "translateX(0)"
    
    imageRef.current.style.transform = "translateX(0)"
    sectionRef.current.style.opacity = 1;
    setTimeout(() => {
      wrapperRef.current.style.background = colors.white
    }, 2000)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth > 1300) {
      setTitleFontSize(56);
    } else if (viewportWidth > 1200) {
      setTitleFontSize(42);
    } else if (viewportWidth > 900) {
      setTitleFontSize(32);
    } else if (viewportWidth > 600) {
      setTitleFontSize(26);
    } else {
      setTitleFontSize(20);
    }
  }, [viewportWidth]);

  return (
    <MainDiv ref={sectionRef}>
      <Container className="main__container">
        <div className="main__wrapper" ref={wrapperRef}>
          <div style={{ fontSize: `${titleFontSize}px` }}>
            DESIGN PENTRU ORICINE
          </div>
          <div
            style={{
              alignSelf: "center",
              fontSize: `${titleFontSize / 1.8}px`,
              color: colors.black,
            }}
          >
            Let's design!
          </div>
        </div>
        <Button
          className="main__button"
          href="#poveste"
          style={{ gridArea: "BTN1", fontSize: `${titleFontSize / 2.5}px` }}
        >
          Afla mai multe
        </Button>
        <Button
          className="main__button"
          href="#contact"
          main="true"
          style={{ gridArea: "BTN2", fontSize: `${titleFontSize / 2.5}px` }}
        >
          Cere oferta
        </Button>
        <img ref={imageRef} className="main__image" src={MainImg} alt="" />
      </Container>
    </MainDiv>
  );
}
