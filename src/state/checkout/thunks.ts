import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { navigate } from "gatsby";
import axios from "../../lib/axios";

const postMailingListSignUpPrefix = "checkout/POST_EMAIL";

export const postMailingListSignUp = createAsyncThunk(
  postMailingListSignUpPrefix,
  async (email: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios({
        method: "post",
        url: "/save_email",
        data: { email: email },
      });
      navigate("/success");
      window?.gtag("event", "waitinglist_signup", {});
    } catch (e) {
      // TODO: retry this action.
      const errResp = (e as AxiosError).response;
      if (errResp) {
        return rejectWithValue(errResp.statusText);
      }
    }
  }
);
