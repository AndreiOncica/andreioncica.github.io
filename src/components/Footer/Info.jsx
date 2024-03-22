import React from "react";
import styled from "styled-components";
import PhoneImg from "./icons/phone.png";
import EmailImg from "./icons/email.png";
import LocationImg from "./icons/location.png";

const infoData = [
  {
    name: "0748 931 969",
    icon: PhoneImg,
    link: "tel:0748 931 969",
  },
  {
    name: "contact@firstconcept.ro",
    icon: EmailImg,
    link: "mailto:contact@firstconcept.ro",
  },
  {
    name: "STRADA GRIGORE MANOLESCU 7A, ETAJ 3, BIROU 305",
    icon: LocationImg,
    link: "https://www.google.com/maps/place/First+Concept/@44.4138238,26.1039946,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1ff2602720ca5:0x7a57b0bc1d205eaf!8m2!3d44.41382!4d26.1065695!16s%2Fg%2F11s02hknmf?hl=en&entry=ttu",
  },
];

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  max-width: 300px;

  & img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    align-self: flex-start;
  }

  & div {
    font-weight: 600;
  }
`;

export default function Info() {
  return (
    <InfoSection>
      {infoData.map(({ name, icon, link }) => {
        return (
          <ContactCard key={name} href={link}>
            <img src={icon} alt="" />
            <div>{name}</div>
          </ContactCard>
        );
      })}
    </InfoSection>
  );
}
