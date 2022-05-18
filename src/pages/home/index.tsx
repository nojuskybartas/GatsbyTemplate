import { Header, PageWrapper } from "components";
import React from "react";
import { Catchphrase } from "./sections";

const Home: React.FC = () => (
  <PageWrapper>
    <Header showMenuItems={true} />
    <Catchphrase />
  </PageWrapper>
);

export default Home;
