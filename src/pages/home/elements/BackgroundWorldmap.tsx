import { ContentWrapper, Image } from "components";
import React from "react";

export const BackgroundWorldmap = () => (
  <ContentWrapper
    position="absolute"
    width="100%"
    left="0"
    top={{ _: "50%", ltablet: "20%" }}
    bottom="0"
    right="0"
    margin="auto"
  >
    <Image src="hexagonWorldmap" alt="world map" width="100%" />
  </ContentWrapper>
);
