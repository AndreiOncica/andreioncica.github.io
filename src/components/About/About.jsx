import React from "react";
import styled from "styled-components";
import { colors, Container } from "../../GlobalStyles";
import AboutImg from "../../assets/AboutImg.jpg";

const AboutSection = styled.section`
  background: ${colors.black};
`;

const BackgroundLayer = styled.div`
  width: 100%;
  display: flex;
  height: 700px;
  max-width: 1920px;
  margin: 0 auto;

  & div:first-child {
    background-color: ${colors.black};
    width: 50%;
  }

  & div {
    &:last-child {
      background: url(${AboutImg});
      width: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-color: ${colors.black};
      background-blend-mode: lighten;
    }
  }

  & img {
    object-fit: cover;
    width: 50%;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 3px solid ${colors.white};
  padding: 2rem;
  background: ${colors.black}DD;
  position: relative;
  color: ${colors.white};
  font-weight: 200;

  & div {
    &:first-child {
      width: fit-content;
      background: ${colors.black};
      padding: 1rem 2rem;
      position: absolute;
      top: -30px;
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;

export default function About() {
  return (
    <AboutSection style={{ display: "grid", position: "relative" }} id="poveste">
      <BackgroundLayer>
        <div></div>
        <div></div>
      </BackgroundLayer>
      <Container
        style={{
          position: "absolute",
          top: 0,
          margin: "0 auto",
          alignSelf: "center",
          justifySelf: "center",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text style={{ width: "60%" }}>
          <div>DESIGN DIN SI CU PASIUNE</div>
          <div>
            Suntem o echipa de designeri de interior, peisagistica si urbanism
            motivati, in primul rand, de dezvoltarea unui produs final complet,
            fie ca e vorba de mobila sau amenajarea unui spatiu exterior, unic
            fiecarui utilizator in parte, determinat de personalitatea si
            nevoile acestuia. Suntem o echipa multidisciplinara cu
            background-uri variate, formata din oameni ce ataca o propunere pe
            toate laturile, dornici sa obtina potentialul maxim al fiecarui
            proiect. In egala masura, credem in nevoia de invatare continua si
            de adaptare la o lume in permanenta schimbare. Venim cu o experienta
            dobandita gradual in domeniul arhitecturii, urbanismului, dar in mod
            deosebit al proiectarii de mobila, in care ne-am implicat de la bun
            inceput in toate etapele, inclusiv in cele adiacente designului. Am
            vrut sa intelegem ce presupune atat domeniul vanzarilor in aceasta
            meserie, cat si industria de feronerie, de asemenea implicandu-ne
            manual in constructia mobilei. Un pricipiu de baza al filozofiei
            noastre este ca ne dorim sa cunoastem tot ceea ce constituie
            procesul de mobilare al unui spatiu. Astfel, va putem oferi un
            pachet de servicii complet, iar voi puteti lua o decizie informata
            catre un design ce va defineste.
          </div>
        </Text>
      </Container>
    </AboutSection>
  );
}
