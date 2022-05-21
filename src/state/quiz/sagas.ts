import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import axios from "lib/axios";
import { postQuizAnswersAction } from "./sagasActions";
import { takeEvery, take, call } from "redux-saga/effects";
import { QuizAnswers } from ".";

export function* postQuizAnswersSaga({ payload }: PayloadAction<QuizAnswers>) {
  try {
    const response: AxiosResponse = yield axios({
      method: "post",
      url: "/save_answers",
      data: payload,
    });
  } catch (e) {
    const errResp = (e as AxiosError).response;
    if (errResp) {
      return console.log(errResp);
      // yield put(setStatus('error'))
    }
  }
}

export function* quizSagas() {
  yield takeEvery(postQuizAnswersAction, postQuizAnswersSaga);
}
