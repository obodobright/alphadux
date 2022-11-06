import { HeroContainer } from "./style.component";
import { ReactComponent as ULogo } from "../../../assets/svg/ULogo.svg";
import { ReactComponent as DLogo } from "../../../assets/svg/dLogo.svg";
import { ReactComponent as UsLogo } from "../../../assets/svg/usLogo.svg";
import { ReactComponent as XLogo } from "../../../assets/svg/xLogo.svg";
import { ReactComponent as Tag } from "../../../assets/svg/name_tag.svg";
const Hero = () => {
  return (
    <HeroContainer>
      <div className="brand_logo">
        <ULogo />
        <DLogo />
        <UsLogo />
        <XLogo />
      </div>
      <div className="artiste_name">
        <Tag />
      </div>
    </HeroContainer>
  );
};
export default Hero;
