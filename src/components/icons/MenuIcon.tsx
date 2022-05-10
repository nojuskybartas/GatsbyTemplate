import React from "react";
import styled, { css } from "styled-components/macro";
import { BaseButton } from "components";
import { tablet } from "styles/breakpoints";

export const MenuIcon = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <MenuIconStyle isOpen={isOpen} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </MenuIconStyle>
);

const MenuIconStyle = styled.div<{ isOpen: boolean }>`
  z-index: 10;
  width: 50px;
  height: 45px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  place-self: "end";
  display: none;
  @media ${tablet} {
    display: inline;
  }

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #262525;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 18px;
  }

  span:nth-child(3) {
    top: 36px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span:nth-child(1) {
        top: 18px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }

      span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }

      span:nth-child(3) {
        top: 18px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    `}
`;
