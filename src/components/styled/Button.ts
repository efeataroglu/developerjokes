import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -7px 0px inset;
  &:active {
    box-shadow: none;
  }
`;

export default Button;
