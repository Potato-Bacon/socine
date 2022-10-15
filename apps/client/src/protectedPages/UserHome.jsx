import { useState, useEffect } from "react";

function UserHome() {
  const [userID, setUserID] = useState("");
  //fetch userID from session storage
  useEffect(() => {
    const getUserID = sessionStorage.getItem("userid");
  });

  return (
    <>
      <h1> UserHome</h1>
    </>
  );
}

export default UserHome;
