import React from "react";
import styled from "styled-components";
import { colors, Container } from "../../GlobalStyles";
import BackgroundMobila from "../../assets/Mobila.jpeg";

const FurnitureSection = styled.section`
  width: 100%;
  height: 870px;
  position: relative;
`;

const Background = styled.div`
  background-image: url(${BackgroundMobila});
  background-color: ${colors.black};
  background-blend-mode: hard-light;
  background-position: center;
  background-size: cover;
  transform: scaleX(-1);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Text = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  gap: 2rem;
  padding: 3rem;
  background: ${colors.black}DD;
  color: ${colors.white};

  & div {
    font-weight: 200;
    &:first-child {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;

export default function Mobila() {
  return (
    <FurnitureSection>
      <Background></Background>
      <Container
        display="flex"
        justify="flex-start"
        align="center"
        height="100%"
      >
        <Text>
          <div>MOBILA LA COMANDA</div>
          <div>
            Mobilierul facut la comanda este pentru oameni cu o imaginatie
            bogata care vor sa o transforme in realitate. De asemenea, aceasta
            reprezinta o optiune avantajoasa in contextul in care se doreste ca
            rezultatul final sa fie determinat aproape complet de spatiul
            incadrat, fara lufturi inestetice (spatii goale ramase intre perete
            si mobila), in acelasi timp mascand orice nu se doreste sa fie la
            vedere. Mobila pret-a-porter este alternativa ideala pentru
            persoanele practice care tind catre un echilibru metodic intre timp,
            functiune si estetica. Cel mai mare avantaj ce il constituie aceasta
            modalitate de echipare a spatiului consta in faptul ca poti
            vizualiza si testa materialele si finisajele pana la rezultatul
            dorit.
          </div>
        </Text>
      </Container>
    </FurnitureSection>
  );
}
