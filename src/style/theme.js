import color from 'color';
import {black, white, pinkA400, pinkA100} from './colors';
import configureFonts from './fonts';

export const colors = {
  primary: '#0a78ff',
  accent: '#34c759',
  background: '#fafafa',
  appbar: '#f2f1f6',
  statusbar: '#ffffff',
  surface: white,
  card: white,
  error: '#B00020',
  text: black,
  onBackground: '#000000',
  onSurface: '#000000',
  disabled: color(black).alpha(0.26).rgb().string(),
  placeholder: color(black).alpha(0.54).rgb().string(),
  backdrop: color(black).alpha(0.5).rgb().string(),
  notification: pinkA400,
};

export const DefaultTheme = {
  dark: false,
  roundness: 4,
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

export const themedColors = {
  default: {
    ...DefaultTheme,
    colors: colors,
  },
  light: {
    ...DefaultTheme,
    colors: colors,
  },
  dark: {
    ...DefaultTheme,
    dark: true,
    mode: 'adaptive',
    colors: {
      ...colors,
      primary: '#0a84ff',
      accent: '#30d158',
      background: '#111113',
      statusbar: '#000000',
      appbar: '#292929',
      surface: '#1c1c1e',
      card: '#1c1c1e',
      error: '#CF6679',
      onBackground: '#FFFFFF',
      onSurface: '#FFFFFF',
      text: white,
      disabled: color(white).alpha(0.38).rgb().string(),
      placeholder: color(white).alpha(0.54).rgb().string(),
      backdrop: color(black).alpha(0.5).rgb().string(),
      notification: pinkA100,
    },
  },
};
