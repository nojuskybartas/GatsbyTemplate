import { QuizQuestionProps } from "typings/quizTypes";

export const QUIZ_QUESTIONS: QuizQuestionProps[] = [
  {
    questionName: "importantCriteria",
    question: "When travelling, what matters to you most?",
    multiSelect: true,
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
        label: "Intensity (adventures)",
        value: "intensity",
        buttonVariant: "quizPrimary",
      },
      {
        label: "Social aspect (company)",
        value: "social",
        buttonVariant: "quizPrimary",
      },
      {
        label: "I want it to be unique",
        value: "uniqueness",
        buttonVariant: "quizPrimary",
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
    questionName: "preferPlanning",
    question: "Do you prefer to plan your travels?",
    options: [
      {
        label: "I'd happily trust someone else to do it",
        value: false,
        buttonVariant: "quizSecondary",
      },
      {
        label: "Yes",
        value: true,
        buttonVariant: "quizPrimary",
      },
    ],
    description:
      "This includes the full planning of accomodation, transport, activities and culinary experiences.",
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
    description:
      "Imagine you could go travel to a new country, eg. every second weekend... Wouldn't that be wonderful?",
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
      {
        label: "EasyJet",
        value: "easyjet",
        buttonVariant: "quizSecondary",
      },
      {
        label: "Transavia",
        value: "transavia",
        buttonVariant: "quizSecondary",
      },
      {
        label: "Lufthansa",
        value: "lufthansa",
        buttonVariant: "quizSecondary",
      },
      {
        label: "Austrian Airlines",
        value: "austrian",
        buttonVariant: "quizSecondary",
      },
      {
        label: "Swiss Airlines",
        value: "swiss",
        buttonVariant: "quizSecondary",
      },
      {
        label: "KLM",
        value: "klm",
        buttonVariant: "quizSecondary",
      },
    ],
    buttons: [
      {
        label: "Continue",
        buttonVariant: "accent",
      },
    ],
    footer:
      "We want to find the most-liked airlines, so that we can offer our customers the best experience possible - start to finish.",
  },
  {
    questionName: "wantPersonalizedPlacesToStay",
    question:
      "Would you like to have someone pick you places to stay, for you?",
    options: [
      {
        label: "Yes!",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "Not too important",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "wantPersonalizedAmazingActivities",
    question:
      "Would you like to be suggested a personalized list of activities/experiences to do for every trip?",
    options: [
      {
        label: "Yes!",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "Not too important",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
  },
  {
    questionName: "wantDifferentCultures",
    question:
      "Do you prefer to travel to places you've already been to, or explore new ones?",
    options: [
      {
        label: "New",
        value: true,
        buttonVariant: "quizPrimary",
      },
      {
        label: "Doesn't really matter where",
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
        label: "Not too important",
        value: false,
        buttonVariant: "quizSecondary",
      },
    ],
    footer:
      "We want to bring a community of adventurous & spontaneous travellers together, so that we can explore the wonders of this world together.",
  },
];
