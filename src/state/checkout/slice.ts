import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutState } from "./types";

export const initialState: CheckoutState = {
  isSignedUp: false,
  email: {
    value: "",
    isValid: false,
  },
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setIsSignedUp: (state, actions: PayloadAction<boolean>) => {
      if (actions.payload) {
        state.isSignedUp = actions.payload;
      }
    },
    setEmailValue: (state, actions: PayloadAction<string>) => {
      if (actions.payload) {
        state.email.value = actions.payload;
      }
    },
    setEmailIsValid: (state, actions: PayloadAction<boolean>) => {
      if (actions.payload) {
        state.email.isValid = actions.payload;
      }
    },
  },
});

export const { setIsSignedUp, setEmailValue, setEmailIsValid } =
  checkoutSlice.actions;
