import type { PaletteOptions } from '@mui/material';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#2362a4',
    dark: '#184472',
    light: '#4f81b6',
    contrastText: '#fff',
  },
  secondary: {
    main: '#ffcc52',
    dark: '#b28e39',
    light: '#ffd674',
    contrastText: '#fff',
  },
  background: {
    default: '#F1F2F4',
    paper: '#ffffff',
  },
  success: {
    main: '#59B64C',
    dark: '#1c7413',
    light: '#c9f2c5',
    contrastText: 'rgba(255, 255, 255, 0.85)',
  },
  error: {
    main: '#ea1515',
    dark: '#9c0d0d',
    light: '#fce2e2',
    contrastText: 'rgba(255, 255, 255, 0.85)',
  },
  warning: {
    main: '#E36645',
    dark: '#c96c00',
    light: '#ffe4c5',
    contrastText: 'rgba(255, 255, 255, 0.85)',
  },
  info: {
    main: '#5674A5',
    dark: '#0046b0',
    light: '#F0F6FE',
    contrastText: 'rgba(255, 255, 255, 0.85)',
  },
  divider: '#4f81b6',
  text: {
    primary: 'rgba(0, 0, 0, 0.85)',
    secondary: 'rgba(71, 80, 88, 1)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  grey: {
    50: '#F9FAFB',
    100: '#F1F2F4',
    200: '#E5E8EB',
    300: '#D1D6DC',
    400: '#989EA4',
    500: '#788087',
    600: '#656C73',
    700: '#475058',
    800: '#2E3338',
    900: '#212529',
  },
  action: { hoverOpacity: 0.08 },
};
