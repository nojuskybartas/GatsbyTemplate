import { rootReducer } from "state/store";

export interface QuizAnswers {
  importantCriteria: string;
  preferPlanning: boolean;
  wantShortFrequentTravel: boolean;
  favouriteFlightCompanies: string[];
  wantPersonalizedPlacesToStay: boolean;
  wantPersonalizedAmazingActivities: boolean;
  wantDifferentCultures: boolean;
  wantCommunity: boolean;
}

export interface QuizState {
  page: number;
  answers: QuizAnswers;
  complete: boolean;
  posted: "loading" | "success" | "fail" | null;
}
