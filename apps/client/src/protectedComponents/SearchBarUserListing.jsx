/* eslint-disable react/prop-types */
// import React from "react";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

function SearchBarUserListing({ setUserListing, userListing }) {
  const [interests, setInterests] = useState([]);
  useEffect(() => {
    const url = "/api/interests";

    const fetchInterests = async () => {
      const data = await axios.get(url);
      console.log(data);
      setInterests(data);
    };
    fetchInterests();
  }, []);
  //Filter and Search Functions
  const handleSearch = async (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const min = elements.min.value === "" ? 0 : elements.min.value;
    const max = elements.max.value === "" ? 99999 : elements.max.value;

    const searchBody = {
      ...(elements.input.value !== "" && { input: elements.input.value }),
      ...(elements.interests.value !== "" && {
        interests: elements.interests.value,
      }),
      ...(elements.userListingTag.value !== "" && {
        userListingTag: elements.userListingTag.value,
      }),

      min: min,
      max: max,
    };

    // let searchBody = {};

    // if (elements.interests.value === "") {
    //   if (elements.input.value === "") {
    //     searchBody = {
    //       min: min,
    //       max: max,
    //     };
    //   } else {
    //     searchBody = {
    //       input: elements.input.value,
    //       min: min,
    //       max: max,
    //     };
    //   }
    // } else {
    //   if (elements.input.value === "") {
    //     searchBody = {
    //       min: min,
    //       max: max,
    //       interests: elements.interests.value,
    //     };
    //   } else {
    //     searchBody = {
    //       input: elements.input.value,
    //       min: min,
    //       max: max,
    //       interests: elements.interests.value,
    //     };
    //   }
    // }

    console.log(elements.input.value, "this is input");
    console.log(elements.min.value, "this is min");
    console.log(elements.interests.value, "this is interests");
    const url = "/api/userlistings/search";
    const data = await axios.post(url, searchBody);
    console.log(data);
    setUserListing(data.data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400 mx-64"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="mx-64">
              <input
                name="input"
                type="search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-64"
              >
                Search
              </button>
            </div>
          </div>
          {/* div wrapper and Min. Budget */}
          <div className="flex-row flex justify-items-start justify-center">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search Min. Budget
            </label>
            <input
              name="min"
              type="number"
              className="block p-4 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 mx-2"
              placeholder="Minimum Budget"
            />

            {/* Max. Budget */}
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
              Search Max. Budget
            </label>
            <input
              name="max"
              type="number"
              className="block p-4 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
              placeholder="Maximum Budget"
            />
          </div>
          <div className="flex-row flex justify-items-start justify-center ">
            {/* Interests */}
            <label
              htmlFor="interests"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Interests
            </label>
            <select
              multiple
              name="interests"
              className="block p-4 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5 mx-2"
              placeholder="Maximum Budget"
            >
              {interests?.data?.map((interest) => (
                // eslint-disable-next-line react/jsx-key
                <option value={interest._id}>{interest.interests}</option>
              ))}
              {/* <option value={"634441e31953bd9d609ef3c0"}>Basketball</option> */}
            </select>

            {/* Listing Tags */}
            <label
              htmlFor="userListingTag"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Listing Tags
            </label>
            <select
              multiple
              name="userListingTag"
              className="block p-4 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
              placeholder="Maximum Budget"
            >
              <option value="Non-Smoker">Non-Smoker</option>
              <option value="I have a cat">I have a cat</option>
              <option value="I have a dog"> I have a dog</option>
              <option value="I'm a student">I am a student</option>
              <option value="LGBT+ Friendly">LGBT+ Friendly</option>
              <option value="Diversity Friendly">Diversity Friendly</option>
            </select>
          </div>
          {/* Submit Search Button */}
          {/* <div className="flex-row flex justify-items-center justify-center my-5">
            <button
              type="submit"
              className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default SearchBarUserListing;
