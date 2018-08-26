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
	font-family: "Tilda Grande";
	font-weight: Normal;
	font-style: Italic;
	      src: url("https//cloud.typenetwork.com/projectLicenseWeb/13386/fontfile/eot/?4f33fd5c1fe001660ab155608fceacc919283643");
        src: url("https//cloud.typenetwork.com/projectLicenseWeb/13386/fontfile/eot/?4f33fd5c1fe001660ab155608fceacc919283643#iefix") format("embedded-opentype"),
             url("https//cloud.typenetwork.com/projectLicenseWeb/13386/fontfile/woff2/?4f33fd5c1fe001660ab155608fceacc919283643") format("woff2"),
             url("https//cloud.typenetwork.com/projectLicenseWeb/13386/fontfile/woff/?4f33fd5c1fe001660ab155608fceacc919283643") format("woff");
  }
  @font-face {
    font-family: "Futura";
    font-style: normal;
    font-weight: normal;
    src: local("Futura"), local("Futura"), url(${FuturaStdMediumTtf}) format("ttf"), url(${FuturaStdMediumWoff}) format("woff");
  }`

