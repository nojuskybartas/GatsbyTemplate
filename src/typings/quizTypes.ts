import { ButtonVariants } from "components";
import { QuizAnswers } from "state/quiz";

export interface QuizOptionProps {
  label: string;
  value: QuizAnswerValue;
  buttonVariant: ButtonVariants;
  explanation?: string;
}

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
      options: QuizOptionProps[];
      buttons: {
        label: string;
        buttonVariant: ButtonVariants;
      }[];
    }
  | {
      multiSelect?: false;
      options: QuizOptionProps[];
      buttons?: null;
    };

export type QuizQuestionProps = QuizVariantProps & QuizCommonProps;

export type QuizAnswerValue = string | number | boolean;
