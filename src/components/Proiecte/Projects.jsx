import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { colors, Container } from "../../GlobalStyles";
import Gallery, { gallery } from "./Gallery";

const ProjectsSection = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  position: relative;
`;

const ProjectCards = styled.div`
  display: grid;
  grid-template-columns: repeat(22, 20%);
  position: relative;
`;

const Card = styled.div`
  /* width: 300px; */
  height: 400px;
  background-position: center;
  background-color: ${colors.black}44;
  background-blend-mode: soft-light;
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
  }
`;

export default function Projects() {
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideProjects, setSlideProjects] = useState(0);
  const cardRef = useRef(null);
  const maxThreshold = -(gallery.length - 5) * 300;

  

  function toggleShow(projectName) {
    setSelectedProject(projectName);
    setOpenGallery((prevState) => !prevState);
  }

  function nextProjects() {
    setSlideProjects((prevProjects) => {
      const slideAmount = cardRef.current ? cardRef.current.clientWidth * 4 : 900;
      if (prevProjects === maxThreshold) {
        return 0;
      } else {
        return prevProjects - slideAmount;
      }
    });
  }

  function prevProjects() {
    setSlideProjects((prevProjects) => {
      const slideAmount = cardRef.current ? cardRef.current.clientWidth * 4 : 900;
      if (prevProjects === maxThreshold) {
        return 0;
      } else {
        return prevProjects + slideAmount;
      }
    });
  }

  return (
    <ProjectsSection id="proiecte">
      <Container>
        <div style={{ fontSize: "1.5rem" }}>PROIECTE</div>
      </Container>
      <FontAwesomeIcon
        onClick={prevProjects}
        icon={faAngleLeft}
        color="white"
        size="2x"
        style={{
          background: `${colors.black}AA`,
          padding: "1rem",
          position: "absolute",
          inset: "0 auto 0 2rem",
          top: "50%",
          zIndex: 100,
          cursor: "pointer",
        }}
      />
      <ProjectCards
        style={{
          transition: ".2s",
          transform: `translateX(${slideProjects}px)`,
        }}
      >
        {gallery.map((project) => {
          return (
            <Card
              ref={cardRef}
              onClick={() => toggleShow(project.name)}
              key={project.name}
              style={{ backgroundImage: `url('${project.cover}')` }}
            >
              <div>{project.name}</div>
            </Card>
          );
        })}
      </ProjectCards>
      <FontAwesomeIcon
        onClick={nextProjects}
        icon={faAngleRight}
        color="white"
        size="2x"
        style={{
          background: `${colors.black}AA`,
          padding: "1rem",
          position: "absolute",
          inset: "0 2rem 0 auto",
          top: "50%",
          cursor: "pointer",
        }}
      />
      {openGallery && (
        <Gallery
          toggleShow={() => toggleShow(null)}
          projectName={selectedProject}
          openState={toggleShow}
        />
      )}
    </ProjectsSection>
  );
}
