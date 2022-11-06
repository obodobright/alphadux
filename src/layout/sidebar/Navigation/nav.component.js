import { NavContainer, NavWrapper } from "./style.component";
import { ReactComponent as HomeIcon } from "../../../assets/svg/home.svg";
import { ReactComponent as MusicIcon } from "../../../assets/svg/music.svg";
import { ReactComponent as DiscoverIcon } from "../../../assets/svg/discover.svg";
import { ReactComponent as AudioIcon } from "../../../assets/svg/audio.svg";
import { ReactComponent as FavIcon } from "../../../assets/svg/fav.svg";
import { ReactComponent as SoundsIcon } from "../../../assets/svg/sound.svg";
import { ReactComponent as FilterIcon } from "../../../assets/svg/filter.svg";
import { ReactComponent as PlaylistIcon } from "../../../assets/svg/playlist.svg";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search.svg";
import { Spacer } from "../../../components/spacer";
const NavList = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <ul>
          <li>
            <HomeIcon />
            <span>Home</span>
          </li>
          <li>
            <DiscoverIcon />
            <span>Discover</span>
          </li>
          <Spacer />
          <li>
            <MusicIcon />
            <span>Your Library</span>
          </li>
          <li>
            <FavIcon />
            <span className="active">Liked songs</span>
            <SoundsIcon />
          </li>
          <li>
            <AudioIcon />
            <span>Recently played</span>
          </li>
          <li>
            <FilterIcon />
            <span>Create playlist</span>
          </li>
          <Spacer />
          <li>
            <div className="flex-between">
              <div className="flex-wrapper">
                {" "}
                <PlaylistIcon />
                <span>My Playlists</span>
              </div>
              <SearchIcon />
            </div>
          </li>
          <Spacer />
          <li>Riffs & Runs</li>
          <li>African Heat</li>
          <li>Gidi Nights</li>
          <li>Saturday was a Good Day</li>
          <li>Riffs & Runs</li>
          <li>African Heat</li>
          <li>Gidi Nights</li>
        </ul>
      </NavWrapper>
    </NavContainer>
  );
};
export default NavList;
