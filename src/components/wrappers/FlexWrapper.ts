import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import { Box, BoxProps } from "./Box";
import { flexbox, FlexboxProps } from "styled-system";

export interface FlexWrapperProps<T> extends BoxProps<T>, FlexboxProps<T> {}

export const FlexWrapper = styled(Box)<FlexWrapperProps<Theme>>`
  display: flex;
  && {
    ${flexbox};
  }
`;
