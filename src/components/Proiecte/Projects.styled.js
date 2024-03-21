import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const ProjectsSection = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  position: relative;
    
    .left__arrow {
        inset: 0 auto 0 2rem;
    }

    .right__arrow {
        inset: 0 2rem 0 auto;
    }

    .arrow__btn {
        background: ${colors.black}AA;
        padding: 1rem;
        position: absolute;
        top: 50%;
        z-index: 100;
        cursor: pointer;
    }
`;

export const ProjectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(22, 20%);
  position: relative;
  transition: .5s ease-in-out;
  transform: ${({translate}) => `translateX(${translate}px)`};  

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(11, 50%);
    grid-template-rows: 1fr 1fr;
  }
`;

export const Card = styled.div`
  /* width: 300px; */
  height: 400px;
  background-position: center;
  background-size: cover;
  cursor: pointer;

  &:hover {
    scale: 1.01;
    transition: 0.1s;
  }

  position: relative;

  & div {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    color: ${colors.white};
    height: 40px;
    display: flex;
    align-items: flex-start;
    max-width: calc(100% - 2rem);
  }

  
`;