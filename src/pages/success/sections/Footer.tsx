import { ContentWrapper, SectionWrapper, Typography } from "components";
import React from "react";

export const Footer = () => (
  <SectionWrapper>
    <ContentWrapper textAlign="center">
      <Typography type="h5">What's next?</Typography>
      <Typography type="body22">
        We will send you an email when we have an update on the release.
      </Typography>
    </ContentWrapper>
  </SectionWrapper>
);
