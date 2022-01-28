import { blue, yellow, red, green, neutral } from './colors';

export const defaultTheme = {
  primary: blue[300],
  primaryLight: blue[100],
  primaryHover: blue[400],
  primaryActive: blue[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textOnPrimary: neutral[100],
  text: neutral[600],
  textInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabel: neutral[500],
  status: {
    warning: yellow[100],
    warningHover: yellow[200],
    warningActive: yellow[300],
    error: red[100],
    errorHover: red[200],
    errorActive: red[300],
    success: green[100],
    successHover: green[200],
    successActive: green[300],
  },
};
