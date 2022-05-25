import { ButtonVariants } from "components/buttons";

export interface MenuItemProps {
  label: string;
  link: string;
  buttonVariant?: ButtonVariants;
  hiddenInPages?: string[];
}

export const MENU_ITEMS: MenuItemProps[] = [
  {
    label: "Home",
    link: "/",
    hiddenInPages: ["/"],
  },
  {
    label: "Benefits",
    link: "/checkout#Benefits",
  },
  {
    label: "Algorithm",
    link: "/checkout#PersonalizedAlgorithm",
  },
  {
    label: "FAQ",
    link: "/checkout#FAQ",
  },
  {
    label: "Sign Up Now",
    link: "/checkout#CTA",
  },
  {
    label: "Start Now",
    link: "/quiz",
    buttonVariant: "accent",
    hiddenInPages: ["/quiz"],
  },
];
