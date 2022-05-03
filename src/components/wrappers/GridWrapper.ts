import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import { Box, BoxProps } from "./Box";
import { grid, GridProps } from "styled-system";

export interface GridWrapperProps<T> extends BoxProps<T>, GridProps<T> {}

export const GridWrapper = styled(Box)<GridWrapperProps<Theme>>`
  display: grid;
  && {
    ${grid};
  }
`;
