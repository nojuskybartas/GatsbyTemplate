import {
  Container,
  Header,
  Image,
  Typography,
  PageWrapper,
  SectionWrapper,
  ContentWrapper,
} from "components";
import React from "react";

const Checkout: React.FC = () => (
  <PageWrapper>
    <Header showMenuItems={false} />

    <ContentWrapper>
      <SectionWrapper>
        {/* <Typography type="h1">Desktop H1</Typography>
      <Typography type="h2">Desktop H2</Typography>
      <Typography type="h3">Desktop H3</Typography> */}
        <Typography type="h4">Here are your results!</Typography>
        {/* <Typography type="h5">Desktop H5</Typography>
      <Typography type="h6">Desktop H6</Typography>
      <Typography type="body16">body16</Typography> */}
      </SectionWrapper>
    </ContentWrapper>
  </PageWrapper>
);

export default Checkout;
