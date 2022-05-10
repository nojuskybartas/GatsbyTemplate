import { QuizQuestionProps } from "typings/quizTypes";

export const QUIZ_QUESTIONS: QuizQuestionProps[] = [
  {
    questionName: "importantCriteria",
    question: "When travelling, what matters to you most?",
    options: [
      {
        label: "Location",
        value: "location",
        buttonVariant: "quizPrimary",
      },
      {
        label: "Price",
        value: "price",
        buttonVariant: "quizPrimary",
      },
      {
        label: "Duration of the trip",
        value: "duration",
        buttonVariant: "quizPrimary",
      },
      {
        label: "Intensity",
        value: "intensity",
        buttonVariant: "quizPrimary",
      },
      {
        label: "I want it to be unique",
        value: "uniqueness",
        buttonVariant: "quizPrimary",
      },
    ],
  },
  {
    questionName: "preferPlanning",
    question: "Do you prefer to plan your travels?",
    options: [
      {
        label: "Yes",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "I don't need to",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "wantShortFrequentTravel",
    question:
      "What would you say about going on shorter trips, but more frequently?",
    options: [
      {
        label: "I'd love that!",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "I don't like this idea",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "favouriteFlightCompanies",
    question: "With what kind of flight companies have you traveled with?",
    multiSelect: true,
    options: [
      {
        label: "Ryanair",
        value: "ryanair",
        buttonVariant: "quizSecondary",
      },
      {
        label: "Wizzair",
        value: "wizzair",
        buttonVariant: "quizSecondary",
      },
    ],
    buttons: [
      {
        label: "Continue",
        buttonVariant: "accent",
      },
    ],
  },
  {
    questionName: "wantPersonalizedPlacesToStay",
    question: "Do you want personalized places to stay?",
    options: [
      {
        label: "Yes",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "No",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "wantPersonalizedAmazingActivities",
    question: "Do you want personalized amazing activities?",
    options: [
      {
        label: "Yes",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "No",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "wantDifferentCultures",
    question: "Do you want to experience different tasty cultures?",
    options: [
      {
        label: "Yes",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "No",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "wantCommunity",
    question:
      "Do you want to meet more people just as spontaneous and adventurous as you are?",
    options: [
      {
        label: "Yes!",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "No",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
];
