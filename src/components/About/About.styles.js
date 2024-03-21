import styled from 'styled-components'
import { colors } from '../../GlobalStyles'
import AboutImg from "../../assets/AboutImg.jpg";

export const AboutSection = styled.section`
  background: ${colors.black};
  display: grid;
  position: relative;

  .about__container {
    position: absolute;
    top: 0;
    margin: 0 auto;
    align-self: center;
    justify-self: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:100%;
    
    /* padding: 2rem 4rem; */
  }

  @media screen and (max-width: 1010px) {
    .about__container {
        width: 100%;
    }
    
  }
`;

export const BackgroundLayer = styled.div`
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
      background-image: url(${AboutImg});
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

  @media screen and (max-width: 1010px) {
    flex-direction: column;
    height: 700px;
    background-color: ${colors.black};
    background-image: url(${AboutImg});
    background-blend-mode: lighten;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 700px) {
    height: 900px;
  }

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 3px solid ${colors.white};
  padding: 2rem;
  background: ${colors.black}DD;
  position: relative;
  color: ${colors.white};
  font-weight: 200;
  width: 60%;

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

  @media screen and (max-width: 1010px) {
    width: 100%;
    border: none;
    padding: 4rem;
    /* gap: 0; */
    max-height: 100%;

    & div {
        &:first-child {
            background: transparent;
            position: relative;
            padding: 0px;
            top: 0;
        }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem;
  }
`;