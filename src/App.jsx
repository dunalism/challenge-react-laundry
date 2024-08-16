import { Route, Routes } from "react-router-dom";
import DarkMode from "./component/DarkTheme";
import LoginPage from "./pages/LoginPage";
import ExamplePages from "./pages/ExamplePages";

function App() {
  return (
    <div>
      <DarkMode className={"bg-base-200"} />
      <Routes>
        <Route element={<LoginPage />} path="/auth/sign-in" />
        <Route element={<ExamplePages />} path="/example" />
      </Routes>
    </div>
  );
}

export default App;
