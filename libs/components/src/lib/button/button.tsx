import styled from '@emotion/styled';

import { typeScale } from '@73nko-design-system/utils';
import { IThemeProvider } from '@73nko-design-system/types';

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props: IThemeProvider) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryHoverColor};
    color: ${(props: IThemeProvider) => props.theme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid
      ${(props: IThemeProvider) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryActiveColor};
    border-color: ${(props: IThemeProvider) => props.theme.primaryActiveColor};
    color: ${(props: IThemeProvider) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props: IThemeProvider) => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${(props: IThemeProvider) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props: IThemeProvider) => props.theme.disabled};
    color: ${(props: IThemeProvider) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  &:focus {
    outline: 3px solid
      ${(props: IThemeProvider) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryActiveColor};
    border-color: ${(props: IThemeProvider) => props.theme.primaryActiveColor};
    color: ${(props: IThemeProvider) => props.theme.textColorOnPrimary};
  }

  &:hover {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryColorHover};
    color: ${(props: IThemeProvider) => props.theme.textColorOnPrimary};
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props: IThemeProvider) => props.theme.secondaryColor};
  color: ${(props: IThemeProvider) => props.theme.secondaryColor};
  background: none;
  &:disabled {
    background: none;
    border: 2px solid ${(props: IThemeProvider) => props.theme.disabled};
    color: ${(props: IThemeProvider) => props.theme.disabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryColorHover};
    border: 2px solid
      ${(props: IThemeProvider) => props.theme.primaryColorHover};
    color: ${(props: IThemeProvider) => props.theme.textColorOnSecondary};
  }
  &:focus {
    outline: 3px solid
      ${(props: IThemeProvider) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryActiveColor};
    border-color: ${(props: IThemeProvider) => props.theme.primaryActiveColor};
    color: ${(props: IThemeProvider) => props.theme.textColorOnPrimary};
  }
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props: IThemeProvider) => props.theme.primaryColor};
  background: none;
  &:disabled {
    color: ${(props: IThemeProvider) => props.theme.disabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryColorHover};
    color: ${(props: IThemeProvider) => props.theme.primaryActiveColor};
  }
  &:focus {
    outline: 3px solid
      ${(props: IThemeProvider) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: IThemeProvider) =>
      props.theme.primaryActiveColor};
    border-color: ${(props: IThemeProvider) => props.theme.primaryActiveColor};
    color: ${(props: IThemeProvider) => props.theme.primaryActiveColor};
  }
`;
