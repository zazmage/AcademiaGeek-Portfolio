import React from "react";
import {
  DivRowLeft,
  TestimonyCont,
  TestimonyName,
} from "../helpers/ProjectComponents";

const TestimonyTemplate = ({ imgUrl, name, description }) => {
  return (
    <TestimonyCont>
      <TestimonyName>
        <img src={imgUrl} alt="" />
        <h3>{name}</h3>
      </TestimonyName>
      <p>{description}</p>
    </TestimonyCont>
  );
};

export default TestimonyTemplate;
