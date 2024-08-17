import { Route, Routes } from "react-router-dom";
import DarkMode from "./component/DarkTheme";
import LoginPage from "./pages/LoginPage";
import ExamplePages from "./pages/ExamplePages";
import DashboardLaundry from "./pages/DashboardLaundry";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoginPage />} path="/auth/sign-in" />
        <Route element={<ExamplePages />} path="/example" />
        <Route element={<DashboardLaundry />} path="/dashboard" />
      </Routes>
    </div>
  );
}

export default App;
