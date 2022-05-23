import React, { useEffect, useRef, useState } from "react";
import { Logo, FlexWrapper, BaseButton, Box } from "components";
import { tablet } from "styles/breakpoints";
import styled from "styled-components/macro";
import { ContentWrapper } from "components/wrappers/ContentWrapper";
import { NavbarItems } from "./elements/NavbarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignJustify,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  showMenuItems?: boolean;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  showMenuItems = true,
  transparent = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLUListElement>(null);
  const burgerIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDrawerOnClick = (e: MouseEvent | TouchEvent) => {
      if (burgerIconRef?.current?.contains(e.target as Node)) return;
      if (!navbarRef?.current?.contains(e.target as Node)) {
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
              <Box
                display={{ _: "block", ltablet: "none" }}
                zIndex="11"
                ref={burgerIconRef}
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon
                  icon={isOpen ? faAlignRight : faAlignJustify}
                  size="2x"
                />
              </Box>

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
  transition: all 0.1s ease-out;
`;

const NavbarItemsWrapper = styled.ul<{
  openDrawer: boolean;
}>`
  display: flex;
  list-style: none;
  align-items: center;

  @media ${tablet} {
    /* z-index: 10; */
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
    transition: all 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
  }
`;
