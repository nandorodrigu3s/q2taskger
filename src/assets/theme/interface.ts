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
    small: string;
    medium: string;
    large: string;
    veryLarge: string;
    verySmall: string;
    default: string;
  };
  images: {
    [key: string]: string | number;
  };
  icons: {
    [key: string]: string | number;
  };
}
