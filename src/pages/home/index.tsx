import {
  Header,
  Image,
  Box,
  Typography,
  PageWrapper,
  ContentWrapper,
  SectionWrapper,
  Button,
  FlexWrapper,
} from "components";
import { navigate } from "gatsby";
import React from "react";

const Home: React.FC = () => (
  <PageWrapper>
    <Header showMenuItems={true} />
    <SectionWrapper>
      <ContentWrapper>
        <Typography
          type="h3"
          textAlign="end"
          marginTop={{ _: "s0", ltablet: "s32" }}
        >
          Ever wondered if there was a different approach to travel?
        </Typography>
        <FlexWrapper justifyContent="end">
          <Box maxWidth="40rem">
            <Typography type="h6" textAlign="end" marginTop="s32">
              We did.
            </Typography>
            <Typography type="h6" textAlign="end">
              Take the quiz to discover if this could be your next favourite
              hobby!
            </Typography>
            <FlexWrapper justifyContent="end">
              <Button
                minHeight="3rem"
                variant="accent"
                marginY="s48"
                onClick={() => navigate("/quiz")}
              >
                <Typography fontWeight="fw700" color="white">
                  Take the quiz
                </Typography>
              </Button>
            </FlexWrapper>
          </Box>
        </FlexWrapper>
      </ContentWrapper>
    </SectionWrapper>
  </PageWrapper>
);

export default Home;
