import React from "react";
import {
  ArrowButton,
  DivColNoWrap,
  DivRowNoWrap,
  MainServicesCont,
  ServicesCont,
} from "../helpers/ProjectComponents";

const Services = () => {
  return (
    <ServicesCont>
      <h2 id="servicios">Servicios</h2>
      <MainServicesCont>
        <div>
          <h3>Diseño</h3>
          <ul>
            <li>Experiencia de usuario</li>
            <li>Interfaz de usuario</li>
            <li>Aplicaciones web</li>
            <li>Prueba de concepto</li>
          </ul>
          <ArrowButton>Ver servicios de diseño</ArrowButton>
        </div>

        <div>
          <h3>Desarrollo</h3>
          <ul>
            <li>Aplicaciones móbiles</li>
            <li>Sitios web</li>
            <li>Aplicaciones web progresivas</li>
          </ul>
          <ArrowButton>Ver servicios de desarrollo</ArrowButton>
        </div>

        <div>
          <h3>Marca</h3>
          <ul>
            <li>Identidad de la marca</li>
            <li>Estrategia de marca</li>
          </ul>
          <ArrowButton>Ver servicios de marca</ArrowButton>
        </div>
      </MainServicesCont>
    </ServicesCont>
  );
};

export default Services;
