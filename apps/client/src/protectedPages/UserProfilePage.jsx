/* eslint-disable react/jsx-key */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";

function UserProfilePage() {
  const [userListing, setUserListing] = useState([]);
  const [roomListing, setRoomListing] = useState([]);
  const [profile, setProfile] = useState([]);

  const handleDelete = async (id) => {
    const url = `/api/userlistings/delete/${id}`;
    const data = await axios.delete(url);
    console.log(data);

    setUserListing((prev) => {
      return [...prev.filter((x) => x._id !== id)];
    });
  };
  useEffect(() => {
    const id = sessionStorage.getItem("userid");

    const fetchData = async () => {
      const userListingUrl = `/api/userlistings/submittedby/${id}`;

      const userList = await axios.get(userListingUrl);
      console.log(userList);
      setUserListing(userList.data);

      const roomListingUrl = `/api/roomlistings/submittedby/${id}`;

      const roomList = await axios.get(roomListingUrl);
      console.log(roomList, "roomlist");
      setRoomListing(roomList.data);

      const profileUrl = `/api/user/${id}`;
      const findProfile = await axios.get(profileUrl);
      setProfile(findProfile.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* start of profile */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {/* Header Starts here */}
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                OMG! Its
                <span className="border-b-8 border-red-600"> your</span>{" "}
                <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                  Profile
                </mark>{" "}
                <br />
                Looking Awesome
              </h1>
            </div>
            {/*  End of header */}

            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-52 h-52 rounded-xl inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Img
                    alt="content"
                    className="rounded-xl object-cover object-center h-full w-full"
                    loading="lazy"
                    src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  />
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-sm dark:text-slate-50">
                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Username
                </h1>
                <h1 className="text-xl font-semibold mb-2">
                  {profile?.username}
                </h1>
                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Email
                </h1>
                <h1 className="text-xl font-semibold mb-2">{profile?.email}</h1>
                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Mobile No
                </h1>
                <h1 className="text-xl font-semibold mb-4">
                  +65 {profile?.mobileNumber}
                </h1>

                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Introduction
                </h1>
                <p className="leading-relaxed text-xs mb-4">
                  Hey hi, this is hardcoded, but we have plans to include like a
                  short description of the user, which can be obtained during
                  the registration process or when the user logs in and be able
                  to update their profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of profile */}
      {/* Header Starts here */}
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          User
          <span className="border-b-8 border-red-600"> Listing</span>{" "}
        </h1>
      </div>
      {/*  End of header */}
      {/* Check for users userlisting */}
      {userListing === "" ? (
        <Link to={"/user/createroomlisting"}>
          <div>User Listing not created. Click here to get started </div>
        </Link>
      ) : (
        userListing.map((r) => (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <>
                <Link to={`/user/userlisting/${r._id}`}>
                  <div key={r._id}>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                      <Img
                        className="object-cover w-full h-72 md:h-96 xl:h-96"
                        src={r.profilePicture}
                        alt="Person"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-1 text-lg font-bold text-gray-100">
                          {r.name}
                        </p>
                        <p className="mb-4 text-xs text-gray-100">
                          {r.occupation}
                        </p>
                        {/* <p className="mb-4 text-xs tracking-wide text-gray-400">
              {userListing.description}
            </p> */}

                        <p className="text-xs tracking-wide text-gray-400">
                          Preferred Location
                        </p>
                        <p className="mb-4 text-xs text-gray-100">{r.town}</p>
                        <p className="text-xs tracking-wide text-gray-400">
                          MRT Station Proximity
                        </p>
                        <p className="mb-4 text-xs text-gray-100">{r.mrt}</p>
                        <p className="text-xs tracking-wide text-gray-400">
                          Overall Budget
                        </p>
                        <p className="mb-4 text-xs text-gray-100">
                          SGD ${r.budget}
                        </p>

                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">
                          <Link to={`/user/edituserlisting/${r._id}`}>
                            Edit
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="absolute ml-2">
                  <button
                    onClick={() => handleDelete(r._id)}
                    className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 my-3"
                  >
                    Delete
                  </button>
                </div>
              </>
            </div>
          </div>
        ))
      )}

      {/* Check for users roomlisting */}
      {roomListing === "" ? (
        <Link to={"/user/createroomlisting"}>
          <div>Room Listing not created. Click here to get started </div>
        </Link>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {/* Header Starts here */}
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Room
              <span className="border-b-8 border-red-600"> Listing</span>{" "}
            </h1>
          </div>
          {/*  End of header */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Start of User Reccomendation Mapping */}

            <>
              {roomListing.map((r) => (
                <>
                  {" "}
                  <Link to={`/user/userlisting/${r._id}`}>
                    <div key={roomListing?._id}>
                      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <Img
                          className="object-cover w-full h-72 md:h-96 xl:h-96"
                          src={r?.listingPic}
                          alt="Person"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            {r?.title}
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            {r?.address}
                          </p>

                          <p className="text-xs tracking-wide text-gray-400">
                            Location
                          </p>
                          <p className="mb-4 text-xs text-gray-100">{r.town}</p>
                          <p className="text-xs tracking-wide text-gray-400">
                            MRT Station Proximity
                          </p>
                          <p className="mb-4 text-xs text-gray-100">{r.mrt}</p>
                          <p className="text-xs tracking-wide text-gray-400">
                            Rent per Month
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            SGD ${r.rentPerMonth}
                          </p>
                          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">
                            <Link to={`/user/editroomlisting/${r._id}`}>
                              Edit
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute ml-2">
                    <button
                      onClick={() => handleDelete(r._id)}
                      className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 my-3"
                    >
                      Delete
                    </button>
                  </div>
                </>
              ))}
            </>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfilePage;
