import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import { Box, BoxProps } from "./Box";
import { tablet } from "styles/breakpoints";

export interface ContentWrapperProps<T> extends BoxProps<T> {}

export const ContentWrapper = styled(Box)<ContentWrapperProps<Theme>>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 90rem;
  @media ${tablet} {
    max-width: 100%;
  }
`;
