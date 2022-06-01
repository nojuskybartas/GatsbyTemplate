import React from "react";
import styled from "styled-components/macro";
import { AirplaneSpinner } from "./AirplaneSpinner";

interface LoadingOverlayProps {
  isLoading: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) =>
  isLoading ? (
    <OverlayStyled>
      <AirplaneSpinner />
    </OverlayStyled>
  ) : null;

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: brightness(0.5) blur(2px);
`;
