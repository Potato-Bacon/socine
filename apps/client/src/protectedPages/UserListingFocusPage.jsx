import { useEffect, useState } from "react";
import Img from "react-cool-img";
import { useParams, Link } from "react-router-dom";

function UserListingFocusPage({ userName, token }) {
  // const navigate = useNavigate();
  const [userFocus, setUserFocus] = useState();

  const { id } = useParams();
  const userFocusURL = `/api/userListings/${id}`;

  // Fetch UserFocus Data
  useEffect(() => {
    fetch(userFocusURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserFocus(data));
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Img
                alt="content"
                className="object-cover object-center h-full w-full"
                loading="lazy"
                src="https://images.pexels.com/photos/5166977/pexels-photo-5166977.jpeg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Img
                    alt="content"
                    className="rounded-full object-cover object-center h-full w-full"
                    loading="lazy"
                    src={userFocus?.profilePicture}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-slate-50">
                    {userFocus?.name}
                  </h2>
                  <h2 className="text-sm mt-2 text-gray-900 dark:text-slate-50">
                    {userFocus?.occupation}
                  </h2>
                  <h2 className="text-sm mt-2 mb-2 text-gray-900 dark:text-slate-50">
                    {userFocus?.mbti?.mbti} ({userFocus?.mbti?.description})
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p className="font-semibold dark:text-slate-50 text-xs">
                    Age:
                  </p>
                  <p className="mb-2 text-xs dark:text-slate-50">
                    {userFocus?.age}
                  </p>
                  <p className="font-semibold dark:text-slate-50 text-xs">
                    Gender:
                  </p>
                  <p className="text-xs dark:text-slate-50">
                    {userFocus?.gender}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-sm dark:text-slate-50">
                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Budget
                </h1>
                <h1 className="text-xl font-semibold mb-2">
                  SGD ${userFocus?.budget}
                </h1>
                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Town Proximity
                </h1>
                <h1 className="text-xl font-semibold mb-2">
                  {userFocus?.town}
                </h1>
                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  MRT Proximity
                </h1>
                <h1 className="text-xl font-semibold mb-4">{userFocus?.mrt}</h1>

                <h1 className="text-xs font-light border-b-8 border-blue-600 w-7">
                  Introduction
                </h1>
                <p className="leading-relaxed text-xs mb-4">
                  {userFocus?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserListingFocusPage;
