import React from "react";
import {
  HeaderNav,
  HeaderDiv,
  PrimaryButton,
} from "../helpers/ProjectComponents";
import ufoIcon from "../assets/ufo.png";

const HeaderMenu = () => {
  return (
    <HeaderNav>
      <HeaderDiv>
        <img src={ufoIcon} alt="" />
        <h3>
          <a href="#hola">Hola</a>
        </h3>
        <h3>
          <a href="#proyectos">Proyectos</a>
        </h3>
        <h3>
          <a href="#testimonios">Testimonios</a>
        </h3>
        <h3>
          <a href="#contacto">Contacto</a>
        </h3>
      </HeaderDiv>
      <PrimaryButton>Descargar currículum</PrimaryButton>
    </HeaderNav>
  );
};

export default HeaderMenu;
