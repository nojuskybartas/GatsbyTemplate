import {
  BaseButton,
  Box,
  FlexWrapper,
  Image,
  SectionWrapper,
  Typography,
} from "components";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export interface FeaturedRecipeProps {
  title: string;
  description: string;
  prepTime: string;
  mainIngredient: string;
  authorName: string;
  authorImage: string;
  date: string;
}

export const FeaturedRecipe: React.FC<FeaturedRecipeProps> = ({
  title,
  description,
  prepTime,
  mainIngredient,
  authorName,
  authorImage,
  date,
}) => (
  <SectionWrapper>
    <FlexWrapper
      width="100%"
      height="40rem"
      borderRadius="br32"
      overflow="hidden"
      justifyContent="space-between"
    >
      <BoxStyled p="s48">
        <Box
          position="absolute"
          top="2rem"
          left="90%"
          display={{ _: "none", ltablet: "inline" }}
        >
          <Image height="9.375rem" width="9.375rem" src="badge" alt="badge" />
        </Box>
        <HotRecipesBox>
          <Image height="1.5rem" width="1.5rem" src="papyrus" alt="papyrus" />
          Hot Recipes
        </HotRecipesBox>
        <Typography
          py="s16"
          fontSize={{ _: "fs32", desktop: "fs64" }}
          fontWeight="fw700"
        >
          {title}
        </Typography>
        <Typography type="body16">{description}</Typography>
        <FlexWrapper py="s32">
          <InfoBox>
            <Image height="1.5rem" width="1.5rem" src="timer" alt="timer" />
            {prepTime}
          </InfoBox>
          <InfoBox>
            <Image
              height="1.5rem"
              width="1.5rem"
              src="forkKnife"
              alt="forkKnife"
            />
            {mainIngredient}
          </InfoBox>
        </FlexWrapper>
        <FlexWrapper
          width="100%"
          height="100%"
          alignItems={{ _: "center", ltablet: "end" }}
          justifyContent={{ _: "space-evenly", ltablet: "space-between" }}
          alignSelf="flex-end"
          flexDirection={{ _: "column", ltablet: "row" }}
        >
          <FlexWrapper alignItems="center">
            <Image
              height="3.125rem"
              width="3.125rem"
              src={authorImage}
              alt={authorImage}
            />
            <NameBox>
              <Typography type="h3">{authorName}</Typography>
              <Typography type="body16">{date}</Typography>
            </NameBox>
          </FlexWrapper>
          <ViewRecipesButton>
            View Recipes
            <Image
              height="1.5rem"
              width="1.5rem"
              src="playCircle"
              alt="playCircle"
            />
          </ViewRecipesButton>
        </FlexWrapper>
      </BoxStyled>
      <Image height="40rem" width="40rem" src="foodPlate" alt="foodPlate" />
    </FlexWrapper>
  </SectionWrapper>
);

const BoxStyled = styled(FlexWrapper)`
  background-color: ${theme.colors.blue};
  width: 100%;
  height: 40rem;
  flex-direction: column;
  position: relative;
`;

const HotRecipesBox = styled(FlexWrapper)`
  width: 9.75rem;
  height: 2.8125rem;
  padding: 1.25rem;
  border-radius: 1.625rem;
  background-color: ${theme.colors.white};
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 12px #11111111;
  cursor: pointer;
`;

const InfoBox = styled(FlexWrapper)`
  background-color: #afb1c554;
  border-radius: 1.625rem;
  width: fit-content;
  height: 2.5rem;
  padding: 1.25rem;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
`;

const NameBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
`;

const ViewRecipesButton = styled.div`
  width: 12.5rem;
  height: 3.75rem;
  background-color: #000000;
  padding: 1rem;
  color: #ffffff;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  :hover {
    background-color: #000000c8;
  }
`;
