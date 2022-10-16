import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";

function UserProfilePage() {
  const [userListing, setUserListing] = useState([]);
  const [roomListing, setRoomListing] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const id = sessionStorage.getItem("userid");

    const fetchData = async () => {
      const userListingUrl = `/api/userlistings/submittedby/${id}`;

      const userList = await axios.get(userListingUrl);
      setUserListing(userList.data);

      const roomListingUrl = `/api/roomlistings/submittedby/${id}`;

      const roomList = await axios.get(roomListingUrl);
      setRoomListing(roomList.data);

      const profileUrl = `/api/user/${id}`;
      const findProfile = await axios.get(profileUrl);
      setProfile(findProfile.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>User Profile Page</h1>
      <div>Username: {profile.username}</div>
      <div>Mobile Number: {profile.mobileNumber}</div>
      <div>Email: {profile.email}</div>

      {userListing.data === "" ? (
        <Link to={"/user/createroomlisting"}>
          <div>User Listing not created. Click here to get started </div>
        </Link>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <>
              <Link to={`/user/userlisting/${userListing._id}`}>
                <div key={userListing._id}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <Img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={userListing.profilePicture}
                      alt="Person"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {userListing.name}
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {userListing.occupation}
                      </p>
                      {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                  {userListing.description}
                </p> */}

                      <p className="text-xs tracking-wide text-gray-400">
                        Preferred Location
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {userListing.town}
                      </p>
                      <p className="text-xs tracking-wide text-gray-400">
                        MRT Station Proximity
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {userListing.mrt}
                      </p>
                      <p className="text-xs tracking-wide text-gray-400">
                        Overall Budget
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        SGD ${userListing.budget}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <button>Edit</button>
            </>
          </div>
        </div>
      )}

      {roomListing === "" ? (
        <Link to={"/user/createroomlisting"}>
          <div>Room Listing not created. Click here to get started </div>
        </Link>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Start of User Reccomendation Mapping */}

            <>
              <Link to={`/user/userlisting/${roomListing._id}`}>
                <div key={roomListing._id}>
                  <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                    <Img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={roomListing.profilePicture}
                      alt="Person"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                      <p className="mb-1 text-lg font-bold text-gray-100">
                        {roomListing.name}
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {roomListing.occupation}
                      </p>
                      {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
                    {userListing.description}
                  </p> */}

                      <p className="text-xs tracking-wide text-gray-400">
                        Preferred Location
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {roomListing.town}
                      </p>
                      <p className="text-xs tracking-wide text-gray-400">
                        MRT Station Proximity
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        {roomListing.mrt}
                      </p>
                      <p className="text-xs tracking-wide text-gray-400">
                        Overall Budget
                      </p>
                      <p className="mb-4 text-xs text-gray-100">
                        SGD ${roomListing.budget}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          </div>
        </div>
      )}
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3"></button>
    </>
  );
}

export default UserProfilePage;
