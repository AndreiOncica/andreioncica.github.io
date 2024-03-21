import styled from 'styled-components'
import {colors} from '../../GlobalStyles'
import BackgroundMobila from "../../assets/Mobila.jpeg";

export const FurnitureSection = styled.section`
  width: 100%;
  height: 870px;
  position: relative;

  @media screen and (max-width: 1000px) {
    height: 600px;
  }
`;

export const Background = styled.div`
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

export const Text = styled.div`
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

  @media screen and (max-width: 1000px) {
    position: absolute;
    width: 100%;
    left: 0;
    max-height: 100%;
  }
`;