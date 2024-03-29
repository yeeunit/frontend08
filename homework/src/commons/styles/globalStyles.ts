import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px auto;
    box-sizing: border-box;
    font-family: "Jua";
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #ffefd5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "Jua";
    src: url("/fonts/Jua-Regular.ttf");
  }
`;
