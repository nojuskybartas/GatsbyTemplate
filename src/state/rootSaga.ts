import { all } from "redux-saga/effects";
import { checkoutSagas } from "./checkout";
import { quizSagas } from "./quiz/sagas";

export default function* rootSaga(): Generator {
  yield all([quizSagas(), checkoutSagas()]);
}
