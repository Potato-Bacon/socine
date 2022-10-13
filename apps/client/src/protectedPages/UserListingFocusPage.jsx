import { useEffect, useState } from "react";
import Img from "react-cool-img";
import { useParams } from "react-router-dom";

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
                src="https://images.unsplash.com/photo-1499420838073-7de9d689547d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {userFocus?.name}
                  </h2>
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {userFocus?.occupation}
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Age: {userFocus?.age}</p>
                  <p className="text-base">Gender: {userFocus?.gender}</p>
                  <p className="text-base">
                    Personality: {userFocus?.mbti?.mbti} -{" "}
                    {userFocus?.mbti?.description}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1>Description</h1>
                <p className="leading-relaxed text-sm mb-4">
                  {userFocus?.description}
                </p>
                <p className="text-base">
                  Preferred Location: {userFocus?.town}
                </p>
                <p className="text-base">
                  Preffered MRT Station proximity: {userFocus?.mrt}
                </p>
                <p className="text-base">
                  Overall Budget: ${userFocus?.budget}
                </p>
                {/* <a className="text-red-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserListingFocusPage;
