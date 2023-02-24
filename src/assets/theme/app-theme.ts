import { icons } from '../icons';

export const BaseTheme = {
  colors: {
    primary: '#006AFF',
    secondary: '#094AEA',
    tertiary: '#005B8E',
    lightGrey: '#A3A3A3',
    primaryGrey: '#CCCED9',
    highlight: '#129E69',
    dark: '#262833',
    white: '#FFF',
    black: '#000',
  },
  size: {
    small: 8,
    medium: 16,
    large: 24,
    veryLarge: 32,
    verySmall: 4,
    default: 10,
  },
  icons: {
    ...icons,
  },
};
