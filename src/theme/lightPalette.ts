import type { PaletteOptions } from '@mui/material';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#ffffff',
    dark: '#f4f4f4',
    light: '#ffffff',
    contrastText: '#1e1e1e',
  },
  secondary: {
    main: '#007aff',
    dark: '#005bb5',
    light: '#e6f0ff',
    contrastText: '#ffffff',
  },
  background: {
    default: '#ffffff',
    paper: '#f9f9f9',
  },
  success: {
    main: '#4caf50',
    dark: '#388e3c',
    light: '#e8f5e9',
    contrastText: '#ffffff',
  },
  error: {
    main: '#f44336',
    dark: '#c62828',
    light: '#fdecea',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ffa726',
    dark: '#f57c00',
    light: '#fff3e0',
    contrastText: '#1e1e1e',
  },
  info: {
    main: '#2196f3',
    dark: '#1565c0',
    light: '#e3f2fd',
    contrastText: '#ffffff',
  },
  divider: '#e0e0e0',
  text: {
    primary: '#1e1e1e',
    secondary: '#5f6368',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  grey: {
    50: '#f9f9f9',
    100: '#f0f0f0',
    200: '#e0e0e0',
    300: '#cfcfcf',
    400: '#b0b0b0',
    500: '#909090',
    600: '#707070',
    700: '#505050',
    800: '#303030',
    900: '#101010',
  },
  action: {
    hoverOpacity: 0.06,
    selectedOpacity: 0.08,
    disabledOpacity: 0.38,
    focusOpacity: 0.12,
    activatedOpacity: 0.1,
  },
};
