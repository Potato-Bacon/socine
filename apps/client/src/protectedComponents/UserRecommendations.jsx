import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "react-cool-img";

function UserRecommendations() {
  const userid = sessionStorage.getItem("userid");
  const userSubmittedListings = `/api/userlistings/submittedby/1/${userid}`;
  const userRecommendationsURL = "/api/userlistings/recommendations";
  const roomRecommendationsURL = "/api/roomlistings/recommendations";

  const [userRecommendations, setUserRecommendations] = useState([]);
  const [roomRecommendations, setRoomRecommendations] = useState([]);
  const [userSubmittedData, setUserSubmittedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(userSubmittedListings);
        // console.log(response.data.budget);
        // console.log(response.data.mrt);
        // console.log(response.data.town);
        setUserSubmittedData(response.data);

        try {
          const body = {
            budget: response.data.budget,
            mrt: response.data.mrt,
            town: response.data.town,
            id: response.data._id,
          };
          const response1 = await axios.post(userRecommendationsURL, body);
          setUserRecommendations(response1.data);
        } catch (error) {
          console.log(error);
        }
        try {
          const body = {
            rentPerMonth: response.data.budget,
            mrt: response.data.mrt,
            town: response.data.town,
          };
          const response2 = await axios.post(roomRecommendationsURL, body);
          setRoomRecommendations(response2.data);
          console.log(response2, "room listings");
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
      {/* Recommendation Home Header */}
      <div className="my-8 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
          and{" "}
          <span className="border-solid border-red-600 border-b-4 font-semibold">
            proximity
          </span>{" "}
          to{" "}
          <span className="px-2 text-slate-50 bg-blue-600 rounded dark:bg-blue-500">
            Town
          </span>{" "}
          or{" "}
          <span className="px-2 text-slate-50 bg-blue-600 rounded dark:bg-blue-500">
            MRT
          </span>
          .
        </p>
      </div>
      {/* End of Recommendations Home Header */}
      {/* Start of User Recommendation Cards */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Start of User Reccomendation Mapping */}
          {userRecommendations.map((ur) => (
            <>
              <Link to={`/user/userlisting/${ur?._id}`}>
                <div key={ur?._id}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <Img
                      className="object-cover w-full h-64 md:h-72 xl:h-96"
                      src={ur?.profilePicture}
                      alt="Person"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {ur?.name}
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {ur?.occupation}
                      </p>
                      {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                    {r?.description}
                  </p> */}

                      <p className="text-xs tracking-wide text-gray-400">
                        Preferred Location
                      </p>
                      <p className="mb-4 text-xs text-gray-100">{ur?.town}</p>
                      <p className="text-xs tracking-wide text-gray-400">
                        MRT Station Proximity
                      </p>
                      <p className="mb-4 text-xs text-gray-100">{ur?.mrt}</p>
                      <p className="text-xs tracking-wide text-gray-400">
                        Overall Budget
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        SGD ${ur?.budget}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      {/* End of Reccomendation Cards */}

      {/* Start of Room Recommendation Cards */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Start of User Reccomendation Mapping */}
          {roomRecommendations.map((rr) => (
            <>
              <Link to={`/user/roomlisting/${rr?._id}`}>
                <div key={rr?._id}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <Img
                      className="object-cover w-full h-64 md:h-72 xl:h-96"
                      src={rr?.listingPic}
                      alt="Person"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {rr?.title}
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {rr?.address}
                      </p>
                      {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                    {r?.description}
                  </p> */}

                      <p className="text-xs tracking-wide text-gray-400">
                        Location
                      </p>
                      <p className="mb-4 text-xs text-gray-100">{rr?.town}</p>
                      <p className="text-xs tracking-wide text-gray-400">
                        MRT Station Proximity
                      </p>
                      <p className="mb-4 text-xs text-gray-100">{rr?.mrt}</p>
                      <p className="text-xs tracking-wide text-gray-400">
                        Rent
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        SGD ${rr?.rentPerMonth}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      {/* End of Room Reccomendation Cards */}
    </>
  );
}

export default UserRecommendations;
