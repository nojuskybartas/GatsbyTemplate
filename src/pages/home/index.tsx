import React, { useState } from "react";
import styled from "styled-components/macro";
import { Box, Image, SectionWrapper, Typography } from "components";
import { theme } from "styles/theme";
import { StaticImage } from "gatsby-plugin-image";
import { Input } from "components/input/Input";

type People = "Viktorija" | "Vidmis" | "Martyna" | "Nojus"; //NOTE: Type might be not only strings

enum Foods {
  GRYBAI = "grybukai",
  BURGERIUKAI = "burgeriuksai",
  CEPAI = "cepelinai",
  SALDUMYNAI = "sokoladai",
}

interface Foodies {
  id: number;
  name: People;
  food: Foods;
}

interface FoodiesExt extends Foodies {
  hateFood?: string; //NOTE: ? means optional
}

const FOODS: FoodiesExt[] = [
  {
    id: 1,
    name: "Viktorija",
    food: Foods.GRYBAI,
  },
  {
    id: 2,
    name: "Vidmis",
    food: Foods.BURGERIUKAI,
  },
  {
    id: 3,
    name: "Martyna",
    food: Foods.SALDUMYNAI,
  },
  {
    id: 4,
    name: "Nojus",
    food: Foods.CEPAI,
  },
];

const Home: React.FC = () => {
  //NOTE: React.FC means functional React component

  return (
    <SectionWrapper>
      <Box
        backgroundColor={{ _: "secondary", ltablet: "primary" }}
        minWidth="100vw"
      >
        <Typography type="h1" textAlign="center">
          fooood
        </Typography>
        <Image maxHeight="6.25rem" src="gatsbyImg" alt="gatsby" />
        <StaticImage
          src="../../assets/images/students.png"
          alt="studenciukai"
          placeholder="tracedSVG"
          draggable="false"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        />
        <Input
          minWidth="70vw"
          minHeight="5vh"
          backgroundColor="accent"
          label="number input"
          type="number"
          min={4}
          max={10}
          onChange={(e) => console.log(e)}
        />
      </Box>
    </SectionWrapper>
  );
};

export default Home;
