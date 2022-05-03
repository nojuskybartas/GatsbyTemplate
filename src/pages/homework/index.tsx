import React from "react";
import { FeaturedRecipe, FeaturedRecipeProps, Header } from "./sections";

const featuredRecipe: FeaturedRecipeProps = {
  title: "Spicy delicious chicken wings",
  description:
    "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
  prepTime: "30 Minutes",
  mainIngredient: "Chicken",
  authorName: "John Smith",
  authorImage: "ellipse",
  date: "15 March 2022",
};

const Homework = () => (
  <>
    <Header />
    <FeaturedRecipe {...featuredRecipe} />
  </>
);

export default Homework;
