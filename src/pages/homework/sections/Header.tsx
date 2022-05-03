import {
  BaseButton,
  FlexWrapper,
  FlexWrapperProps,
  Image,
  Typography,
} from "components";
import { visuals } from "utils/visuals";
import React from "react";
import { Theme, theme } from "styles/theme";
import styled from "styled-components/macro";
import { HeaderNavItem } from "../elements/HeaderItem";
import { mobile, tablet } from "styles/breakpoints";
import { HeaderSocialsItem } from "../elements/HeaderSocialsItem";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Image height="20px" src="foodielandLogo" alt="FoodieLand Logo" />
      <HeaderNav>
        <HeaderNavItem label="Home" />
        <HeaderNavItem label="Recipes" />
        <HeaderNavItem label="Blog" />
        <HeaderNavItem label="Contact" />
        <HeaderNavItem label="About Us" />
      </HeaderNav>
      <HeaderSocials>
        <HeaderSocialsItem image="facebook" />
        <HeaderSocialsItem image="twitter" />
        <HeaderSocialsItem image="instagram" />
      </HeaderSocials>
    </HeaderWrapper>
  );
};

const HeaderSocials = styled(FlexWrapper)<FlexWrapperProps<Theme>>`
  width: fit-content;
  justify-content: center;
`;

const HeaderNav = styled(FlexWrapper)<FlexWrapperProps<Theme>>`
  flex: 1;
  justify-content: center;
  @media ${mobile && tablet} {
    display: none;
  }
`;

const HeaderWrapper = styled(FlexWrapper)<FlexWrapperProps<Theme>>`
  width: 100%;
  height: 6.875rem;
  padding: 2.5rem 5rem;
  border-bottom: 1px solid #cbcaca;
  justify-content: space-between;
`;
