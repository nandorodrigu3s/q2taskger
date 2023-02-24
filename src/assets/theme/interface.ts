export interface BaseTheme {
  colors: {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    white: string;
    black: string;
  };
  size: {
    small: number;
    medium: number;
    large: number;
    veryLarge: number;
    verySmall: number;
    default: number;
  };
  images: {
    [key: string]: string | number;
  };
  icons: {
    [key: string]: string | number;
  };
}
