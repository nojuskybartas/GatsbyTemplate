import {
  Box,
  Button,
  ButtonVariants,
  Container,
  ContentWrapper,
  FlexWrapper,
  Input,
  SectionWrapper,
  Typography,
} from "components";
import React, { useState } from "react";
import { theme } from "styles/theme";
import { FloatingContainer } from "../elements";

export const CTA = () => {
  const [emailState, setEmailState] = useState({ input: "", valid: false });

  const handleEmailInput = (e: any) => {
    const value = (e.target as HTMLInputElement).value;
    setEmailState((state) => ({ ...state, input: value }));
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      setEmailState((state) => ({ ...state, valid: true }));
    } else {
      setEmailState((state) => ({ ...state, valid: false }));
    }
  };

  const handleSignUp = () => {
    if (emailState.valid) {
      // TODO:
      // sign up to database
      // disable button
    }
  };

  return (
    <SectionWrapper>
      <ContentWrapper>
        <FloatingContainer>
          <Typography type="h5" textAlign="center">
            Enter the waiting list now!
          </Typography>
          <FlexWrapper
            marginTop="s16"
            flexDirection={{ _: "column", ltablet: "row" }}
          >
            <Input
              type="email"
              placeholder="your email"
              width="100%"
              height="2.5rem"
              backgroundColor="secondary"
              border={`1px solid ${theme.colors.primary}`}
              borderRadius="br8"
              padding="s12"
              marginRight="s16"
              marginBottom={{ _: "s16" }}
              onChange={(e) => {
                handleEmailInput(e);
              }}
            />
            <Button
              width="2rem"
              variant={emailState.valid ? "accent" : "inactive"}
              onClick={handleSignUp}
            >
              Sign up
            </Button>
          </FlexWrapper>
        </FloatingContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};
