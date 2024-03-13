import React from "react";
import styled from "styled-components";
import { colors, Container } from "../../GlobalStyles";
import MainImg from "../../assets/MainImg.jpeg";

const MainDiv = styled.section`
  height: calc(100dvh - 191px);
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
          <div style={{ fontSize: "56px" }}>DESIGN PENTRU ORICINE</div>
          <div
            style={{
              alignSelf: "center",
              fontSize: "30px",
              color: colors.black,
            }}
          >
            Let's design!
          </div>
        </div>
        <Button href="#" style={{ gridArea: "BTN1" }}>
          Afla mai multe
        </Button>
        <Button href="#" main style={{ gridArea: "BTN2" }}>
          Cere oferta
        </Button>
        <img
          style={{
            width: "100%",
            gridArea: "IMG",
            boxShadow: `15px 15px 1px  ${colors.black}`,
            opacity: '.9'
          }}
          src={MainImg}
          alt=""
        />
      </Container>
    </MainDiv>
  );
}
