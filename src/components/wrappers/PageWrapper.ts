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
  /* background-image: url(${backgroundImage}); */
  background-color: ${theme.colors.secondary};
  background-repeat: no-repeat;
`;
