import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// Public Route
import LandingPage from "./pages/LandingPage";
import MeetDevPage from "./pages/MeetDevPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
// Protected Route
import UserHome from "./protectedPages/UserHome";
import UserProfilePage from "./protectedPages/UserProfilePage";
import UserListingPage from "./protectedPages/UserListingPage";
import RoomListingPage from "./protectedPages/RoomListingPage";
import CreateUserListingPage from "./protectedPages/CreateUserListingPage";
import CreateRoomListingPage from "./protectedPages/CreateRoomListingPage";
import UserWatchListPage from "./protectedPages/UserWatchListPage";
import UserListingFocusPage from "./protectedPages/UserListingFocusPage";
import RoomListingFocusPage from "./protectedPages/RoomListingFocusPage";
import ProtectedErrorPage from "./protectedPages/ProtectedErrorPage";
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
            <Route path="/developers" element={<MeetDevPage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
            <Route path="/termsconditions" element={<TermsConditionsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route
              path="/login"
              element={
                <LoginPage setUsername={setUsername} setToken={setToken} />
              }
            />

            {/* Protected Route */}
            <Route path="/user" element={<Layout setToken={setToken} />}>
              <Route
                index
                element={<UserHome token={token} userName={userName} />}
              />
              <Route
                path="/user/profile"
                element={<UserProfilePage token={token} />}
              />
              <Route
                path="/user/userlisting"
                element={<UserListingPage token={token} />}
              />

              <Route
                path="/user/userlisting/:id"
                element={<UserListingFocusPage token={token} />}
              />

              <Route
                path="/user/roomlisting"
                element={<RoomListingPage token={token} />}
              />

              <Route
                path="/user/roomlisting/:id"
                element={<RoomListingFocusPage token={token} />}
              />

              <Route
                path="/user/createuserlisting"
                element={<CreateUserListingPage token={token} />}
              />
              <Route
                path="/user/createroomlisting"
                element={<CreateRoomListingPage token={token} />}
              />
              <Route
                path="/user/watchlist"
                element={<UserWatchListPage token={token} />}
              />
              <Route path="*" element={<ProtectedErrorPage token={token} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersonContext.Provider>
    </div>
  );
}

export default App;
