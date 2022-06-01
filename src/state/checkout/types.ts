import { rootReducer } from "state/store";

export interface CheckoutState {
  isSignedUp: boolean;
  email: {
    value: string;
    isValid: boolean;
    posted: "loading" | "success" | "fail" | null;
  };
}
