import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { quizSlice, QuizState } from "state/quiz";

export interface RootState {
  quiz: QuizState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  quiz: quizSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
});
