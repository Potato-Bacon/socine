import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function UserProfilePage() {
  const [userListing, setUserListing] = useState();

  useEffect(() => {
    const id = sessionStorage.getItem("userid");

    const fetchData = async () => {
      const userListingUrl = `/api/userlistings/${id}`;

      const userList = await axios.get(userListingUrl);
      console.log(userList);

      const roomListingUrl = `/api/roomlistings/${id}`;

      const roomList = await axios.get(roomListingUrl);
      console.log(roomList);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>User Profile Page</h1>
    </>
  );
}

export default UserProfilePage;
