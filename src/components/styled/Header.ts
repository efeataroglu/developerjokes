import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface HeaderProps {
  theme: DefaultTheme;
}

const Header = styled.h1<HeaderProps>`
  font-size 4em;
  margin:10px 0px 10px 0px;

  color: ${({ theme }) => theme.colors.white}
`;

export default Header;
