import { applyTextType } from "components/typography/TypographyHelpers";
import styled from "styled-components/macro";
import { variant } from "styled-system";
import { theme } from "styles/theme";
import { BaseButton, DefaultButtonProps } from "./elements/BaseButton";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "accent"
  | "clear"
  | "inactive"
  | "quizPrimary"
  | "quizSecondary"
  | "quizSelected";

export interface ButtonProps extends DefaultButtonProps {
  variant: ButtonVariants;
}

export const Button = styled(BaseButton)<ButtonProps>(
  {
    boxShadow: "1px 2px 10px 1px #00000060",
    borderRadius: "0.75rem",
    height: "2.5rem",
    minWidth: "9rem",
    ":hover": {
      boxShadow: "1px 2px 10px 0px #00000030",
    },
    transition: "ease-out",
    transitionDuration: "300ms",
  },
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "primary",
      },
      secondary: {
        color: "white",
        bg: "secondary",
      },
      accent: {
        color: "white",
        bg: "accent",
      },
      clear: {
        color: "black",
        bg: "transparent",
        boxShadow: "1px 2px 10px 0px #00000000",
      },
      inactive: {
        color: "black",
      },
      quizPrimary: {
        color: "black",
        bg: "neutral",
        maxWidth: "18rem",
        border: `2px solid transparent`,
        boxShadow: "1px 2px 10px 0px #00000010",
      },
      quizSecondary: {
        color: "black",
        bg: "neutral",
        maxWidth: "18rem",
        border: `2px solid transparent`,
        boxShadow: "1px 2px 10px 0px #00000010",
      },
      quizSelected: {
        color: "black",
        bg: "neutral",
        maxWidth: "18rem",
        border: `2px solid ${theme.colors.accent}`,
        boxShadow: "1px 2px 10px 0px #00000000",
      },
    },
  }),
  applyTextType("body16", theme)
);
