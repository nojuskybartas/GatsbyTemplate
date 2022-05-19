import { ContentWrapper, SectionWrapper, FlexWrapper, Image } from "components";
import React from "react";
import { BackgroundWorldmap, Catchphrase } from "../elements";

export const Main = () => (
  <SectionWrapper>
    <BackgroundWorldmap />
    <FlexWrapper marginTop={{ ltablet: "s48" }}>
      <Catchphrase />
      <ContentWrapper zIndex="5" display={{ _: "none", ltablet: "inline" }}>
        <Image src="tourismSupplies" alt="tourism" width="30rem" />
      </ContentWrapper>
    </FlexWrapper>
  </SectionWrapper>
);
