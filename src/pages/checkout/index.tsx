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
        <Typography type="h4">Here are your results!</Typography>
        <Typography marginTop="s48">You like it 😎 Now pay money</Typography>
      </SectionWrapper>
    </ContentWrapper>
  </PageWrapper>
);

export default Checkout;
