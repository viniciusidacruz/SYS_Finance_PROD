import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    TITLE: string;
    COLORS: {
      BACKGROUND: string;
      SHAPE: string;
      TEXT: string;

      PRIMARY: {
        MAIN: string;
        DARK: string;
        LIGHT: string;
      };

      WHITE: string;
    };
    FONTS: {
      SIZES: {
        SMALL: string;
        REGULAR: string;
        MEDIUM: string;
        LARGE: string;
      };
      WEIGHT: {
        LIGHT: number;
        REGULAR: number;
        MEDIUM: number;
        BOLD: number;
        BLACK: number;
      };
      FAMILY: {
        DEFAULT: string;
      };
    };
    MARGINS: {
      DEFAULT: string;
    };
  }
}
