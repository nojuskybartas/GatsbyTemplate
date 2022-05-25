import React from "react";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import styled from "styled-components/macro";
import { Button } from "components";
import { tablet } from "styles/breakpoints";
import { MENU_ITEMS } from "./items";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavbarItems: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {MENU_ITEMS.map(
        ({ label, link, buttonVariant, hiddenInPages }) =>
          (!hiddenInPages || !hiddenInPages.includes(location.pathname)) &&
          (buttonVariant ? (
            <Button key={label} variant={buttonVariant}>
              <AnchorLink to={link} title={label}>
                {label}
              </AnchorLink>
            </Button>
          ) : (
            <NavbarItemStyled key={label} onClick={() => navigate(link)}>
              <AnchorLink to={link} title={label}>
                {label}
              </AnchorLink>
            </NavbarItemStyled>
          ))
      )}
    </>
  );
};

const NavbarItemStyled = styled.li`
  width: fit-content;
  white-space: nowrap;
  padding: 0 1rem;
  cursor: pointer;
  align-self: center;

  @media ${tablet} {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
`;
