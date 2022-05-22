import { Header, PageWrapper } from "components";
import React from "react";
import { Fireworks, Footer } from "./sections";

const Success = () => (
  <PageWrapper title="Success">
    <Header showMenuItems={false} />
    <Fireworks />
    <Footer />
  </PageWrapper>
);

export default Success;
