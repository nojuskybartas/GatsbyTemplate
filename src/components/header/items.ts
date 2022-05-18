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
  },
  {
    label: "About",
    link: "/",
  },
  {
    label: "FAQ",
    link: "/",
  },
  {
    label: "Privacy Policy",
    link: "/",
  },
  {
    label: "Start Now",
    link: "/quiz",
    buttonVariant: "accent",
    hiddenInPages: ["/quiz"],
  },
];
