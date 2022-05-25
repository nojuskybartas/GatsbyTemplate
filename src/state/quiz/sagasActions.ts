import { createAction } from "@reduxjs/toolkit";
import { QuizAnswers } from "./types";

const postQuizAnswersPrefix = "quiz/POST_ANSWERS";

export const postQuizAnswersAction = createAction<QuizAnswers>(
  postQuizAnswersPrefix
);
