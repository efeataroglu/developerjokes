import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface WrapperProps {
  theme: DefaultTheme;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80rem;
  padding: 2px;
  margin: 0 auto;
  //? background: ${({ theme }) => theme.colors.purple};
`;

export default Wrapper;
