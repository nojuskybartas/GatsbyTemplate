import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutState } from "./types";
import { postMailingListSignUp } from "./thunks";

export const initialState: CheckoutState = {
  isSignedUp: false,
  email: {
    value: "",
    isValid: false,
    posted: null,
  },
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setEmailValue: (state, actions: PayloadAction<string>) => {
      state.email.value = actions.payload || "";
    },
    setEmailIsValid: (state, actions: PayloadAction<boolean>) => {
      state.email.isValid = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postMailingListSignUp.fulfilled, (state) => {
      state.email.posted = "success";
      state.isSignedUp = true;
    });
    builder.addCase(postMailingListSignUp.pending, (state) => {
      state.email.posted = "loading";
    });
    builder.addCase(postMailingListSignUp.rejected, (state) => {
      state.email.posted = "fail";
      state.isSignedUp = false;
    });
  },
});

export const { setEmailValue, setEmailIsValid } = checkoutSlice.actions;
