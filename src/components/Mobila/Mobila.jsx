import React from "react";
import { Container } from "../../GlobalStyles";
import {FurnitureSection, Background, Text} from './Mobila.styled'



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
