import { useState, useEffect } from "react";
import UserRecommendations from "../protectedComponents/UserRecommendations";

// useEffect(() => {
//   const getUserID = sessionStorage.getItem("userid");
// });

function UserHome() {
  const [userID, setUserID] = useState("");
  //fetch userID from session storage

  return (
    <>
      <UserRecommendations />
    </>
  );
}

export default UserHome;
