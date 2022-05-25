import React from "react";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, FlexWrapper, Typography } from "components";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { mobile, tablet } from "styles/breakpoints";

export const OptionExplanation = ({ explanation }: { explanation?: string }) =>
  !explanation ? null : (
    <WrapperStyled>
      <FontAwesomeIcon icon={faCircleQuestion} color={theme.colors.primary} />
      <Box id="option_explanation_text">
        <Typography>{explanation}</Typography>
      </Box>
    </WrapperStyled>
  );

const WrapperStyled = styled(FlexWrapper)`
  position: absolute;
  margin: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  opacity: 70%;
  transition: all 0.5s ease-in;

  #option_explanation_text {
    opacity: 0;
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(2.5rem);
    width: 10rem;
    height: fit-content;
    border-radius: 0.75rem;
    padding: 0.5rem;
    background-color: ${theme.colors.primary};
    box-shadow: 1px 2px 10px 1px #00000060;
    text-align: left;

    @media ${tablet} {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transform: translateX(-100%) translateY(-100%);
      width: 10rem;
      padding: 1rem;
    }
  }

  :hover,
  :focus {
    opacity: 100%;
    #option_explanation_text {
      display: block;
      opacity: 100%;
    }
  }
`;
