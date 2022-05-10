import React, { useEffect, useRef, useState } from "react";
import {
  Logo,
  FlexWrapper,
  Button,
  BaseButton,
  ButtonVariants,
  Container,
  Box,
} from "components";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import { tablet } from "styles/breakpoints";
import styled from "styled-components/macro";
import { Typography } from "components/typography/Typography";
import { ContentWrapper } from "components/wrappers/ContentWrapper";

interface MenuItemProps {
  label: string;
  link: string;
  buttonVariant?: ButtonVariants;
  hiddenInPages?: string[];
}

const MENU_ITEMS: MenuItemProps[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/",
  },
  {
    label: "FAQ",
    link: "/",
  },
  {
    label: "Privacy Policy",
    link: "/",
  },
  {
    label: "Start Now",
    link: "/quiz",
    buttonVariant: "accent",
    hiddenInPages: ["/quiz"],
  },
];

const MenuItems: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {MENU_ITEMS.map(
        ({ label, link, buttonVariant, hiddenInPages }) =>
          (!hiddenInPages || !hiddenInPages.includes(location.pathname)) &&
          (buttonVariant ? (
            <Button variant={buttonVariant} onClick={() => navigate(link)}>
              {label}
            </Button>
          ) : (
            <NavbarItem onClick={() => navigate(link)}>{label}</NavbarItem>
          ))
      )}
    </>
  );
};

interface HeaderProps {
  showMenuItems?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showMenuItems = true }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const closeDrawerOnClick = (e: MouseEvent | TouchEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDrawerOnClick);
    return () => document.removeEventListener("mousedown", closeDrawerOnClick);
  }, []);

  return (
    <Box backgroundColor="primary">
      <ContentWrapper>
        <NavbarWrapper centerLogo={!showMenuItems}>
          <Logo />

          {showMenuItems && (
            <>
              <HamburgerButtonWrapper onClick={() => setIsOpen(!isOpen)}>
                <HamburgerButtonLines />
              </HamburgerButtonWrapper>

              <NavbarItems ref={navbarRef} openDrawer={isOpen}>
                <MenuItems />
              </NavbarItems>
            </>
          )}
        </NavbarWrapper>
      </ContentWrapper>
    </Box>
  );
};

const NavbarWrapper = styled(FlexWrapper)<{ centerLogo: boolean }>`
  flex: 1;
  align-self: flex-start;
  padding: 0.5rem 0;
  justify-content: ${({ centerLogo }) =>
    centerLogo ? `center` : `space-between`};

  align-items: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const NavbarItems = styled.li<{ openDrawer: boolean }>`
  display: flex;
  list-style: none;
  align-items: center;

  @media ${tablet} {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 210px;
    padding: 1rem 2rem;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    flex-direction: column;
    justify-content: center;
    @supports (backdrop-filter: blur(7px)) {
      background-color: #3836362a;
      backdrop-filter: blur(7px);
    }
    @supports not (backdrop-filter: blur(7px)) {
      background-color: #a39e9e;
    }
    transition: 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
  }
`;

const NavbarItem = styled.li`
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

const HamburgerButtonWrapper = styled(BaseButton)`
  height: 2.5rem;
  width: 3rem;
  position: relative;

  display: none;

  @media ${tablet} {
    display: block;
  }
`;

const HamburgerButtonLines = styled.div`
  top: 50%;
  margin-top: -0.125em;

  &,
  &:after,
  &:before {
    /* Create lines */
    height: 2px;
    pointer-events: none;
    display: block;
    content: "";
    width: 2.5rem;
    background-color: black;
    position: absolute;
  }

  &:after {
    /* Move bottom line below center line */
    top: -0.7rem;
  }

  &:before {
    /* Move top line on top of center line */
    top: 0.7rem;
  }
`;
