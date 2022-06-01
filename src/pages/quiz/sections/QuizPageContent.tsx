import {
  ContentWrapper,
  SectionWrapper,
  Typography,
  Button,
  Image,
} from "components";
import React from "react";
import styled from "styled-components/macro";
import { QuizAnswerValue, QuizQuestionProps } from "typings/quizTypes";
import { useSelector } from "react-redux";
import { postQuizAnswers, setQuizAnswers, setQuizPage } from "state/quiz";
import { QUIZ_QUESTIONS } from "../elements/questions";
import { navigate } from "gatsby";
import { selectQuizData } from "state/selectors";
import { OptionExplanation } from "../elements/OptionExplanation";
import { useAppDispatch } from "state";

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
  const dispatch = useAppDispatch();

  const finishQuiz = () => {
    dispatch(postQuizAnswers(quizState.answers));
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
        {picture && <Image src={picture} alt={picture} />}
        <QuizOptionsWrapper>
          {options?.map(({ label, value, buttonVariant, explanation }) => {
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
                <OptionExplanation explanation={explanation} />
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
        <Typography marginTop="s48">{footer}</Typography>
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
    margin: 0.4rem;
  }
`;
