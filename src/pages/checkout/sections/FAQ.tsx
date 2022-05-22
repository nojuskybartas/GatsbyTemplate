import {
  Box,
  ContentWrapper,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import { FloatingContainer } from "../elements";
import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components/macro";

const FAQs = [
  {
    question: "Where do the recommended trips come from?",
    answer:
      "Our AI-driven algorithm finds the cheapest flight, accommodation & activity combos, and recommends to you the ones that fit your interests",
  },
  {
    question: "What happens after I order?",
    answer:
      "We book the flights, accommodation, and activities for you. After we've received the payment, we will place the tickets and any other important information in the app",
  },
  {
    question: "What happens if I can't go on with the trip?",
    answer: "Please contact us for more detailed information",
  },
  {
    question: "Can I cancel an already booked trip?",
    answer:
      "You can get a partial refund - some items are non-refundable (e.g. the flight tickets), but it is usually possible to cancel accommodation & activity bookings with no extra fee",
  },
];

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(FAQs[0].question);

  return (
    <SectionWrapper id="FAQ">
      <ContentWrapper>
        <FloatingContainer>
          <Typography type="h5" textAlign="center">
            People often ask us
          </Typography>

          <FlexWrapper
            flexDirection="column"
            alignItems="center"
            marginTop="s32"
          >
            {FAQs.map(({ question, answer }) => (
              <QuestionBox
                key={question}
                isOpen={openQuestion === question}
                onClick={() => setOpenQuestion(question)}
              >
                <Typography fontWeight="semibold">{question}</Typography>
                <Box id="answer">
                  <Typography>{answer}</Typography>
                </Box>
              </QuestionBox>
            ))}
          </FlexWrapper>
        </FloatingContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};

interface QuestionBoxProps {
  isOpen: boolean;
}

const QuestionBox = styled(Box)<QuestionBoxProps>`
  border: 2px solid black;
  width: 80%;
  padding: 1.5rem;
  margin-top: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;

  #answer {
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    max-height: ${({ isOpen }) => (isOpen ? "12rem" : "0")};
    overflow: ${({ isOpen }) => (isOpen ? "inline" : "hidden")};
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    transition: all 0.6s;
  }
`;
