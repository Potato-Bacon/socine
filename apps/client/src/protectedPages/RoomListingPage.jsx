import { useEffect } from "react";
import Img from "react-cool-img";

const roomListingURL = "/api/roomlistings";

function RoomListingPage({ username, token }) {
  useEffect(() => {
    fetch(roomListingURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="relative">
                  <Img
                    loading="lazy"
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
                    alt="home01"
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <Img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
                      alt="home02"
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Tom Hank
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  Spain inspired home for rent
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Its hard to not miss this lovely home located at the hearts of
                  Orchard Road.
                </p>

                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                >
                  Find Out More
                </a>
              </div>

              <div>
                <div className="relative">
                  <Img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <Img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        arthur melo
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  Wooden cabin located at East Coast area
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  One of the best preserved wooden cabin overlooking the sea.
                </p>

                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                >
                  Find Out More
                </a>
              </div>

              <div>
                <div className="relative">
                  <Img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <Img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm text-gray-700 dark:text-gray-200">
                        Amelia. Anderson
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lead Developer
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  Spacious Master Bedroom for rent
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Looking for a couple to take over this room, before christmas.
                </p>

                <a
                  href="#"
                  className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RoomListingPage;
