import { Container } from "components";
import React from "react";
import styled from "styled-components/macro";

export const FloatingContainer = styled(Container)`
  backdrop-filter: blur(1rem);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem 1rem;
`;
