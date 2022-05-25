import { Header, PageWrapper } from "components";
import React from "react";
import { Main } from "./sections";

const Home: React.FC = () => (
  <PageWrapper title="Home">
    <Header showMenuItems={true} />
    <Main />
  </PageWrapper>
);

export default Home;
