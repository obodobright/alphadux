import { SideContainer } from "./styles";
import UserProfile from "../../components/profile";
import NavList from "./Navigation/nav.component.js";
const AppSidebar = () => {
  return (
    <SideContainer>
      <UserProfile />
      <NavList />
    </SideContainer>
  );
};

export default AppSidebar;
