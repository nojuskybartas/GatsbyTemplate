import React from "react";
import { BaseButton, Typography } from "components";
import styled from "styled-components/macro";
import { mobile, tablet } from "styles/breakpoints";

const HeaderItemStyled = styled(Typography)`
  cursor: pointer;
  width: fit-content;
  margin-left: 3.75rem;
  @media ${tablet} {
    margin-left: 1.5rem;
  }
`;

export interface HeaderItemProps {
  label: string;
  onClick?: () => void;
}

export const HeaderNavItem: React.FC<HeaderItemProps> = ({
  label,
  onClick,
}) => (
  <HeaderItemStyled type="body16" onClick={onClick}>
    {label}
  </HeaderItemStyled>
);
