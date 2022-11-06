import { HeaderContainer } from "./style";
import { ReactComponent as LeftArrow } from "../../../assets/svg/arrow_back.svg";
import { ReactComponent as RightArrow } from "../../../assets/svg/front_arrow.svg";
import SearchInput from "../search/search.component";
const HeaderNav = () => {
  return (
    <HeaderContainer>
      <div className="controls">
        <button>
          <LeftArrow />
        </button>
        <button>
          <RightArrow />
        </button>
      </div>
      <SearchInput />
    </HeaderContainer>
  );
};
export default HeaderNav;
