import { Checkmark } from "assets/icons/Checkmark";
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

const COMPETITOR_DIFFERENCES = [
  "No more scrolling through all the different apps to find your transportation, accommodation and activities",
  "Assisted decision making",
  "Best price guarantee",
  "Community of like-minded explorers",
];

const OurEdge = () => (
  <SectionWrapper>
    <ContentWrapper>
      <FloatingContainer>
        <Typography type="h5" textAlign="center">
          <Typography type="span" color="accent">
            Break free.{" "}
          </Typography>
          Let your inner explorer out
        </Typography>
        <FlexWrapper
          marginTop="s12"
          flexWrap={{ _: "wrap-reverse", ltablet: "nowrap" }}
        >
          <FlexWrapper flexDirection="column">
            {COMPETITOR_DIFFERENCES.map((label) => (
              <FlexWrapper key={label} margin="s12" alignItems="center">
                <Box>
                  <Checkmark color="green" />
                </Box>
                <Typography marginLeft="s12" fontWeight="semibold">
                  {label}
                </Typography>
              </FlexWrapper>
            ))}
          </FlexWrapper>
          <Box width="400px">
            <Image
              src="travelVignettes"
              alt="travel vignettes"
              maxWidth="100%"
            />
          </Box>
        </FlexWrapper>
      </FloatingContainer>
    </ContentWrapper>
  </SectionWrapper>
);

export default OurEdge;
