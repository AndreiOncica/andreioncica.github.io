
import styled, { css } from "styled-components";
import { colors } from '../../GlobalStyles'

export const MainDiv = styled.section`
  padding: 4rem 0;
  background: ${colors.white};
  overflow: hidden;
  opacity: 0;
  transition: 2s;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

    .main__container {
        display: grid;
        gap: 2rem;
        grid-template-areas:
            '. IMG IMG' 
            '. IMG IMG' 
            'BTN1 IMG IMG' 
            'BTN2 IMG IMG';
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        position: relative;
        padding: 3rem 0;
    }

    .main__wrapper {
        position: absolute;
        width: calc(100% + 16px);
        display: grid;
        grid-template-columns: auto auto;
        background: transparent;
        padding: 1rem 0;
        top: 25%;
        z-index: 1;
        transform: translateX(-150%);
        transition: 2s;
    }

    .main__image {
        width: 100%;
        grid-area: IMG;
        box-shadow: 15px 15px 1px  ${colors.accent};
        opacity: .9;
        transform: translateX(150%);
        transition: 2s;
    }

    @media screen and (max-width: 768px) {
        .main__container {
            grid-template-areas: "IMG IMG" "IMG IMG" "BTN1 BTN2" ;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }

        .main__button {
            height: 50px;
            font-size: 14px !important;
        }
    }

`;

export const Button = styled.a`
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