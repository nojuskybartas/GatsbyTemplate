import {
  Header,
  QuizPagination,
  FlexWrapper,
  PageWrapper,
  ContentWrapper,
} from "components";
import { navigate } from "gatsby";
import React, { useEffect } from "react";
import { QUIZ_QUESTIONS } from "./elements/questions";
import { QuizPageContent } from "./sections/QuizPageContent";
import { useSelector } from "react-redux";
import { selectQuizData } from "state/selectors";

const Quiz: React.FC = () => {
  const quizState = useSelector(selectQuizData);

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
