import {
  Box,
  ContentWrapper,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import React from "react";
import { FloatingContainer } from "../elements";

const FEATURES = [
  "Algorithm-found deals on flights, hotels & more",
  "Personalized activity recommendations",
  "Simple, straightforward travel planner, so that you can plan the trip the way you want to",
  "One app for your whole trip experience",
  "Support for you and your travel buddies during your trip",
];

export const Features = () => (
  <SectionWrapper id="Features">
    <ContentWrapper>
      <FloatingContainer>
        <Typography type="h5" textAlign="center">
          Your personal travel agent in your pocket.
        </Typography>
        <FlexWrapper as="ul" flexDirection="column" marginTop="s16">
          {FEATURES.map((label) => (
            <Box key={label} as="li" marginY="s8">
              <Typography type="body16">{label}</Typography>
            </Box>
          ))}
        </FlexWrapper>
      </FloatingContainer>
    </ContentWrapper>
  </SectionWrapper>
);
