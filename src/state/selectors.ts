import { AppState } from "./types";

export const selectData = (state: AppState) => state;
export const selectQuizData = (state: AppState) => state.quiz;
export const selectCheckoutData = (state: AppState) => state.checkout;
