import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizAnswers } from "./types";

export const initialState = {
  page: 0,
  answers: {} as QuizAnswers,
  complete: false,
};

export const quizSlice = createSlice({
  name: "user",
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
      state.complete = actions.payload;
    },
  },
});

export const { setQuizAnswers, setQuizPage, setQuizComplete } =
  quizSlice.actions;
