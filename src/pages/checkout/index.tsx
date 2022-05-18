import {
  Container,
  Header,
  Image,
  Typography,
  PageWrapper,
  SectionWrapper,
  ContentWrapper,
} from "components";
import React, { useRef } from "react";
import { Benefits, CatchPhrase, Features } from "./sections";
import { CTA } from "./sections/CTA";
import { FAQ } from "./sections/FAQ";
import { HowItWorks } from "./sections/HowItWorks";
import { MissionStatement } from "./sections/MissionStatement";
import OurEdge from "./sections/OurEdge";
import PersonalizedAlgorithm from "./sections/PersonalizedAlgorithm";

const Checkout: React.FC = () => {
  return (
    <PageWrapper>
      <Header showMenuItems={false} />
      <CatchPhrase />
      <Benefits />
      <Features />
      <CTA />
      <OurEdge />
      <PersonalizedAlgorithm />
      <HowItWorks />
      <MissionStatement />
      <FAQ />
      <CTA />
    </PageWrapper>
  );
};

export default Checkout;
