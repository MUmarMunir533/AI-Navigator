import { Route, Routes } from "react-router";
import Login from "./Components/login/Login";
import ForgetPassword from "./Components/forgetPassword/ForgetPassword";
import NewPassword from "./Components/newPassword/NewPassword";
import Dashboard from "./Components/dashboard/Dashboard";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
