import { Header, LoadingOverlay, PageWrapper } from "components";
import React from "react";
import { useAppSelector } from "state";
import { selectCheckoutData } from "state/selectors";
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
  const checkoutState = useAppSelector(selectCheckoutData);
  return (
    <PageWrapper title="Summary">
      <LoadingOverlay isLoading={checkoutState.email.posted === "loading"} />
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
