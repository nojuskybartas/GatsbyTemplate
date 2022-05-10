import {
  Header,
  Image,
  Typography,
  PageWrapper,
  ContentWrapper,
  SectionWrapper,
} from "components";
import React from "react";

const Home: React.FC = () => (
  <PageWrapper>
    <Header showMenuItems={true} />

    <ContentWrapper>
      <SectionWrapper>
        <Typography type="h1">Explore life!</Typography>
      </SectionWrapper>
    </ContentWrapper>
  </PageWrapper>
);

export default Home;
