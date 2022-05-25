import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { navigate } from "gatsby";
import axios from "../../lib/axios";
import { takeEvery, put, call, delay } from "redux-saga/effects";
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
    // TODO: setIsSignedUp(true) && navigate to success page
    yield put(setIsSignedUp(true));
    // yield call(navigate, "/success");
  } catch (e) {
    // TODO: setIsSignedUp(false) && retry this action.
    const errResp = (e as AxiosError).response;
    yield put(setIsSignedUp(false));
    // for (let i = 0; i < 5; i++) {
    //   yield delay(1000);
    //   yield put(postMailingListSignUpAction(payload));
    // }
  }
}

export function* checkoutSagas() {
  yield takeEvery(postMailingListSignUpAction, postMailingListSignUpSaga);
}
