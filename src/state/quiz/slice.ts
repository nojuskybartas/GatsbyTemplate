import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizAnswers, QuizState } from "./types";

export const initialState: QuizState = {
  page: 0,
  answers: {} as QuizAnswers,
  complete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizAnswers: (state, actions: PayloadAction<Partial<QuizAnswers>>) => {
      if (actions.payload) {
        state.answers = {
          ...state.answers,
          ...actions.payload,
        };
      }
    },
    setQuizPage: (state, actions: PayloadAction<number>) => {
      state.page = actions.payload;
    },
    setQuizComplete: (state, actions: PayloadAction<boolean>) => {
      if (actions.payload) {
        state.complete = actions.payload;
      }
    },
  },
});

export const { setQuizAnswers, setQuizPage, setQuizComplete } =
  quizSlice.actions;
