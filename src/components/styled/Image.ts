import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ImageProps {
  theme: DefaultTheme;
}

const Image = styled.img<ImageProps>`
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 0 0.44rem ${(props) => props.theme.colors.main});
  transition: 2s;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 0.44rem ${(props) => props.theme.colors.secondary});
  }
`;

export default Image;
