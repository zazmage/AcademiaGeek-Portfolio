import React from "react";
import {
  DefaultIcon,
  DescriptionText,
  DivColNoWrap,
  DivRowNoWrap,
  MainTitle,
  Portrait,
  WelcomeCont,
} from "../helpers/ProjectComponents";
import arrowDown from "../assets/arrow-down.svg";
import daniel from "../assets/daniel.jpeg";
import colors from "../helpers/Colors";

const Welcome = () => {
  return (
    <WelcomeCont>
      <DivRowNoWrap>
        <DivColNoWrap>
          <MainTitle id="hola">
            ¡Hola a todos!
            <br />
            Soy Daniel Castaño
          </MainTitle>
          <DescriptionText textColor={colors.secundaryText}>
            Desarrollador apasionado por la ciencia ficción.
          </DescriptionText>
          <a href="#proyectos">
            <DefaultIcon src={arrowDown} alt="Arrow down" />
          </a>
        </DivColNoWrap>
        <Portrait>
          <img src={daniel} alt="Daniel" />
        </Portrait>
      </DivRowNoWrap>
    </WelcomeCont>
  );
};

export default Welcome;
