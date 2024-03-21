import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../GlobalStyles";
import cover1 from "../../assets/Gallery/Casa Voluntari/cover.jpg";
import cover2 from "../../assets/Gallery/2.CASA ORAS POPESTI LEORDENI/cover.jpg";
import cover3 from "../../assets/Gallery/3.PENTHOUSE ORAS CONSTANTA/cover.jpg";
import cover4 from "../../assets/Gallery/4.HOL SI LIVING CARTIER BUCURESTII NOI/cover.jpg";
import cover5 from "../../assets/Gallery/5.CLINICA ESTETICA - HOUSE OF BEAUTY/cover.jpg";
import cover6 from "../../assets/Gallery/7.BUCATARIE SOSEAUA GIURGIULUI/cover.jpg";

import cover7 from "../../assets/Gallery/8.APARTAMENT ORAS GIURGIU/cover.jpg";
import cover8 from "../../assets/Gallery/9.LIVING CASA ORAS GIURGIU/cover.jpg";
import cover9 from "../../assets/Gallery/10.GARSONIERA BULEVARDUL TIMISIOARA/cover.jpg";
import cover10 from "../../assets/Gallery/11.APARTAMENT PARTIAL ORAS MIOVENI/cover.jpg";
import cover11 from "../../assets/Gallery/12.APARTAMENT PARTIAL ORAS PLOIESTI/cover.jpg";
import cover12 from "../../assets/Gallery/13.APARTAMENT ZONA GROZAVESTI/cover.jpg";
import cover13 from "../../assets/Gallery/14.GARSONIERA PIPERA/cover.jpg";
import cover14 from "../../assets/Gallery/15.APARTAMENT PARTIAL ZONA METALURGIEI/cover.jpg";
import cover15 from "../../assets/Gallery/16.APARTAMENT ORAS OTOPENI/cover.jpg";
import cover16 from "../../assets/Gallery/17.BUCATARIE VERDE/cover.jpg";
import cover17 from "../../assets/Gallery/18.RANDARI CASA STRADA AVIONULUI/cover.jpeg";
import cover18 from "../../assets/Gallery/19.RANDARI RESTAURANTA PONTON GIURGIU/cover.jpeg";
import cover19 from "../../assets/Gallery/20.RANDARI BUCATARIE STRADA WITTING/cover.jpeg";
import cover20 from "../../assets/Gallery/21.MOODBOARDS ARTIST LOFT/cover.jpg";
import cover21 from "../../assets/Gallery/22.CASA PIPERA/cover.jpeg";
import cover22 from "../../assets/Gallery/23.APARATMENT POLITEHNICA/cover.jpeg";

