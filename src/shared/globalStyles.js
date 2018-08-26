import { injectGlobal } from "styled-components";
import {FuturaStdMediumTtf, FuturaStdMediumWoff, FuturaStdBookTff, FuturaStdBookWoff} from "../components/fonts";

export default injectGlobal`
  @font-face {
    font-family: "FuturaBook";
    font-style: normal;
    font-weight: normal;
    src: local("FuturaBook"), local("FuturaBook"), url(${FuturaStdBookTff}) format("ttf"), url(${FuturaStdBookWoff}) format("woff");
  }
  @font-face {
    font-family: "Futura";
    font-style: normal;
    font-weight: normal;
    src: local("Futura"), local("Futura"), url(${FuturaStdMediumTtf}) format("ttf"), url(${FuturaStdMediumWoff}) format("woff");
  }`