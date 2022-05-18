import { rootReducer } from "state/store";

export interface CheckoutSections {
  benefits: {
    label: string;
    description: string;
  }[];
  features: {
    label: string;
  }[];
  advantages: {
    label: string;
  }[];
  algorithm: {
    label: string;
    description: string;
  }[];
  stepsToUse: {
    description: string;
  }[];
  missionStatement: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface CheckoutState {
  sections: CheckoutSections;
}

export type AppState = ReturnType<typeof rootReducer>;
