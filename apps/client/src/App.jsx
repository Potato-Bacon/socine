import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import MeetDevelopers from "./pages/MeetDevelopers";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
export const PersonContext = createContext();

function App() {
  const [userName, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <PersonContext.Provider value={userName}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/developers" element={<MeetDevelopers />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route
              path="/login"
              element={
                <LoginPage setUsername={setUsername} setToken={setToken} />
              }
            />

            <Route path="/user" element={<Layout setToken={setToken} />}>
              <Route
                index
                element={<HomePage token={token} userName={userName} />}
              />
              <Route
                path="/user/profile"
                element={<ProfilePage token={token} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersonContext.Provider>
    </div>
  );
}

export default App;
