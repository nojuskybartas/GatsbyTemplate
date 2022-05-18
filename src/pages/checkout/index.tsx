import { Header, PageWrapper } from "components";
import React from "react";
import {
  Benefits,
  CatchPhrase,
  CTA,
  FAQ,
  Features,
  HowItWorks,
  MissionStatement,
  OurEdge,
  PersonalizedAlgorithm,
} from "./sections";

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
