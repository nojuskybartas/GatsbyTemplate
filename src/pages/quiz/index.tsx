import {
  Header,
  QuizPagination,
  FlexWrapper,
  PageWrapper,
  ContentWrapper,
} from "components";
import { navigate } from "gatsby";
import React, { useEffect } from "react";
import { QUIZ_QUESTIONS } from "./questions";
import { QuizPageContent } from "./sections/QuizPageContent";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "state/quiz";

const Quiz: React.FC = () => {
  const quizState = useSelector((state: AppState) => state.quiz);

  useEffect(() => {
    if (quizState.complete) navigate("/checkout");
  }, []);

  return (
    <PageWrapper>
      <Header showMenuItems={false} />
      <FlexWrapper as={ContentWrapper} flex="1 1 auto" flexDirection="column">
        <QuizPageContent {...QUIZ_QUESTIONS[quizState.page]} />
      </FlexWrapper>
      <QuizPagination />
    </PageWrapper>
  );
};

export default Quiz;
