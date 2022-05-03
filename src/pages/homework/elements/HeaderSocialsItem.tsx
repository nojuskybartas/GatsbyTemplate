import { Image } from "components";
import React from "react";
import styled from "styled-components/macro";
import { Visuals } from "utils/visuals";

const HeaderSocialsItemStyled = styled.div`
  margin-left: 2rem;
  cursor: pointer;
`;

export interface HeaderSocialsItemProps {
  image: Visuals;
  onClick?: () => void;
}

export const HeaderSocialsItem: React.FC<HeaderSocialsItemProps> = ({
  onClick,
  image,
}) => (
  <HeaderSocialsItemStyled onClick={onClick}>
    <Image height="20px" src={image} alt={image} />
  </HeaderSocialsItemStyled>
);
