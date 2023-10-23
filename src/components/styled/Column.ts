import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ColumnProps {
  theme: DefaultTheme;
}

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Column;
