import { FlexWrapper, Box, Typography } from "components";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "components/containers/Container";
import { useSelector, useDispatch } from "react-redux";
import { AppState, setQuizPage } from "state/quiz";
import { QUIZ_QUESTIONS } from "pages/quiz/questions";
import { navigate } from "gatsby";
import styled from "styled-components/macro";

export const QuizPagination: React.FC = () => {
  const quizState = useSelector((state: AppState) => state.quiz);
  const dispatch = useDispatch();

  const handleBackwardsClick = () => {
    if (quizState.page === 0) {
      navigate("/");
    } else {
      dispatch(setQuizPage(quizState.page - 1));
    }
  };

  return (
    <BoxStyled>
      <Container>
        <FlexWrapper
          justifyContent="space-between"
          py="s16"
          alignItems="center"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="1x"
            onClick={handleBackwardsClick}
            style={{ cursor: "pointer" }}
          />

          <Typography fontWeight="fw700">
            {quizState.page + 1 + " of " + QUIZ_QUESTIONS.length}
          </Typography>
        </FlexWrapper>
      </Container>
    </BoxStyled>
  );
};

const BoxStyled = styled(Box)`
  position: sticky;
  bottom: 0;
  backdrop-filter: blur(0.5rem);
`;