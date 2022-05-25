import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { quizSlice, QuizState } from "state/quiz";
import { checkoutSlice, CheckoutState } from "state/checkout";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

export interface RootState {
  quiz: QuizState;
  checkout: CheckoutState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  quiz: quizSlice.reducer,
  checkout: checkoutSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
