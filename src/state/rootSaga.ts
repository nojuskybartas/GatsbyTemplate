import { all } from "redux-saga/effects";
import { quizSagas } from "./quiz/sagas";

export default function* rootSaga(): Generator {
  yield all([quizSagas()]);
}
