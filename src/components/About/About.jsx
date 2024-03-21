import React from "react";
import { Container } from "../../GlobalStyles";
import { AboutSection, BackgroundLayer, Text } from "./About.styles";

export default function About({viewportWidth}) {
  return (
    <AboutSection id="poveste">
      <BackgroundLayer>
        <div></div>
        <div></div>
      </BackgroundLayer>
      <Container className="about__container">
        <Text>
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
