import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import {
  position,
  PositionProps,
  compose,
  color,
  ColorProps,
} from "styled-system";
import { tablet } from "styles/breakpoints";

const containerProps = compose(position, color);

export interface ContainerProps<T> extends PositionProps<T>, ColorProps<T> {}

export const Container = styled.div<ContainerProps<Theme>>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 72rem;
  && {
    ${containerProps};
  }
  @media ${tablet} {
    max-width: 100%;
  }
`;
