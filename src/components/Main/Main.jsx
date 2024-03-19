import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors, Container } from "../../GlobalStyles";
import MainImg from "../../assets/MainImg.jpeg";

const MainDiv = styled.section`
  padding: 4rem 0;
  background: ${colors.white};
`;

const Button = styled.a`
  height: 100%;
  background: ${({ main }) => (main ? colors.black : "inherit")};
  color: ${({ main }) => (main ? colors.white : "inherit")};
  font-size: 1.25rem;
  font-weight: ${({ main }) => (main ? 600 : 200)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.black};
  text-decoration: none;
`;

export default function Main() {
  const [titleFontSize, setTitleFontSize] = useState("");
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

  useEffect(() => {
    if (viewportWidth > 1300) {
      setTitleFontSize(56);
    } else if (viewportWidth > 1200) {
      setTitleFontSize(42);
    } else if (viewportWidth > 900) {
      setTitleFontSize(32);
    } else {
      setTitleFontSize(26);
    }
  }, [viewportWidth]);

  return (
    <MainDiv>
      <Container
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateAreas:
            "'. IMG IMG' '. IMG IMG' 'BTN1 IMG IMG' 'BTN2 IMG IMG'",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          position: "relative",
          padding: "3rem 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "calc(100% + 16px)",
            display: "grid",
            gridTemplateColumns: "auto auto",
            background: colors.white,
            padding: "1rem 0",
            top: "25%",
            zIndex: 1,
          }}
        >
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
          href="#poveste"
          style={{ gridArea: "BTN1", fontSize: `${titleFontSize / 2.5}px` }}
        >
          Afla mai multe
        </Button>
        <Button
          href="#contact"
          main
          style={{ gridArea: "BTN2", fontSize: `${titleFontSize / 2.5}px` }}
        >
          Cere oferta
        </Button>
        <img
          style={{
            width: "100%",
            gridArea: "IMG",
            boxShadow: `15px 15px 1px  ${colors.black}`,
            opacity: ".9",
          }}
          src={MainImg}
          alt=""
        />
      </Container>
    </MainDiv>
  );
}
