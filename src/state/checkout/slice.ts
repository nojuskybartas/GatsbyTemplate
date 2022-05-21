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
      state.isSignedUp = actions.payload;
    },
    setEmailValue: (state, actions: PayloadAction<string>) => {
      state.email.value = actions.payload;
    },
    setEmailIsValid: (state, actions: PayloadAction<boolean>) => {
      state.email.isValid = actions.payload;
    },
  },
});

export const { setIsSignedUp, setEmailValue, setEmailIsValid } =
  checkoutSlice.actions;
