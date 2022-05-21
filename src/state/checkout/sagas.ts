import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import axios from "lib/axios";
import { takeEvery, put } from "redux-saga/effects";
import { postMailingListSignUpAction } from "./sagasActions";
import { setIsSignedUp } from "./slice";
import { MailingListData } from "./types";

export function* postMailingListSignUpSaga({
  payload,
}: PayloadAction<MailingListData>) {
  try {
    const response: AxiosResponse = yield axios({
      method: "post",
      url: "/save_email",
      data: payload,
    });
  } catch (e) {
    const errResp = (e as AxiosError).response;
    if (errResp) {
      console.log(errResp);
      yield put(setIsSignedUp(false));
    }
  }
}

export function* checkoutSagas() {
  yield takeEvery(postMailingListSignUpAction, postMailingListSignUpSaga);
}
