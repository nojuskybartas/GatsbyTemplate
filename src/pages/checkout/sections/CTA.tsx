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
import { useDispatch, useSelector } from "react-redux";
import {
  postMailingListSignUpAction,
  setEmailIsValid,
  setEmailValue,
  setIsSignedUp,
} from "state/checkout";
import { selectCheckoutData } from "state/selectors";
import { theme } from "styles/theme";
import { validateEmail } from "utils/validations";
import { FloatingContainer } from "../elements";

export const CTA = () => {
  const checkoutState = useSelector(selectCheckoutData);
  const dispatch = useDispatch();

  const handleEmailInput = (e: any) => {
    const value = (e.target as HTMLInputElement).value;
    dispatch(setEmailValue(value));
    dispatch(setEmailIsValid(validateEmail(value)));
  };

  const handleSignUp = () => {
    if (checkoutState.email.isValid) {
      dispatch(
        postMailingListSignUpAction({ email: checkoutState.email.value })
      );
      dispatch(setIsSignedUp(true));
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
              value={checkoutState.email.value}
            />
            {!checkoutState.isSignedUp && (
              <Button
                width="2rem"
                variant={checkoutState.email.isValid ? "accent" : "inactive"}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            )}
          </FlexWrapper>
        </FloatingContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};
