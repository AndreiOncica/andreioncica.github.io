import React, { useRef, useEffect, useState } from "react";
import { Nav, navContainerStyles, Logo, Line } from "./Navbar.styles";
import { Container } from "../../GlobalStyles";
import Links from "./Links";
import LogoImg from "../../assets/Logo.png";
import HamburgerBtn from "./HamburgerBtn";

export default function Navbar({ isDesktop }) {
  const LogoRef = useRef(null);
  const [getLogoWidth, setGetLogoWidth] = useState(null);
  const [toggleBtn, setToggleBtn] = useState(false);

  function handleClick() {
    setToggleBtn((prevState) => !prevState);
  }

  useEffect(() => {
    setGetLogoWidth(LogoRef.current.clientWidth);
  }, []);

  const mobileStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    transform: toggleBtn ? "translateY(150px)" : "translateY(-1000px)",
  };

  return (
    <Nav height={isDesktop ? 150 : 100}>
      <Line></Line>
      <Container style={navContainerStyles}>
        {isDesktop ? (
          <Links logoWidth={getLogoWidth} desktopLinks={isDesktop} />
        ) : (
          <Links
            logoWidth={getLogoWidth}
            handleClick={handleClick}
            desktopLinks={!isDesktop}
            setstyle={mobileStyles}
          />
        )}
        <Logo
          src={LogoImg}
          alt="First Concept Logo"
          ref={LogoRef}
          position={isDesktop ? "auto" : "auto auto auto 2rem"}
          width={isDesktop ? 270 : 170}
        />
        <HamburgerBtn
          handleClick={handleClick}
          toggleBtn={toggleBtn}
          hideButton={isDesktop}
        />
      </Container>
    </Nav>
  );
}
