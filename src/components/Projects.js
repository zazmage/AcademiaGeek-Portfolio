import React, { useState, useEffect } from "react";
import {
  CentralButton,
  DescriptionText,
  DivRowNoWrap,
  MainProjectCont,
  NormalTitle,
  WhiteContainer,
} from "../helpers/ProjectComponents";
import ProjectTemplate from "./ProjectTemplate";
import colors from "../helpers/Colors";
import projectsDf from "../databases/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    setProjects(projectsDf);
  }, [projects]);
  return (
    <WhiteContainer>
      <DivRowNoWrap>
        <NormalTitle id="proyectos">
          Parece magia, funciona con código.
        </NormalTitle>
        <DescriptionText textColor={colors.secundaryText}>
          A lo largo de mi carrera como Frontend, he tenido el privilegio de
          trabajar en proyectos retadores e increíbles.
        </DescriptionText>
      </DivRowNoWrap>
      <MainProjectCont>
        {projects === null ? (
          <p>Cargando...</p>
        ) : (
          projects.map((el) => (
            <ProjectTemplate
              key={el.id}
              title={el.title}
              description={el.description}
              imgDir={el.imgUrl}
            />
          ))
        )}
      </MainProjectCont>
      <CentralButton>
        <button>Ver más proyectos</button>
      </CentralButton>
    </WhiteContainer>
  );
};

export default Projects;
