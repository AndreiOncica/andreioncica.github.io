import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../GlobalStyles";
import cover1 from '../../assets/Gallery/Casa Voluntari/cover.jpg'
import cover2 from '../../assets/Gallery/2.CASA ORAS POPESTI LEORDENI/cover.jpg'
import cover3 from '../../assets/Gallery/3.PENTHOUSE ORAS CONSTANTA/cover.jpg'

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
    cover:
      "/src/assets/Gallery/4.HOL SI LIVING CARTIER BUCURESTII NOI/cover.jpg",
  },
  {
    name: "Clinica estetica - House of Beauty",
    link: import.meta.glob(
      "../../assets/Gallery/5.CLINICA ESTETICA - HOUSE OF BEAUTY/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/5.CLINICA ESTETICA - HOUSE OF BEAUTY/cover.jpg",
  },
  {
    name: "Bucatarie Soseaua Giurgiului",
    link: import.meta.glob(
      "../../assets/Gallery/7.BUCATARIE SOSEAUA GIURGIULUI/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/7.BUCATARIE SOSEAUA GIURGIULUI/cover.jpeg",
  },
  {
    name: "Apartament Giurgiu",
    link: import.meta.glob(
      "../../assets/Gallery/8.APARTAMENT ORAS GIURGIU/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/8.APARTAMENT ORAS GIURGIU/cover.jpeg",
  },
  {
    name: "Living casa Giurgiu",
    link: import.meta.glob(
      "../../assets/Gallery/9.LIVING CASA ORAS GIURGIU/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/9.LIVING CASA ORAS GIURGIU/cover.jpg",
  },
  {
    name: "Garsoniera Bulevardul Timisoara",
    link: import.meta.glob(
      "../../assets/Gallery/10.GARSONIERA BULEVARDUL TIMISIOARA/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/10.GARSONIERA BULEVARDUL TIMISIOARA/cover.jpg",
  },
  {
    name: "Apartament partial Mioveni",
    link: import.meta.glob(
      "../../assets/Gallery/11.APARTAMENT PARTIAL ORAS MIOVENI/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/11.APARTAMENT PARTIAL ORAS MIOVENI/cover.jpg",
  },
  {
    name: "Apartament partial Ploiesti",
    link: import.meta.glob(
      "../../assets/Gallery/12.APARTAMENT PARTIAL ORAS PLOIESTI/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/12.APARTAMENT PARTIAL ORAS PLOIESTI/cover.jpg",
  },
  {
    name: "Apartament Grozavesti",
    link: import.meta.glob(
      "../../assets/Gallery/13.APARTAMENT ZONA GROZAVESTI/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/13.APARTAMENT ZONA GROZAVESTI/cover.jpg",
  },
  {
    name: "Garsoniera Pipera",
    link: import.meta.glob(
      "../../assets/Gallery/14.GARSONIERA PIPERA/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/14.GARSONIERA PIPERA/cover.jpg",
  },
  {
    name: "Apartament partial Metalurgiei",
    link: import.meta.glob(
      "../../assets/Gallery/15.APARTAMENT PARTIAL ZONA METALURGIEI/*.{png,jpg,jpeg,svg}"
    ),
    cover:
      "/src/assets/Gallery/15.APARTAMENT PARTIAL ZONA METALURGIEI/cover.jpg",
  },
  {
    name: "Apartament Otopeni",
    link: import.meta.glob(
      "../../assets/Gallery/16.APARTAMENT ORAS OTOPENI/*.{png,jpg,jpeg,svg,heic}"
    ),
    cover: "/src/assets/Gallery/16.APARTAMENT ORAS OTOPENI/cover.heic",
  },
  {
    name: "Bucatarie verde",
    link: import.meta.glob(
      "../../assets/Gallery/17.BUCATARIE VERDE/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/17.BUCATARIE VERDE/cover.jpg",
  },
  {
    name: "Casa Strada Avionului",
    link: import.meta.glob(
      "../../assets/Gallery/18.RANDARI CASA STRADA AVIONULUI/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/18.RANDARI CASA STRADA AVIONULUI/cover.jpeg",
  },
  {
    name: "Restaurant Ponton Giurgiu",
    link: import.meta.glob(
      "../../assets/Gallery/19.RANDARI RESTAURANTA PONTON GIURGIU/*.{png,jpg,jpeg,svg}"
    ),
    cover:
      "/src/assets/Gallery/19.RANDARI RESTAURANTA PONTON GIURGIU/cover.jpeg",
  },
  {
    name: "Bucatarie Strada Witting",
    link: import.meta.glob(
      "../../assets/Gallery/20.RANDARI BUCATARIE STRADA WITTING/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/20.RANDARI BUCATARIE STRADA WITTING/cover.jpeg",
  },
  {
    name: "Moodboards Artist Loft",
    link: import.meta.glob(
      "../../assets/Gallery/21.MOODBOARDS ARTIST LOFT/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/21.MOODBOARDS ARTIST LOFT/cover.jpg",
  },
  {
    name: "Casa Pipera",
    link: import.meta.glob(
      "../../assets/Gallery/22.CASA PIPERA/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/22.CASA PIPERA/cover.jpeg",
  },
  {
    name: "Apartament Politehnica",
    link: import.meta.glob(
      "../../assets/Gallery/23.APARATMENT POLITEHNICA/*.{png,jpg,jpeg,svg}"
    ),
    cover: "/src/assets/Gallery/23.APARATMENT POLITEHNICA/cover.jpeg",
  },
];

const GalleryContainer = styled.section`
  display: none;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background: ${colors.white};
  padding: 4rem 2rem;
  z-index: 1000;
`;

const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & .close__btn {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  overflow-y: scroll;

  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    cursor: pointer;
  }
`;

// import React, { useState, useEffect } from "react";
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
            display: 'flex',
            width: "100%",
            justifyContent:'flex-start',
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
