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

export const MissionStatement = () => (
  <SectionWrapper id="MissinoStatement">
    <ContentWrapper>
      <FloatingContainer>
        <Typography type="h5" textAlign="center">
          Genuine people.{" "}
          <Typography type="span" color="accent">
            Genuine mission.
          </Typography>
        </Typography>
        <FlexWrapper flexWrap={{ _: "wrap", ltablet: "nowrap" }}>
          <Box width={{ _: "300px", ltablet: "350px" }}>
            <Image
              src="personLookingIllustration"
              alt="Genuine mission illustration"
              width="100%"
            />
          </Box>
          <Box padding="s32" maxWidth="32rem" marginTop="s16">
            <Typography type="body22" paddingY="s12">
              As passionate seekers of adventure, we wanted to make it{" "}
              <Typography type="span" fontWeight="semibold">
                more accessible & less tedious for everyone to travel.
              </Typography>
            </Typography>
            <Typography type="body22" paddingY="s12">
              We created this application with the sole purpose of easing travel
              planning.
            </Typography>
          </Box>
        </FlexWrapper>
      </FloatingContainer>
    </ContentWrapper>
  </SectionWrapper>
);
