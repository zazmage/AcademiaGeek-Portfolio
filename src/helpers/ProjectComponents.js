import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./Colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box; 
   scroll-behavior: smooth;
  };
  body{
    /* background-color: ${colors.secundary};
    color: ${colors.primaryText};
    margin: 0 72px; */
    padding: 0;
  }
`;

export const HeaderNav = styled.header`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  background-color: ${colors.secundary};
  color: ${colors.primaryText};
  align-items: center;
  padding-left: 72px;
  padding-right: 72px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: left;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 50%;
  & img {
    width: 50px;
    margin-right: 40px;
  }
  & h3 {
    margin-right: 40px;
  }
  & a {
    text-decoration: none;
    color: ${colors.primaryText};
  }
  & a:visited {
    color: ${colors.primaryText};
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  border: none;
  width: 206px;
  height: 48px;
  color: ${colors.primaryText};
  cursor: pointer;
`;

export const SecundaryButton = styled.button`
  background-color: ${colors.secundary};
  border: 2px solid ${colors.primary};
  width: 128px;
  height: 48px;
  color: ${colors.primary};
  cursor: pointer;
`;

export const DivRowNoWrap = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-left: 72px;
  padding-right: 72px;
  margin-bottom: 30px;
`;

export const DivRowLeft = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding-left: 72px;
  padding-right: 72px;
  & button {
    margin-right: 20px;
    font-size: 16px;
  }
`;

export const DivColNoWrap = styled.div`
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-evenly;
  height: 100%;
`;

export const Portrait = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 462px;
  overflow: hidden;
  & img {
    width: 129%;
  }
`;

export const MainTitle = styled.h1`
  margin: 0;
  margin-bottom: 48px;
  font-size: 64px;
  font-weight: 700;
`;

export const NormalTitle = styled.h2`
  margin: 0;
  font-size: 48px;
  font-weight: 700;
`;

export const DefaultIcon = styled.img`
  margin-top: 30px;
  width: 56px;
  cursor: pointer;
`;

export const WelcomeCont = styled.div`
  color: ${colors.primaryText};
  width: 100%;
  padding-top: 72px;
  padding-bottom: 72px;
  background-color: ${colors.secundary};
`;

export const DescriptionText = styled.p.attrs((props) => ({
  textColor: props.textColor,
}))`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.textColor};
`;

export const ProjectCont = styled.div`
  position: relative;
  width: 600px;
  height: 465px;
  margin-bottom: 150px;
`;

export const BgImage = styled.img`
  width: 100%;
`;

export const WhiteContainer = styled.div`
  padding-bottom: 36px;
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  padding-left: 20px;
  position: absolute;
  z-index: 2;
  top: 20%;
  left: -20px;
  color: ${colors.primaryText};
  background-color: ${colors.secundary};
  width: 511px;
  height: 316px;
`;

export const MainProjectCont = styled.div`
  margin: 0 72px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const CentralButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    background-color: ${colors.primaryText};
    width: 206px;
    height: 48px;
    color: black;
    border: solid 2px black;
    cursor: pointer;
  }
`;

export const ServicesCont = styled.div`
  padding-top: 30px;
  padding-bottom: 72px;
  padding-right: 72px;
  padding-left: 72px;
  background: linear-gradient(-45deg, #ea5455 0%, #feb692 100%);
  width: 100%;
  & h2 {
    font-size: 48px;
    font-weight: 700;
  }
  & h3 {
    font-size: 32px;
    font-weight: 400px;
  }
  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  & li {
    font-size: 24px;
    font-weight: 400px;
    margin-bottom: 24px;
  }
  & div {
    margin-right: 20px;
  }
`;

export const ArrowButton = styled.button`
  background-color: ${colors.secundary};
  color: ${colors.primary};
  border: none;
  width: 250px;
  height: 48px;
  cursor: pointer;

  & img {
    width: 24px;
  }
`;

export const MainServicesCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const TestimonyCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: nowrap column;
  width: 30%;
  padding-right: 10px;
  margin-right: 10px;
`;

export const MainTestimonyCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap row;
  width: 100%;
  /* padding-right: 72px;
  padding-left: 72px; */
`;

export const TestimonyName = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
  & img {
    width: 48px;
    height: 48px;
    margin-right: 8px;
  }
  & h3 {
    font-size: 20px;
    font-weight: 700;
    color: ${colors.primary};
  }
  & h2 {
    font-size: 48px;
    font-weight: 700;
  }
`;

export const BlackContainer = styled.div`
  background-color: ${colors.secundary};
  padding-left: 72px;
  padding-right: 72px;
  color: ${colors.primaryText};
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Fillimage = styled.div`
  margin: 0;
  overflow: hidden;
  background-color: red;
  width: 100%;
  height: 700px;
  & img {
    height: 100%;
    width: 100%;
  }
`;

export const GradientCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: linear-gradient(-45deg, #ea5455 0%, #feb692 100%);
  padding: 72px 72px;
`;

export const BlackFormCont = styled.div`
  background-color: ${colors.secundary};
  width: 546px;
  padding: 48px;
  & h3 {
    color: ${colors.primaryText};
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    margin-top: 0;
  }
  & p {
    margin-top: 0;
    margin-bottom: 32px;
  }
  & input {
    width: 100%;
    height: 64px;
    padding: 16px 12px;
    margin-bottom: 16px;
  }
  & textarea {
    margin-bottom: 16px;
    width: 100%;
    height: 64px;
    padding: 16px 12px;
  }
  & button {
    width: 100%;
  }
`;

export const FooterCont = styled.div`
  background-color: ${colors.secundary};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  color: ${colors.primaryText};
  & div {
    width: 144px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
  & img {
    margin: 0;
  }
`;

export const SmallIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
