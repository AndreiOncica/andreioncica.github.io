import styled from "styled-components";
import {colors} from '../../GlobalStyles'

export const LinksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "LINK1 LINK2 LOGO LINK3 LINK4";
  grid-template-columns: 1fr 1fr ${({ logowidth }) => logowidth} 1fr 1fr;
  transform: translateY(${({ hidelinks }) => hidelinks}%);
  transition: .2s ease-in-out;
  position: ${({position}) => position};
  background-color: ${colors.white};
  padding: 2rem;
  z-index: 100;

  & a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    font-weight: 300;
    transition: .2s ease-in-out;
    color: ${colors.black};

    &:hover {
      font-weight: 600;
      scale: 1.05;
    }
  }
`;


