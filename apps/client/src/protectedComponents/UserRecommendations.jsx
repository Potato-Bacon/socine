import axios from "axios";
import { useEffect, useState } from "react";

function UserRecommendations() {
  const userid = sessionStorage.getItem("userid");
  const userSubmittedListings = `/api/userlistings/submittedby/${userid}`;
  const recommendationsURL = "/api/userlistings/recommendations";

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(userSubmittedListings);
        console.log(response.data.budget);
        console.log(response.data.mrt);
        console.log(response.data.town);

        try {
          const body = {
            budget: response.data.budget,
            mrt: response.data.mrt,
            town: response.data.town,
          };
          const response1 = await axios.post(recommendationsURL, body);
          console.log(response1.data);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>UserRecommendations</div>

      <div>Based on your UserListing of budget, mrt, town </div>

      {/* {recommendations.map((r)=> (

      ))} */}
    </>
  );
}

export default UserRecommendations;
