// import backgroundImage from "../../assets/images/airplane.jpg";
import React from "react";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import { Box } from "components";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
}) => (
  <PageWrapperStyled>
    <Helmet
      defaultTitle="Explored Life"
      title={title}
      titleTemplate="%s | Explored Life"
    />
    {children}
  </PageWrapperStyled>
);

const PageWrapperStyled = styled(Box)`
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
