import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizAnswers } from "./types";

const initialState = {
  page: 0,
  answers: {} as QuizAnswers,
  complete: false,
};

const quizSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuizAnswers: (state, actions: PayloadAction<Partial<QuizAnswers>>) => {
      state.answers = {
        ...state.answers,
        ...actions.payload,
      };
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
export { quizSlice };
