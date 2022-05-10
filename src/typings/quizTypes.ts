import { ButtonVariants } from "components";
import { QuizAnswers } from "state/quiz";

type QuizCommonProps = {
  question?: string;
  description?: string;
  footer?: string;
  picture?: string;
  questionName: keyof QuizAnswers;
};

type QuizVariantProps =
  | {
      multiSelect: true;
      options: {
        label: string;
        value: QuizAnswerValue;
        buttonVariant: ButtonVariants;
      }[];
      buttons: {
        label: string;
        buttonVariant: ButtonVariants;
      }[];
    }
  | {
      multiSelect?: false;
      options?: {
        label: string;
        value: QuizAnswerValue;
        buttonVariant: ButtonVariants;
      }[];
      buttons?: null;
    };

export type QuizQuestionProps = QuizVariantProps & QuizCommonProps;

export type QuizAnswerValue = string | number | boolean;
