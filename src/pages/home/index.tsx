import { Header, PageWrapper } from "components";
import React from "react";
import { Main } from "./sections";

const Home: React.FC = () => (
  <PageWrapper>
    <Header showMenuItems={true} transparent />
    <Main />
  </PageWrapper>
);

export default Home;
