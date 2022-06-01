import { ContentWrapper, SectionWrapper, Typography } from "components";
import React from "react";
import { useAppSelector } from "state";
import { selectCheckoutData } from "state/selectors";

export const Footer = () => {
  const checkoutState = useAppSelector(selectCheckoutData);

  return (
    <SectionWrapper>
      <ContentWrapper textAlign="center">
        <Typography type="h5">What's next?</Typography>
        <Typography type="body22">
          We will send an email to{" "}
          <Typography type="span" fontWeight="semibold">
            {checkoutState.email.value}
          </Typography>{" "}
          when we have an update on the release.
        </Typography>
      </ContentWrapper>
    </SectionWrapper>
  );
};
