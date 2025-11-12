import { Route, Routes } from "react-router";
import Login from "./Components/login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import NewPassword from "./Components/NewPassword/Newpassword";
import Dashboard from "./Components/dashboard/Dashboard";
import PrivateGpt from "./Components/PrivateGpt/PrivateGpt";
import Voc from "./Components/Voc/Voc";
import Vob from "./Components/Vob/Vob";
import Vom from "./Components/Vom/Vom";
import BuyerIntelligence from "./Components/BuyerIntelligence/BuyerIntelligence";
import UserManagement from "./Components/UserManagement/UserManagement";
import { ThemeProvider } from "./contexts/ThemeContext";
import PromptLibrary from "./Components/PromptLibrary/PromptLibrary";
import BuyerIntelligenceAdmin from "./Components/BuyerIntelligenceAdmin/BuyerIntelligenceAdmin";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<PrivateGpt />} />
          <Route path="voc" element={<Voc />} />
          <Route path="vob" element={<Vob />} />
          <Route path="vom" element={<Vom />} />
          <Route path="buyer-intelligence" element={<BuyerIntelligence />} />
          <Route path="buyer-intelligence-admin" element={<BuyerIntelligenceAdmin />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route
            path="prompt-library"
            element={<PromptLibrary />}
          />
        </Route>
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
