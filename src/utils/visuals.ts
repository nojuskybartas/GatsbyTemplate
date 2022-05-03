import students from "assets/images/students.png";
import gatsbyImg from "assets/images/icon.png";
import foodPlate from "assets/images/foodPlate.png";
import foodielandLogo from "assets/images/FoodielandLogo.png";
import facebook from "assets/images/facebook.png";
import instagram from "assets/images/instagram.png";
import twitter from "assets/images/twitter.png";
import papyrus from "assets/images/papyrus.png";
import timer from "assets/images/Timer.png";
import forkKnife from "assets/images/ForkKnife.png";
import badge from "assets/images/Badge.png";
import ellipse from "assets/images/Ellipse.png";
import playCircle from "assets/images/PlayCircle.png";

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
  students,
  gatsbyImg,
  foodPlate,
  foodielandLogo,
  facebook,
  instagram,
  twitter,
  papyrus,
  timer,
  forkKnife,
  badge,
  ellipse,
  playCircle,
};
