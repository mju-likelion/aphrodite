import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakPoint: {
      tablet: string;
      mobile: string;
    };
    colors: {
      primary: {
        black: string;
        orange: string;
        gray: string;
        white: string;
        red: string;
      };
      secondary: {
        orangeL1: string;
        orangeD1: string;
        black: string;
        white: string;
      };
      third: {
        beige: string;
        blue: string;
        skyblue: string;
        mjublue: string;
      };
    };
  }
}
