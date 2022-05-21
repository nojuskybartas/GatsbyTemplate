import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { quizSlice, QuizState } from "state/quiz";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

export interface RootState {
  quiz: QuizState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  quiz: quizSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
