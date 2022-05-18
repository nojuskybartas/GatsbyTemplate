import {
  Box,
  Container,
  ContentWrapper,
  FlexWrapper,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import React from "react";
import { FloatingContainer } from "../elements";
import Illustration from "assets/svg/parisIllustration.svg";

const BENEFITS = [
  {
    label: "Lower travel costs",
    description:
      "We find best combi deals of flights, accommodation & food/activities around the globe",
  },
  {
    label: "More frequent outings",
    description: "Minimize the hassle of planning, travel more frequently",
  },
  {
    label: "Better experiences",
    description: "Shorter, but more experience-dense getaways.",
  },
];

export const Benefits = () => (
  <SectionWrapper>
    <ContentWrapper>
      <FlexWrapper
        as={FloatingContainer}
        flexDirection={{ _: "column", ltablet: "row" }}
        alignItems={{ _: "center", ltablet: "stretch" }}
      >
        <Box
          borderRadius="br16"
          overflow="hidden"
          width={{ _: "100%", ltablet: "fit-content" }}
        >
          <Image src="culture" alt="culture" maxHeight="300px" />
        </Box>
        <FlexWrapper
          as="ul"
          padding={{ _: "s0", ltablet: "s32" }}
          flexDirection="column"
          justifyContent="space-between"
        >
          {BENEFITS.map(({ label, description }) => (
            <FlexWrapper
              key={label}
              as="li"
              flexDirection="column"
              marginY={{ _: "s16", ltablet: "s0" }}
            >
              <Typography type="h6" fontWeight="bold" color="primary">
                {label}
              </Typography>
              <Typography>{description}</Typography>
            </FlexWrapper>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </ContentWrapper>
  </SectionWrapper>
);
