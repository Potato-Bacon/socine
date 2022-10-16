import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Img from "react-cool-img";
import SearchBarRoomListing from "../protectedComponents/SearchBarRoomListing";

const roomListingURL = "/api/roomlistings";

function RoomListingPage({ username, token }) {
  const navigate = useNavigate();
  const [roomListing, setRoomListing] = useState([]);

  // fetch room listings
  useEffect(() => {
    fetch(roomListingURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRoomListing(data));
  }, []);

  return (
    <>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Socine Property Listing
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                One place to match your listed properties to other Socine
                members.
              </p>
            </div>
            <SearchBarRoomListing
              setRoomListing={setRoomListing}
              roomListing={roomListing}
            />

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              {roomListing.map((rl) => (
                <>
                  <div key={rl._id}>
                    <div className="relative">
                      <Img
                        loading="lazy"
                        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                        src={rl?.listingPic}
                        alt="listingPic"
                      />

                      <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <Img
                          className="object-cover object-center w-10 h-10 rounded-full"
                          src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
                          alt="listingPic"
                        />

                        <div className="mx-4">
                          <h1 className="text-sm text-gray-700 dark:text-gray-200">
                            {rl?.name}
                          </h1>
                          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                            Creative Director
                          </p> */}
                        </div>
                      </div>
                    </div>

                    <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                      {rl?.title}
                    </h1>
                    <p className="mt-1 text-l font-semibold text-gray-800 dark:text-white">
                      {rl?.town}
                    </p>
                    <h1 className="mt-1 text-xl font-semibold text-gray-800 dark:text-white">
                      ${rl?.rentPerMonth}{" "}
                      <span className="text-xs">/month</span>
                    </h1>

                    <div className="flex-row justify-items-start my-3">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                        {rl?.wholeUnitOrRoomOnly}
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                        {rl?.apartmentType}
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                        {rl?.apartmentRoomTypes}
                      </span>
                    </div>
                    <div className="flex-row justify-items-start my-3">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                        {rl?.listingTags?.[0]}
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                        {rl?.mrt} Mrt Station
                      </span>
                    </div>
                    <hr className="w-32 my-6 text-blue-500" />

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {rl?.shortDescription}
                    </p>

                    <button className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                      <Link to={`/user/roomlisting/${rl._id}`}>
                        Find Out More
                      </Link>
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RoomListingPage;
