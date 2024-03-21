import React from "react";
import { LinksContainer } from "./Links.styles";

const navLinks = [
  { href: "#poveste", label: "POVESTE" },
  { href: "#proiecte", label: "PROIECTE" },
  { href: "#preturi", label: "PRETURI" },
  { href: "#contact", label: "CONTACT" },
];

export default function Links({ logoWidth, desktopLinks, setstyle, handleClick }) {
  return (
    <LinksContainer
      logowidth={`${logoWidth}px`}
      hidelinks={desktopLinks ? 0 : -1000}
      style={setstyle}
    >
      {navLinks.map(({ href, label }, index) => {
        return (
          <a onClick={handleClick} key={label} href={href} style={{ gridArea: `LINK${index + 1}` }}>
            {label}
          </a>
        );
      })}
    </LinksContainer>
  );
}
