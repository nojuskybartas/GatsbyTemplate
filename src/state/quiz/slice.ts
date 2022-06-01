import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postQuizAnswers } from "./thunks";
import { QuizAnswers, QuizState } from "./types";

export const initialState: QuizState = {
  page: 0,
  answers: {} as QuizAnswers,
  complete: false,
  posted: null,
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
    // setQuizComplete: (state, actions: PayloadAction<boolean>) => {
    //   if (actions.payload) {
    //     state.complete = actions.payload;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(postQuizAnswers.fulfilled, (state) => {
      state.posted = "success";
    });
    builder.addCase(postQuizAnswers.pending, (state) => {
      state.posted = "loading";
    });
    builder.addCase(postQuizAnswers.rejected, (state) => {
      state.posted = "fail";
    });
  },
});

export const { setQuizAnswers, setQuizPage } = quizSlice.actions;
