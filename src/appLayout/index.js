import { FlexContainer } from "./style.component";
import AppSidebar from "../layout/sidebar/app_sidebar.component";
import DashboardLayout from "../layout/dashboard/dashboard.component";
const AppLayout = ({ children }) => {
  return (
    <FlexContainer>
      <AppSidebar />
      <DashboardLayout>{children}</DashboardLayout>;
    </FlexContainer>
  );
};

export default AppLayout;
