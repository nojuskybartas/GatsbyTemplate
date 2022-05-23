import { rootReducer } from "state/store";

export interface MailingListData {
  email: string;
}

export interface CheckoutState {
  isSignedUp: boolean;
  email: {
    value: string;
    isValid: boolean;
  };
}
