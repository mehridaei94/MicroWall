import { createGlobalStyle } from "styled-components";
import media from "./MediaQuery";

export const themeVar = {
  radius: "8px",
  halfRadius: "4px",
};

export const palette = {
  darkGreen: "#0c4160",
  lightBlue: "#91caff",
  darkModePrimary: "#2c2b3f",
};

const GlobalStyle = createGlobalStyle`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white !important;
  }
  .ant-select .ant-select-selection-placeholder{
    color: white;
  }
  .container {
      width:960px;
      max-width: 100%;
      margin:0 auto;
      // margin-bottom:36px;
  }
  ${media.xDesktop`
  .container {
    max-width:960px;
    margin:0 auto;
    padding-left:0px;
    padding-right:0px;
  }
`}

${media.desktop`
  .container {
    max-width:720px;
    margin:0 auto;
    padding-left:0px;
    padding-right:0px;
  }
`}

${media.tablet`
  .container {
    max-width:540px;
    margin:0 auto;
    padding-left:16px;
    padding-right:16px;
  }
`}

${media.bigPhone`
  .container {
    max-width:100%;
    margin:0 auto;
    /* padding:0; */
  }
`}

${media.tablet`
  .no-padding-mob-container {
    padding-left:0px;
    padding-right:0px;
  }
`}
.text-white {
  color:white;
}
.margin-b-24{
  margin-bottom:24px;
}
.margin-r-8{
  margin-right:8px;
}
.flex-row {
  display:flex;
  flex-direction:row;
  align-items:center;
}

`;
export default GlobalStyle;
