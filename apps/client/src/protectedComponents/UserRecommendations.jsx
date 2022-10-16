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
      <div className="my-8 mx-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Regain{" "}
          <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
            control
          </mark>{" "}
          over your tenant experience
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Socine we focus on technology, user experience and
          innovations. We have curated the recommendations below based on your{" "}
          <span className="px-2 text-slate-50 bg-blue-600 rounded dark:bg-blue-500">
            Budget
          </span>{" "}
          and <span>proximity</span> to <span>Town</span> and <span>MRT</span>.
        </p>
      </div>
    </>
  );
}

export default UserRecommendations;
