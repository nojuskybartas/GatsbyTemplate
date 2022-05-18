import React from "react";
import {
  Box,
  ContentWrapper,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import { FloatingContainer } from "../elements";

const STEPS = [
  "Enter your approximate budget & starting location",
  "Get our generated trips, and choose the one you like the most",
  "Personalize & perfect the adventure by swapping out the parts you don't like",
  "Pay for the accommodation, transportation, and activities (if applies) with one payment",
];

export const HowItWorks = () => (
  <SectionWrapper>
    <ContentWrapper>
      <FloatingContainer>
        <Typography type="h5" textAlign="center">
          How does this work?
        </Typography>
        <Typography textAlign="center" type="body22">
          There are {STEPS.length} basic steps:
        </Typography>
        <FlexWrapper
          flexWrap={{ _: "wrap" }}
          marginTop="s12"
          justifyContent="space-around"
        >
          {STEPS.map((label, count) => (
            <FlexWrapper
              key={label}
              width="100%"
              maxWidth="30rem"
              padding="s12"
              alignItems="center"
            >
              <Box minWidth="2rem" textAlign="end" marginRight="s12">
                <Typography
                  fontSize="fs32"
                  fontWeight="semibold"
                  color="accent"
                >
                  {count + 1}.
                </Typography>
              </Box>
              <Typography>{label}</Typography>
            </FlexWrapper>
          ))}
        </FlexWrapper>
      </FloatingContainer>
    </ContentWrapper>
  </SectionWrapper>
);
