// import { app, analytics } from './firebase-config';
import { Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import { UserDataProvider } from "./components/user context/UserDataProvider";
const App = () => {
  return (
    <div>
      <UserDataProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserDataProvider>
    </div>
  );
};

export default App;
