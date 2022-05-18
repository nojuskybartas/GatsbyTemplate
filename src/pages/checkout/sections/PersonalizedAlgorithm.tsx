import {
  Box,
  ContentWrapper,
  FlexWrapper,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import React from "react";
import { FloatingContainer } from "../elements";

const ALGORITHM_FEATURES = [
  {
    image: "algorithmFeaturesIllustration1",
    title: "Your plan - your rules",
    description:
      "You indicate what you like, or don't, and we create recommendations based on your input",
  },
  {
    image: "algorithmFeaturesIllustration2",
    title: "Spontaneity",
    description:
      "Explore places you'd never think of going to. Not knowing where you're going could be part of the thrill",
  },
  {
    image: "algorithmFeaturesIllustration3",
    title: "Constant inconsistency",
    description:
      "Because of how we find the spontaneous trips, we guarantee great variation",
  },
];

const PersonalizedAlgorithm = () => (
  <SectionWrapper>
    <ContentWrapper>
      <FloatingContainer>
        <Typography type="h5" textAlign="center">
          It's your journey. The algorithm works for{" "}
          <Typography type="span" color="accent">
            YOU!
          </Typography>
        </Typography>
        <FlexWrapper flexWrap={{ _: "wrap", ltablet: "nowrap" }}>
          {ALGORITHM_FEATURES.map(({ image, title, description }) => (
            <FlexWrapper
              key={title}
              flexDirection="column"
              width="100%"
              padding="s32"
            >
              <Box width="70%" alignSelf="center">
                <Image src={image} alt={title} width="100%" />
              </Box>

              <Box marginTop="s12" minHeight="3rem">
                <Typography type="body22" fontWeight="semibold">
                  {title}
                </Typography>
              </Box>

              <Typography marginTop="s12">{description}</Typography>
            </FlexWrapper>
          ))}
        </FlexWrapper>
      </FloatingContainer>
    </ContentWrapper>
  </SectionWrapper>
);

export default PersonalizedAlgorithm;
