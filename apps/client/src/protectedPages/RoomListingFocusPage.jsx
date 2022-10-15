import { useEffect, useState } from "react";
import Img from "react-cool-img";
import { useParams } from "react-router-dom";

function RoomListingFocusPage({ userName, token }) {
  const [roomFocus, setRoomFocus] = useState();

  const { id } = useParams();
  const roomFocusURL = `/api/roomListings/${id}`;

  //fetch roomFocus Data
  useEffect(() => {
    fetch(roomFocusURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setRoomFocus(data));
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-80 overflow-hidden">
              <Img
                alt="content"
                className="object-cover object-center h-full w-full"
                loading="lazy"
                src={roomFocus?.listingPic}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="text-sm mt-4 text-gray-900 dark:text-slate-50">
                    {roomFocus?.name}
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4" />
                  <p className="font-semibold dark:text-slate-50 text-xs">
                    Rent:
                  </p>
                  <p className="text-lg dark:text-slate-50">
                    ${roomFocus?.rentPerMonth}
                  </p>
                  <p className="font-semibold dark:text-slate-50 text-xs mt-5">
                    Security Deposit:
                  </p>
                  <p className="text-lg dark:text-slate-50">
                    ${roomFocus?.securityDeposit}
                  </p>
                  <p className="font-semibold dark:text-slate-50 text-xs mt-5">
                    Lease duration
                  </p>
                  <p className="text-lg dark:text-slate-50">
                    {roomFocus?.stayLength}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-xs dark:text-slate-50">
                <h1 className="text-xl font-bold">{roomFocus?.title}</h1>
                <p className="leading-relaxed text-sm">{roomFocus?.address}</p>
                <p className="leading-relaxed text-sm mb-6">
                  {roomFocus?.town}
                </p>
                <div className="flex-row justify-items-start my-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                    {roomFocus?.wholeUnitOrRoomOnly}
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                    {roomFocus?.apartmentType}
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                    {roomFocus?.apartmentRoomTypes}
                  </span>
                </div>
                <div className="flex-row justify-items-start my-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                    {roomFocus?.listingTags?.[0]}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                    {roomFocus?.mrt} Mrt Station
                  </span>
                </div>
                <p className="font-semibold mt-6">Summary</p>
                <p>{roomFocus?.shortDescription}</p>
                <p className="font-semibold mt-5">Property Description</p>
                <p>{roomFocus?.propertyDescription}</p>
                <p className="font-semibold mt-5">Tenant Preferences</p>
                <p>{roomFocus?.occupantsDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomListingFocusPage;
