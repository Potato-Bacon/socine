import axios from "axios";
import { useEffect } from "react";

function UserProfilePage({ userName, token }) {
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    console.log(token);
    const fetchData = async () => {
      const url = "/api/interests";

      const userid = sessionStorage.getItem("userid");

      const data = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token} ${userid}`,
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