export const gallery = [
  {
    name: "Casa Voluntari",
    link: import.meta.glob(
      "../../assets/Gallery/Casa Voluntari/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover1,
  },
  {
    name: "Casa Popesti Leordeni",
    link: import.meta.glob(
      "../../assets/Gallery/2.CASA ORAS POPESTI LEORDENI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover2,
  },
  {
    name: "Penthouse Constanta",
    link: import.meta.glob(
      "../../assets/Gallery/3.PENTHOUSE ORAS CONSTANTA/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover3,
  },
  {
    name: "Hol si living Bucurestii Noi",
    link: import.meta.glob(
      "../../assets/Gallery/4.HOL SI LIVING CARTIER BUCURESTII NOI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover4,
  },
  {
    name: "Clinica estetica - House of Beauty",
    link: import.meta.glob(
      "../../assets/Gallery/5.CLINICA ESTETICA - HOUSE OF BEAUTY/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover5,
  },
  {
    name: "Bucatarie Soseaua Giurgiului",
    link: import.meta.glob(
      "../../assets/Gallery/7.BUCATARIE SOSEAUA GIURGIULUI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover6,
  },
  {
    name: "Apartament Giurgiu",
    link: import.meta.glob(
      "../../assets/Gallery/8.APARTAMENT ORAS GIURGIU/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover7,
  },
  {
    name: "Living casa Giurgiu",
    link: import.meta.glob(
      "../../assets/Gallery/9.LIVING CASA ORAS GIURGIU/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover8,
  },
  {
    name: "Garsoniera Bulevardul Timisoara",
    link: import.meta.glob(
      "../../assets/Gallery/10.GARSONIERA BULEVARDUL TIMISIOARA/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover9,
  },
  {
    name: "Apartament partial Mioveni",
    link: import.meta.glob(
      "../../assets/Gallery/11.APARTAMENT PARTIAL ORAS MIOVENI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover10,
  },
  {
    name: "Apartament partial Ploiesti",
    link: import.meta.glob(
      "../../assets/Gallery/12.APARTAMENT PARTIAL ORAS PLOIESTI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover11,
  },
  {
    name: "Apartament Grozavesti",
    link: import.meta.glob(
      "../../assets/Gallery/13.APARTAMENT ZONA GROZAVESTI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover12,
  },
  {
    name: "Garsoniera Pipera",
    link: import.meta.glob(
      "../../assets/Gallery/14.GARSONIERA PIPERA/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover13,
  },
  {
    name: "Apartament partial Metalurgiei",
    link: import.meta.glob(
      "../../assets/Gallery/15.APARTAMENT PARTIAL ZONA METALURGIEI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover14,
  },
  {
    name: "Apartament Otopeni",
    link: import.meta.glob(
      "../../assets/Gallery/16.APARTAMENT ORAS OTOPENI/*.{png,jpg,jpeg,svg,heic}"
    ),
    cover: cover15,
  },
  {
    name: "Bucatarie verde",
    link: import.meta.glob(
      "../../assets/Gallery/17.BUCATARIE VERDE/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover16,
  },
  {
    name: "Casa Strada Avionului",
    link: import.meta.glob(
      "../../assets/Gallery/18.RANDARI CASA STRADA AVIONULUI/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover17,
  },
  {
    name: "Restaurant Ponton Giurgiu",
    link: import.meta.glob(
      "../../assets/Gallery/19.RANDARI RESTAURANTA PONTON GIURGIU/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover18,
  },
  {
    name: "Bucatarie Strada Witting",
    link: import.meta.glob(
      "../../assets/Gallery/20.RANDARI BUCATARIE STRADA WITTING/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover19,
  },
  {
    name: "Moodboards Artist Loft",
    link: import.meta.glob(
      "../../assets/Gallery/21.MOODBOARDS ARTIST LOFT/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover20,
  },
  {
    name: "Casa Pipera",
    link: import.meta.glob(
      "../../assets/Gallery/22.CASA PIPERA/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover21,
  },
  {
    name: "Apartament Politehnica",
    link: import.meta.glob(
      "../../assets/Gallery/23.APARATMENT POLITEHNICA/*.{png,jpg,jpeg,svg}"
    ),
    cover: cover22,
  },
];


import {GalleryContainer, TopPart, Wrapper} from './Gallery.styled'
import Modal from "react-modal";

Modal.setAppElement("#root"); // replace '#root' with the id of your app's root element

export default function Gallery({ projectName, toggleShow, openState }) {
  const [images, setImages] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const importAll = async () => {
      const project = gallery.find((p) => p.name === projectName);
      const images = project ? project.link : {};
      const imagesModules = await Promise.all(
        Object.entries(images).map(async ([path, importer]) => {
          const module = await importer();
          return [path, module.default];
        })
      );
      setImages(Object.fromEntries(imagesModules));
    };
    importAll();
  }, [projectName]);

  const openModal = (url) => {
    setSelectedImage(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <GalleryContainer style={{ display: toggleShow ? "flex" : "none" }}>
      <TopPart>
        <div>{projectName}</div>
        <div onClick={openState} className="close__btn">
          X
        </div>
      </TopPart>
      <Wrapper>
        {Object.entries(images).map(([path, url]) => (
          <img key={path} src={url} alt={path} onClick={() => openModal(url)} />
        ))}
      </Wrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          overlay: {
            zIndex: 1000,
          },
        }}
      >
        <img
          src={selectedImage}
          style={{ maxWidth: "90%", maxHeight: "80%", margin: "0 auto" }}
          alt="Selected"
        />
        <Wrapper
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            padding: "1rem",
            overflowX: "scroll",
            height: "100%",
            scrollbarWidth: "thin",
            scrollbarColor: `${colors.white} transparent`,
          }}
        >
          {Object.entries(images).map(([path, url]) => (
            <img
              key={path}
              src={url}
              alt={path}
              onClick={() => openModal(url)}
              style={{ height: "100px", width: "100px" }}
            />
          ))}
        </Wrapper>
      </Modal>
    </GalleryContainer>
  );
}
