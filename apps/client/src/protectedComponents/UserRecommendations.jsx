import axios from "axios";
import { useEffect } from "react";

function UserRecommendations() {
  const userid = sessionStorage.getItem("userid");
  const userSubmittedListings = `/api/userlistings/${userid}`;

  useEffect(async () => {
    try {
      const response = await axios.get(userSubmittedListings);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>UserRecommendations</div>
    </>
  );
}

export default UserRecommendations;
