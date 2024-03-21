import React, { useState } from "react";
import { Button, Bar } from "./HamburgerBtn.styled";

export default function HamburgerBtn({ hideButton, handleClick, toggleBtn }) {
  return (
    <Button onClick={handleClick} hidebutton={hideButton ? -500 : 0}>
      <Bar
        style={{
          transform: `rotateZ(${toggleBtn ? 45 : 0}deg) translate(${
            toggleBtn ? "5px, 5px" : 0
          })`,
        }}
      ></Bar>
      <Bar style={{ opacity: toggleBtn ? 0 : 1 }}></Bar>
      <Bar
        style={{
          transform: `rotateZ(${toggleBtn ? -45 : 0}deg) translate(${
            toggleBtn ? "6px, -6px" : 0
          }`,
        }}
      ></Bar>
    </Button>
  );
}
