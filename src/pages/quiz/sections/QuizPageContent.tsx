import {
  ContentWrapper,
  SectionWrapper,
  Typography,
  Button,
  Box,
  FlexWrapper,
} from "components";
import React from "react";
import styled from "styled-components/macro";
import { QuizAnswerValue, QuizQuestionProps } from "typings/quizTypes";
import { useSelector, useDispatch } from "react-redux";
import {
  QuizAnswers,
  setQuizAnswers,
  setQuizComplete,
  setQuizPage,
} from "state/quiz";
import { QUIZ_QUESTIONS } from "../questions";
import { navigate } from "gatsby";
import { postQuizAnswersAction } from "state/quiz/sagasActions";
import { AppState } from "state/types";
import { selectQuizData } from "state/selectors";

export const QuizPageContent: React.FC<QuizQuestionProps> = ({
  questionName,
  question,
  description,
  options,
  multiSelect,
  picture,
  footer,
  buttons,
}) => {
  const quizState = useSelector(selectQuizData);
  const dispatch = useDispatch();

  const finishQuiz = () => {
    dispatch(setQuizComplete(true));
    dispatch(postQuizAnswersAction(quizState.answers));
    navigate("/checkout");
  };

  const handleNavigation = () => {
    if (quizState.page + 1 === QUIZ_QUESTIONS.length) {
      finishQuiz();
    } else {
      dispatch(setQuizPage(quizState.page + 1));
    }
  };

  const handleClick = (value: QuizAnswerValue) => {
    if (multiSelect) {
      const selected = quizState.answers[questionName] as string[] | undefined;
      dispatch(
        setQuizAnswers(
          selected
            ? selected.includes(value as string)
              ? {
                  [questionName]: selected.filter((option) => option != value),
                }
              : {
                  [questionName]: [...selected, value],
                }
            : {
                [questionName]: [value],
              }
        )
      );
    } else {
      dispatch(
        setQuizAnswers({
          [questionName]: value,
        })
      );
      handleNavigation();
    }
  };
  return (
    <SectionWrapper>
      <QuizPageContentWrapper>
        <Typography type="h5">{question}</Typography>
        <Typography>{description}</Typography>
        <QuizOptionsWrapper>
          {options?.map(({ label, value, buttonVariant }) => {
            const selectedAnswers = quizState.answers[questionName];
            const isSelected =
              (multiSelect &&
                selectedAnswers &&
                (selectedAnswers as string[]).includes(value as string)) ||
              selectedAnswers === value;

            return (
              <Button
                key={label}
                variant={isSelected ? "quizSelected" : buttonVariant}
                onClick={() => handleClick(value)}
              >
                {label}
              </Button>
            );
          })}
        </QuizOptionsWrapper>
        {multiSelect &&
          buttons.map(({ label, buttonVariant }) => (
            <Button
              key={label}
              maxWidth="18rem"
              variant={buttonVariant}
              onClick={handleNavigation}
            >
              {label}
            </Button>
          ))}
        <Typography>{footer}</Typography>
      </QuizPageContentWrapper>
    </SectionWrapper>
  );
};

const QuizPageContentWrapper = styled(ContentWrapper)`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  * {
    margin: 1rem;
  }
`;

const QuizOptionsWrapper = styled(ContentWrapper)`
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  * {
    margin: 0.5rem;
  }
`;
