import { ReactComponent as HomeIcon } from "../../../assets/svg/home.svg";
import { ReactComponent as MusicIcon } from "../../../assets/svg/music.svg";
import { ReactComponent as DiscoverIcon } from "../../../assets/svg/discover.svg";
import { ReactComponent as PlaylistIcon } from "../../../assets/svg/playlist.svg";
import { NavContainer } from "./style.component";

const MobileNav = () => {
  return (
    <NavContainer>
      <span>
        {" "}
        <HomeIcon />
      </span>
      <span>
        {" "}
        <MusicIcon />
      </span>
      <span>
        {" "}
        <DiscoverIcon />
      </span>
      <span>
        {" "}
        <PlaylistIcon />
      </span>
    </NavContainer>
  );
};
export default MobileNav;
