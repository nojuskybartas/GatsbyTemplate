import React, { useEffect, useRef, useState } from "react";
import { Logo, FlexWrapper, BaseButton, Box } from "components";
import { tablet } from "styles/breakpoints";
import styled from "styled-components/macro";
import { ContentWrapper } from "components/wrappers/ContentWrapper";
import { NavbarItems } from "./elements/NavbarItems";

interface HeaderProps {
  showMenuItems?: boolean;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  showMenuItems = true,
  transparent = false,
}) => {
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
    <Box
      backgroundColor={transparent ? "clear" : "primary"}
      position="sticky"
      top="0"
      zIndex="10"
    >
      <ContentWrapper>
        <NavbarWrapper centerLogo={!showMenuItems}>
          <Logo />

          {showMenuItems && (
            <>
              <HamburgerButtonWrapper onClick={() => setIsOpen(!isOpen)}>
                <HamburgerButtonLines />
              </HamburgerButtonWrapper>

              <NavbarItemsWrapper ref={navbarRef} openDrawer={isOpen}>
                <NavbarItems />
              </NavbarItemsWrapper>
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

const NavbarItemsWrapper = styled.ul<{ openDrawer: boolean }>`
  display: flex;
  list-style: none;
  align-items: center;

  @media ${tablet} {
    z-index: 10;
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
      backdrop-filter: blur(10px);
    }
    @supports not (backdrop-filter: blur(7px)) {
      background-color: #a39e9e;
    }
    transition: 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
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
    height: 2px;
    pointer-events: none;
    display: block;
    content: "";
    width: 2.5rem;
    background-color: black;
    position: absolute;
  }

  &:after {
    top: -0.7rem;
  }

  &:before {
    top: 0.7rem;
  }
`;
