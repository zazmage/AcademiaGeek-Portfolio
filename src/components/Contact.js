import React from "react";
import {
  BlackFormCont,
  DescriptionText,
  GradientCont,
  PrimaryButton,
} from "../helpers/ProjectComponents";
import colors from "../helpers/Colors";

const Contact = () => {
  return (
    <GradientCont>
      <BlackFormCont>
        <h3 id="contacto">Contacto</h3>
        <DescriptionText textColor={colors.secundaryText}>
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </DescriptionText>
        <form>
          <input type="text" name="" id="" placeholder="Nombre completo" />
          <input type="text" name="" id="" placeholder="Correo electrónico" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
          ></textarea>
          <PrimaryButton>Enviar mensaje</PrimaryButton>
        </form>
      </BlackFormCont>
    </GradientCont>
  );
};

export default Contact;
