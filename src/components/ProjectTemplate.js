import React from "react";
import {
  BgImage,
  DescriptionText,
  DivRowLeft,
  PrimaryButton,
  ProjectCont,
  ProjectDescription,
  SecundaryButton,
} from "../helpers/ProjectComponents";
import colors from "../helpers/Colors";

const ProjectTemplate = ({ title, description, imgDir }) => {
  return (
    <ProjectCont>
      <BgImage src={imgDir} />
      <ProjectDescription>
        <h3>{title}</h3>
        <DescriptionText textColor={colors.secundaryText}>
          {description}
        </DescriptionText>
        <DivRowLeft>
          <PrimaryButton>Ver proyecto completo</PrimaryButton>
          <SecundaryButton>Ver código</SecundaryButton>
        </DivRowLeft>
      </ProjectDescription>
    </ProjectCont>
  );
};

export default ProjectTemplate;
