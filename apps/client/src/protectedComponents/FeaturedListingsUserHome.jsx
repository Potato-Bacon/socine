/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Img from "react-cool-img";

//API
const featuredUserListingURL = `/api/userhome/featureduserlist`;
const featuredRoomListingURL = `/api/userhome/featuredroomlist`;

function FeaturedListingsUserHome({
  token,
  featuredUserList,
  setFeaturedUserList,
  featuredRoomList,
  setFeaturedRoomList,
}) {
  const navigate = useNavigate();

  // Fetch Featured User Listings and set useState
  useEffect(() => {
    fetch(featuredUserListingURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setFeaturedUserList(data));
  }, []);

  // Fetch Featured Room Listings and set useState
  //   useEffect(() => {
  //     fetch(featuredRoomListingURL, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setFeaturedRoomList(data));
  //   }, []);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <span className="inline-block h-1 w-12 bg-red-700"></span>

            <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
              Featured Socine Users
            </h2>
          </div>

          {/* Featured User Grid */}
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {/* featuredUserListing Map */}
            featuredUserList
            <div>
              <button className="block">
                <div className="flex justify-center">
                  <strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                    New
                  </strong>
                </div>

                <Img
                  alt="featuredUserListing"
                  src=""
                  className="-mt-3 h-96 w-full object-cover"
                />

                <h3 className="mt-4 text-sm text-black/90">""</h3>
                <h3 className="mt-4 text-sm text-black/90">""</h3>

                <div className="mt-4 flex items-center justify-between font-bold">
                  <p className="text-lg">""</p>

                  <p className="text-xs uppercase tracking-wide">"""</p>
                </div>
              </button>
            </div>
            ;
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedListingsUserHome;
