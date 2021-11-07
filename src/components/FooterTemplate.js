import React from "react";
import {
  DefaultIcon,
  FooterCont,
  SmallIcon,
} from "../helpers/ProjectComponents";
import heart from "../assets/heart.svg";
import github from "../assets/icon-github.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter_squared.svg";
import ufo from "../assets/ufo.png";

const FooterTemplate = () => {
  return (
    <FooterCont>
      <DefaultIcon src={ufo} alt="Ufo" />
      <p>
        Hecho con{" "}
        <span>
          <SmallIcon src={heart} alt="Heart" />
        </span>{" "}
        de Daniel. Copyright 2021 - Todos los derechos reservados.
      </p>
      <div>
        <SmallIcon src={github} alt="GitHub icon" />
        <SmallIcon src={instagram} alt="Instagram icon" />
        <SmallIcon src={twitter} alt="Twitter icon" />
      </div>
    </FooterCont>
  );
};

export default FooterTemplate;
