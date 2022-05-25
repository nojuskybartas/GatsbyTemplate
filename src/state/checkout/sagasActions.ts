import { createAction } from "@reduxjs/toolkit";
import { MailingListData } from "./types";

const postMailingListSignUpPrefix = "checkout/POST_EMAIL";

export const postMailingListSignUpAction = createAction<MailingListData>(
  postMailingListSignUpPrefix
);
