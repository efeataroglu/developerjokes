// import original module declarations
import "styled-components";
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      white: string;
      purple: string;
    };
  }
}
