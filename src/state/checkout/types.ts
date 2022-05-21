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

export interface MailingListData {
  email: string;
}

export interface CheckoutState {
  // sections: CheckoutSections;
  isSignedUp: boolean;
  email: {
    value: string;
    isValid: boolean;
  };
}
