import axios from "axios";
import { useEffect } from "react";

function UserProfilePage({ userName, token }) {
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    console.log(token);
    const fetchData = async () => {
      const url = "/api/interests";

      const username = sessionStorage.getItem("username");

      const data = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token} ${username}`,
        },
      });
      console.log(data);
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
