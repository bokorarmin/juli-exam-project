import { createTheme, type ThemeOptions } from '@mui/material';

import { darkPalette } from './darkPalette.ts';
import { lightPalette } from './lightPalette.ts';
import { fontFamily, getTypography } from './typography.ts';

export const lightTheme = createTheme({
  shape: {
    borderRadius: 2,
  },
  typography: {
    ...fontFamily,
    ...getTypography(),
  },
  palette: lightPalette,
} as ThemeOptions);

export const darkTheme = createTheme({
  shape: {
    borderRadius: 2,
  },
  typography: {
    ...fontFamily,
    ...getTypography(),
  },
  palette: darkPalette,
} as ThemeOptions);
