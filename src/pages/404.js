import {
  FlexWrapper,
  Header,
  Image,
  PageWrapper,
  Typography,
} from "components";
import * as React from "react";

const NotFoundPage = () => (
  <PageWrapper title="Not Found">
    <Header />
    <FlexWrapper flexDirection="column" alignItems="center" textAlign="center">
      <Image
        src="image404"
        alt="Page not found!"
        maxHeight="70vh"
        maxWidth="100%"
      />
      <Typography type="h3" marginTop={{ _: "s48", ltablet: "s0" }}>
        Ooops! This page doesn't exist 👀
      </Typography>
    </FlexWrapper>
  </PageWrapper>
);

export default NotFoundPage;
