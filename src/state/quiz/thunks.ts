import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import axios from "../../lib/axios";
import { QuizAnswers } from "./types";

const postQuizAnswersPrefix = "quiz/POST_ANSWERS";

export const postQuizAnswers = createAsyncThunk(
  postQuizAnswersPrefix,
  async (quizAnswers: QuizAnswers, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axios({
        method: "post",
        url: "/save_answers",
        data: quizAnswers,
      });
      window?.gtag("event", "complete_quiz", quizAnswers);
      return response;
    } catch (e) {
      const errResp = (e as AxiosError).response;
      if (errResp) {
        return rejectWithValue(errResp.statusText);
      }
    }
  }
);
