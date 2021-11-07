import React, { useState, useEffect } from "react";
import TestimonyTemplate from "./TestimonyTemplate";
import testimonliasDf from "../databases/testimonials.json";
import {
  BlackContainer,
  MainTestimonyCont,
} from "../helpers/ProjectComponents";

const Testimonials = () => {
  const [listTestimonials, setListTestimonials] = useState(null);
  useEffect(() => {
    setListTestimonials(testimonliasDf);
  }, [listTestimonials]);
  return (
    <BlackContainer>
      <h2 id="testimonios">Testimonios</h2>
      <MainTestimonyCont>
        {listTestimonials === null ? (
          <p>Cargando...</p>
        ) : (
          listTestimonials.map((el) => (
            <TestimonyTemplate
              key={el.id}
              name={el.name}
              description={el.description}
              imgUrl={el.imgUrl}
            />
          ))
        )}
      </MainTestimonyCont>
    </BlackContainer>
  );
};

export default Testimonials;
