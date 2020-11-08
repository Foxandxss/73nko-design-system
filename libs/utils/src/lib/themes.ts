import { blue, neutral, pink, yellow, green, red } from './colors';
import { primaryFont } from './typography';

import { Itheme } from '@73nko-design-system/types';

export const defaultTheme: Itheme = {
  primaryColor: blue[300],
  primaryColorHover: blue[200],
  primaryColorActive: blue[100],

  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],

  secondaryColor: blue[300],
  secondaryColorHover: blue[400],
  secondaryColorActive: blue[400],

  textColorOnSecondary: neutral[100],

  accentColor: pink[200],

  primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme: Itheme = {
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[300],

  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],

  secondaryColor: neutral[600],
  secondaryColorHover: neutral[500],
  secondaryColorActive: neutral[400],

  textColorOnSecondary: green[300],

  accentColor: pink[500],

  primaryFont,

  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
