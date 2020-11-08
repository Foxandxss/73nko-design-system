interface IStatus {
  warningColor: string;
  warningColorHover: string;
  warningColorActive: string;
  errorColor: string;
  errorColorHover: string;
  errorColorActive: string;
  successColor: string;
  successColorHover: string;
  successColorActive: string;
}

export interface Itheme {
  primaryColor: string;
  primaryColorHover: string;
  primaryColorActive: string;

  textColorOnPrimary: string;
  textColor: string;
  textColorInverted: string;

  secondaryColor: string;
  secondaryColorHover: string;
  secondaryColorActive: string;

  textColorOnSecondary: string;

  accentColor: string;
  primaryFont: string;
  disabled: string;
  textOnDisabled: string;

  status: IStatus;
}

export interface IThemeProvider {
  theme: Itheme;
}
