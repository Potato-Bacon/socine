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
            {/* Header Starts here */}
            <div className="my-8 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                We got <span className="border-b-8 border-red-600">you</span>{" "}
                <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                  covered.
                </mark>{" "}
                <br />
                Lets roof this!
              </h1>
            </div>
            {/*  End of header */}
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
                    <hr className="w-32 my-4 text-blue-500" />

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {rl?.shortDescription}
                    </p>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3">
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
