import React from "react";
import ReactDOM from "react-dom";
import Contact from "./components/Contact";
import FooterTemplate from "./components/FooterTemplate";
import HeaderMenu from "./components/HeaderMenu";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import { Fillimage, GlobalStyle } from "./helpers/ProjectComponents";
import reportWebVitals from "./reportWebVitals";
import fillimage from "./assets/fillimage.png";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HeaderMenu />
    <Welcome />
    <Projects />
    <Services />
    <Testimonials />
    <Fillimage>
      {/* <p>Hola</p> */}
      <img src={fillimage} alt="people looking at computers" />
    </Fillimage>
    <Contact />
    <FooterTemplate />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
