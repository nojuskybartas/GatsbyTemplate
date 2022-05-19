import React from "react";
import {
  Button,
  Container,
  ContentWrapper,
  FlexWrapper,
  Typography,
} from "components";
import { navigate } from "gatsby";

export const Catchphrase = () => (
  <ContentWrapper zIndex="5" maxWidth="50rem">
    <Container>
      <Typography
        type="h2"
        textAlign="end"
        marginTop={{ _: "s0", ltablet: "s32" }}
      >
        <Typography type="span" fontWeight="bold">
          New way to travel
        </Typography>{" "}
        all the unexplored corners of the world
      </Typography>
      <Typography type="h6" textAlign="end">
        Discover if this could be your next favourite hobby!
      </Typography>
      <FlexWrapper justifyContent="end">
        <Button
          minHeight="3rem"
          variant="accent"
          marginY="s48"
          maxWidth="18rem"
          onClick={() => navigate("/quiz")}
        >
          <Typography fontWeight="bold" color="white">
            Take the quiz
          </Typography>
        </Button>
      </FlexWrapper>
    </Container>
  </ContentWrapper>
);
