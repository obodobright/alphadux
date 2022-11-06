// import { ReactComponent as HomeIcon } from "./assets/home.svg";
import "./App.css";
import Dashboard from "./pages/dashboard";
import AppLayout from "./appLayout";

function App() {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  );
}

export default App;
