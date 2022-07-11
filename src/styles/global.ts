import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      outline: none;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  body, html {
    font-family: ${({ theme }) => theme.FONTS.FAMILY.DEFAULT};
  }

  a {
    text-decoration: none;
    color: inherit;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .container {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export default GlobalStyle;
