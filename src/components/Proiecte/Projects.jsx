import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { colors, Container } from "../../GlobalStyles";
import { ProjectsSection, ProjectCards, Card } from "./Projects.styled";
import Gallery, { gallery } from "./Gallery";

export default function Projects({ isDesktop }) {
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideProjects, setSlideProjects] = useState(0);
  const cardRef = useRef(null);

  const [cardsPerRow, setCardsPerRow] = useState(undefined);

  useEffect(() => {
    setCardsPerRow(isDesktop ? 5 : 2);
  }, [isDesktop]);

  const scrollValue = cardsPerRow - 1;

  function toggleShow(projectName) {
    setSelectedProject(projectName);
    setOpenGallery((prevState) => !prevState);
  }

  function nextProjects() {
    setSlideProjects((prevProjects) => {
      if (isDesktop) {
        if (prevProjects === -16) {
          return -17;
        } else if (prevProjects === -17) {
          return 0;
        }
        return prevProjects - scrollValue;
      } else {
        if (prevProjects === -9) {
          return 0;
        }
        return prevProjects - scrollValue;
      }
    });
    console.log(slideProjects);
  }

  function prevProjects() {
    setSlideProjects((prevProjects) => {
      if (isDesktop) {
        if (prevProjects === 0) {
          return -17;
        } else if (prevProjects === -1) {
          return 0;
        }
        return prevProjects + scrollValue;
      } else {
        if (prevProjects === 0) {
          return -9;
        }
        return prevProjects + scrollValue;
      }
    });
  }

  function rendercards() {
    return gallery.map((project) => {
      return (
        <Card
          ref={cardRef}
          onClick={() => toggleShow(project.name)}
          key={project.name}
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, transparent,  #000000AE), url('${project.cover}')`,
          }}
        >
          <div>{project.name}</div>
        </Card>
      );
    });
  }

  return (
    <ProjectsSection id="proiecte">
      <Container>
        <div style={{ fontSize: "1.5rem" }}>PROIECTE</div>
      </Container>
      <FontAwesomeIcon
        className="arrow__btn left__arrow"
        onClick={prevProjects}
        icon={faAngleLeft}
        color="white"
        size="2x"
      />
      <ProjectCards
        translate={
          slideProjects * (cardRef.current ? cardRef.current.clientWidth : 0)
        }
      >
        {rendercards()}
      </ProjectCards>
      <FontAwesomeIcon
        className="arrow__btn right__arrow"
        onClick={nextProjects}
        icon={faAngleRight}
        color="white"
        size="2x"
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
