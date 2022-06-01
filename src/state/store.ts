import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { quizSlice, QuizState } from "state/quiz";
import { checkoutSlice, CheckoutState } from "state/checkout";

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

export const store = configureStore({
  reducer: rootReducer,
});
