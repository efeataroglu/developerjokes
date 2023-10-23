import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface SearchProps {
  theme: DefaultTheme;
}

const Search = styled.input<SearchProps>`
  margin: 10px 15px 10px 0px;
  padding: 10px;
  width: 15rem;
  border-radius: 5px;
  outline: none;
  border: 4px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
  caret-color: ${(props) => props.theme.colors.secondary};
  &::placeholder {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default Search;
