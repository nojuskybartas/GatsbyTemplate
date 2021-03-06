import styled from "styled-components/macro";

import { tablet } from "styles/breakpoints";
import { Colors } from "styles/theme";

export interface SectionWrapperStyles {
  minHeight?: string;
  backgroundColor?: Colors;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: 4rem 2rem;
  min-height: ${({ minHeight }) => minHeight || ""};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ""};

  @media ${tablet} {
    padding: 3rem 1rem;
  }
`;
