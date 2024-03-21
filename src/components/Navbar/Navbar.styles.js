import styled from "styled-components";
import { colors } from '../../GlobalStyles'

export const Nav = styled.nav`
  height: ${({ height }) => height}px;
  transition: .2s ease-in-out;
  background-color: ${colors.white};
  position: relative;
  z-index: 200;
`
export const navContainerStyles = {
  position: 'relative',
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: colors.white
};


export const Logo = styled.img`
  width: ${({ width }) => width};
  position: absolute;
  inset: ${({ position }) => position};
  margin: auto;
  transition: .2s ease-in-out;
  padding: 1rem 0;
  z-index: 201;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: ${colors.black}CC;
  inset: 0;
  margin: auto;
`