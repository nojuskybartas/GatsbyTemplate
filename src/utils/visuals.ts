import culture from "assets/images/culture.jpg";
import algorithmFeaturesIllustration1 from "assets/images/algorithmFeaturesIllustration1.png";
import algorithmFeaturesIllustration2 from "assets/images/algorithmFeaturesIllustration2.png";
import algorithmFeaturesIllustration3 from "assets/images/algorithmFeaturesIllustration3.png";
import personLookingIllustration from "assets/images/personLookingIllustration.png";
import travelVignettes from "assets/images/travelVignettes.png";
import hexagonWorldmap from "assets/images/hexagonWorldmap.png";
import tourismSupplies from "assets/images/tourismSupplies.png";

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
  culture,
  algorithmFeaturesIllustration1,
  algorithmFeaturesIllustration2,
  algorithmFeaturesIllustration3,
  personLookingIllustration,
  travelVignettes,
  hexagonWorldmap,
  tourismSupplies,
};
