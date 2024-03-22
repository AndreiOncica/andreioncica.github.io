import React from "react";
import styled from 'styled-components'
import ContactForm from "./ContactForm";
import Info from "./Info";
import {Container} from '../../GlobalStyles'

const FooterContainer = styled.div`
    padding: 4rem 0;
`

export default function Footer({isDesktop}) {
  return (
    <FooterContainer id="contact">
      <Container display="flex" direction={isDesktop ? "row" : "column"} gap="3rem" justify="space-between" align="flex-start">
        <Info />
        <ContactForm isDesktop={isDesktop}/>
      </Container>
    </FooterContainer>
  );
}
