import React, { useState, useRef, useEffect } from "react";
import { Container } from "../../GlobalStyles";
import { Button } from "../Main/Main.styles";
import { PriceSection } from "./Prices.styled";

const Prices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();

  const prices = [
    { room: "INCAPERE", price: 600 },
    { room: "GARSONIERA/STUDIO", price: 750 },
    { room: "APARTAMENT 2 CAMERE", price: 900 },
    { room: "APARTAMENT 3 CAMERE", price: 1000 },
    { room: "APARTAMENT 4 CAMERE", price: 1100 },
    { room: "CASA PARTER", price: 2000 },
    { room: "CASA PARTER + ETAJ", price: 2200 },
    { room: "CASA PARTER + ETAJ + MANSARDA", price: 2500 },
    { room: "FATADA CASA", price: "100 EURO/FATADA" },
    { room: "RANDARI", price: "60 EURO/RANDARE" },
    {
      room: "PLANURI TEHNICE P.T.H. (RELEVEU, SANITARE, PRIZE, ELECTRICE)",
      price: 100,
    },
    { room: "AMENAJARE CURTE", price: "4 EURO/MP" },
    {
      room: "PLANURI TEHNICE AMENAJARE CURTE (PLANTARE, ILUMINAT, CONSTRUCTII)",
      price: 900,
    },
    {
      room: "DEPLASARE LA LOCATIE (in afara BUCURESTI-ILFOV)",
      price: "1 EURO/KM",
    },
  ];

  const specialMentions = [
    "PRETURILE DE BAZA PENTRU APARTAMENTE SI CASE INCLUD:",
    "- O VIZITA LOCATIE;",
    "- PROIECT AMENAJARE 3D;",
    "- 2 MODIFICARI;",
    "- PREDARE - DEVIZ ACHIZITII, PREZENTARE GENERALA EXPLICATIVA SI PREZENTARE TIP FILMULET, FISE TEHNICE MOBILIER COMANDA, IMAGINI GENERALE, IMAGINI PT MOBILA COMANDA SI CONFIGURATII IKEA UNDE ESTE NEVOIE SI ORICE ALTA FORMA DE CONFIGURATII MOBILIER;",
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalOpen]);

  const handleClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <PriceSection className="prices__section">
      <Container
        display="flex"
        direction="column"
        gap="2rem"
        align="flex-start"
      >
        <div className="prices__title">PRETURI</div>
        <div className="prices__text">
          Pentru ca la noi totul e transparent, am ales sa punem toate costurile
          fixe la vedere. Am decis sa lucram per proiect, asa ca nu conteaza
          cati metri patrati are locuinta ta, pretul difera doar in functie de
          cate camere ai.
        </div>
        <Button
          main="true"
          onClick={handleClick}
          style={{ padding: "1rem", cursor: "pointer" }}
        >
          Vezi Preturile
        </Button>
      </Container>

      {modalOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Preturi</h2>
            <div className="modal-content">
              <table>
                <thead>
                  <tr>
                    <th>Serviciu</th>
                    <th>Pret</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((item, index) => {
                    console.log(typeof item.price);
                    return (
                      <tr key={index}>
                        <td>{item.room}</td>
                        <td>
                          {item.price}
                          {typeof item.price === "number" ? " EURO" : ""}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="special-mentions" style={{ padding: "2rem 0" }}>
                {specialMentions.map((mention, index) => (
                  <p
                    key={index}
                    style={{ fontWeight: index === 0 ? 800 : 300 }}
                  >
                    {mention}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </PriceSection>
  );
};

export default Prices;
