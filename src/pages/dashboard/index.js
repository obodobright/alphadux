import MusicCard from "../../components/card/music_card.component";
import HeaderNav from "../../components/topNav/header/header.component";
import Hero from "./hero/hero.page";
import { musicData } from "../../utils/dummy";
import { Container } from "./style/style.component";
import MobileNav from "../../layout/sidebar/MobileNav";
import "./style/./dashboard.style.css";
import UserProfile from "../../components/profile";
const Dashboard = () => {
  return (
    <Container>
      <main className="mobile_topbar">
        <UserProfile />
      </main>
      <HeaderNav />
      <Hero />
      <div className="music_container">
        <p>Welcome back</p>
        <div className="card_container">
          {musicData?.map((data, index) => (
            <MusicCard data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="music_container">
        <p>Cheers to the Weekend </p>
        <div className="card_container">
          {musicData?.map((data, index) => (
            <MusicCard data={data} key={index} />
          ))}
        </div>
      </div>
      <MobileNav />
    </Container>
  );
};

export default Dashboard;
