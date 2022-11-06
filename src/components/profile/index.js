import { ProfileContainer } from "./style";
import profileImg from "../../assets/img/profile_img.png";
const UserProfile = () => {
  return (
    <ProfileContainer>
      <div className="profile_bg">
        <img src={profileImg} alt="" />
      </div>
      <p className="profile_details">Hey! Bright</p>
    </ProfileContainer>
  );
};
export default UserProfile;
