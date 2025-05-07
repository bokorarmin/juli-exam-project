import { TypographyVariantsOptions } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const fontFamily: TypographyVariantsOptions = {
  fontFamily: [
    'Roboto',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};

export const getTypography = (): TypographyVariantsOptions => ({
  body1: {
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: 0,
  },
  body2: {
    fontSize: '14px',
    lineHeight: '25px',
    letterSpacing: 0,
  },
  overline: {
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 600,
  },
  caption: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: 0.12,
  },
  subtitle1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: 400,
  },
  button: {
    fontSize: '16px',
    lineHeight: '18.75px',
    fontWeight: 700,
  },
  h6: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16.41px',
  },
  h5: {
    fontSize: '21px',
    lineHeight: '23.44px',
    fontWeight: 700,
  },
  h4: {
    fontSize: '21px',
    lineHeight: 'normal',
    fontWeight: 700,
  },
  h3: {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 600,
  },
  h2: {
    fontSize: '32px',
    lineHeight: '38px',
    fontWeight: 600,
  },
  h1: {
    fontSize: '40px',
    lineHeight: '47px',
    fontWeight: 700,
  },
});
