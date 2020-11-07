import styled from '@emotion/styled';

import { typeScale } from '@73nko-design-system/utils';

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props: any) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover {
    background-color: ${(props: any) => props.theme.primaryHoverColor};
    color: ${(props: any) => props.theme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${(props: any) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: any) => props.theme.primaryActiveColor};
    border-color: ${(props: any) => props.theme.primaryActiveColor};
    color: ${(props: any) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props: any) => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${(props: any) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props: any) => props.theme.disabled};
    color: ${(props: any) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  &:focus {
    outline: 3px solid ${(props: any) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: any) => props.theme.primaryActiveColor};
    border-color: ${(props: any) => props.theme.primaryActiveColor};
    color: ${(props: any) => props.theme.textColorOnPrimary};
  }

  &:hover {
    background-color: ${(props: any) => props.theme.primaryColorHover};
    color: ${(props: any) => props.theme.textColorOnPrimary};
  }
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props: any) => props.theme.secondaryColor};
  color: ${(props: any) => props.theme.secondaryColor};
  background: none;
  &:disabled {
    background: none;
    border: 2px solid ${(props: any) => props.theme.disabled};
    color: ${(props: any) => props.theme.disabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props: any) => props.theme.primaryColorHover};
    border: 2px solid ${(props: any) => props.theme.primaryColorHover};
    color: ${(props: any) => props.theme.textColorOnSecondary};
  }
  &:focus {
    outline: 3px solid ${(props: any) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: any) => props.theme.primaryActiveColor};
    border-color: ${(props: any) => props.theme.primaryActiveColor};
    color: ${(props: any) => props.theme.textColorOnPrimary};
  }
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props: any) => props.theme.primaryColor};
  background: none;
  &:disabled {
    color: ${(props: any) => props.theme.disabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props: any) => props.theme.primaryColorHover};
    color: ${(props: any) => props.theme.primaryActiveColor};
  }
  &:focus {
    outline: 3px solid ${(props: any) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props: any) => props.theme.primaryActiveColor};
    border-color: ${(props: any) => props.theme.primaryActiveColor};
    color: ${(props: any) => props.theme.primaryActiveColor};
  }
`;
