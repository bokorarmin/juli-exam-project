import type { PaletteOptions } from '@mui/material';

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#ffffff',
    dark: '#dcdcdc',
    light: '#ffffff',
    contrastText: '#000000',
  },
  secondary: {
    main: '#4a90e2',
    dark: '#357ABD',
    light: '#b3d4fc',
    contrastText: '#ffffff',
  },
  background: {
    default: '#000000', // Pure black background
    paper: '#0a0a0a', // Slightly lighter for paper surfaces
  },
  success: {
    main: '#4caf50',
    dark: '#388e3c',
    light: '#66bb6a',
    contrastText: '#ffffff',
  },
  error: {
    main: '#f44336',
    dark: '#c62828',
    light: '#ef5350',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ffa726',
    dark: '#f57c00',
    light: '#ffcc80',
    contrastText: '#000000',
  },
  info: {
    main: '#29b6f6',
    dark: '#0288d1',
    light: '#4fc3f7',
    contrastText: '#000000',
  },
  divider: '#1a1a1a', // Dark but visible on black
  text: {
    primary: '#ffffff',
    secondary: '#b0b0b0',
    disabled: 'rgba(255, 255, 255, 0.38)',
  },
  grey: {
    50: '#eaeaea',
    100: '#d5d5d5',
    200: '#aaaaaa',
    300: '#8f8f8f',
    400: '#6b6b6b',
    500: '#4d4d4d',
    600: '#333333',
    700: '#1f1f1f',
    800: '#121212',
    900: '#000000', // Pure black in the greyscale
  },
  action: {
    hoverOpacity: 0.08,
    selectedOpacity: 0.12,
    disabledOpacity: 0.38,
    focusOpacity: 0.16,
    activatedOpacity: 0.1,
  },
};
