import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Img from "react-cool-img";
import SearchBarUserListing from "../protectedComponents/SearchBarUserListing";

// API
const userListingURL = "/api/userlistings";
// const userAuthURL = "/api/auth";

function UserListingPage({ userName, token }) {
  const navigate = useNavigate();
  const [userListing, setUserListing] = useState([]);
  const [searchUser, setSearchUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch User Listing
  useEffect(() => {
    fetch(userListingURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserListing(data));
  }, []);

  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          {/* Header Starts here */}
          <div className="my-8 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              You are <span className="border-b-8 border-red-600">not</span>{" "}
              <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                alone.
              </mark>{" "}
              <br />
              Lets connect.
            </h1>
          </div>
          {/*  End of header */}
          {/* Search Bar and Filter Component */}
          <div>
            <SearchBarUserListing
              setUserListing={setUserListing}
              userListing={userListing}
            />
          </div>
          {/* End of Search Bar and Filter Components */}
          {/* User Listing Rendering */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Data Mapping Starts Here */}
              {userListing.map((usl) => (
                <>
                  <Link to={`/user/userlisting/${usl?._id}`}>
                    <div className="flex justify-center" key={usl?._id}>
                      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl text-center">
                        <Img
                          className="object-cover w-48 h-48 rounded-md ring-4 ring-gray-300"
                          src={usl?.profilePicture}
                          alt="profilePicture"
                          loading="lazy"
                        />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                          {usl?.name}
                        </h1>
                        <p className=" text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 mb-3 text-xs">
                          {usl?.occupation}
                        </p>
                        <p className="text-xs tracking-wide text-gray-400">
                          Preferred Location
                        </p>
                        <p className="mb-1 text-xs text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                          {usl?.town}
                        </p>
                        <p className="text-xs tracking-wide text-gray-400">
                          Budget
                        </p>
                        <p className="mb-4 text-xs text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                          SGD ${usl?.budget}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserListingPage;
