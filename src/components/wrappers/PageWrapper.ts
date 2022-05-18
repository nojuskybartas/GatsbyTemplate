import styled from "styled-components/macro";
import { theme, Theme } from "styles/theme";
import { Box, BoxProps } from "./Box";
import backgroundImage from "../../assets/images/airplane.jpg";
import { FlexWrapper } from "./FlexWrapper";

export interface PageWrapperProps<T> extends BoxProps<T> {}

export const PageWrapper = styled(FlexWrapper)<PageWrapperProps<Theme>>`
  margin: 0 0;
  min-height: 100vh;
  height: fit-content;
  /* height: 100vh; */
  /* overflow-y: auto; */
  flex-flow: column;
  /* background-image: url(${backgroundImage});
  background-color: ${theme.colors.secondary}; */
  background: rgb(127, 156, 188);
  background: linear-gradient(
    180deg,
    rgba(127, 156, 188, 1) 7%,
    rgba(230, 184, 220, 1) 51%,
    rgba(254, 213, 217, 1) 100%
  );
  background-repeat: no-repeat;
`;
