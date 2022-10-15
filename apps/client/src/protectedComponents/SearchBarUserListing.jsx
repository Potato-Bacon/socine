/* eslint-disable react/prop-types */
// import React from "react";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

function SearchBarUserListing({ token }) {
  //Filter and Search Functions
  const handleSearch = async (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const searchBody = {
      input: elements.input.value, //search input
      min: elements.min.value, // min budget input
      max: elements.max.value, // max budget value
      // interests: elements.interests.value,
      // interests: [
      //   "elements.Basketball.value",
      //   "elements.Swimming.value",
      //   "elements.Badminton.value",
      //   "elements.Tennis.value",
      // elements.Yoga.value,
      // elements.TableTennis.value,
      // elements.ScubaDiving.value,
      // elements.Hiking.value,
      // elements.Baseball.value,
      // elements.Archery.value,
      // elements.Bowling.value,
      // elements.Cycling.value,
      // elements.Running.value,
      // elements.Shopping.value,
      // elements.Traveling.value,
      // elements.Painting.value,
      // elements.Gaming.value,
      // elements.Cooking.value,
      // elements.Singing.value,
      // elements.Dancing.value,
      // ], // array of interests
      // userListingTag: [
      //   elements.nonsmoker.value,
      //   elements.ihaveacat.value,
      //   elements.ihaveadog.value,
      //   elements.iamastudent.value,
      //   elements.lgbtfriendly.value,
      //   elements.diversityfriendly.value,
      // ],
      // userListingTag: elements.userListingTag.value,
    };

    const url = "/api/userlistings/search";
    const data = await axios.post(url, searchBody);
    console.log(data);
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
          <div className="flex-row flex justify-items-start justify-center">
            {/* Interests */}
            {/* <label
              htmlFor="interests"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Interests
            </label>
            <select
              multiple
              name="interests"
              className="block p-4 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
            > */}
            {/* <option value="">---Please choose your options---</option> */}
            {/* <option value={["634441e31953bd9d609ef3c0"]}>Basketball</option> */}
            {/* <option value={["634441e31953bd9d609ef3c2"]}>Swimming</option> */}
            {/* <option value="Badminton">Badminton</option>
              <option value="Tennis">Tennis</option>
              <option value="Yoga">Yoga</option>
              <option value="TableTennis">Table Tennis</option>
              <option value="ScubaDiving">Scuba Diving</option>
              <option value="Hiking">Hiking</option>
              <option value="Baseball">Baseball</option>
              <option value="Archery">Archery</option>
              <option value="Bowling">Bowling</option>
              <option value="Cycling">Cycling</option>
              <option value="Running">Running</option>
              <option value="Shopping">Shopping</option>
              <option value="Travelling">Travelling</option>
              <option value="Painting">Painting</option>
              <option value="Gaming">Gaming</option>
              <option value="Cooking">Cooking</option>
              <option value="Singing">Singing</option>
              <option value="Dancing">Dancing</option> */}
            {/* </select> */}

            {/* userListingTag */}
            {/* <label
              htmlFor="interests"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Interests
            </label>
            <select
              multiple
              name="userListingTag"
              className="block p-4 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
            >
              {/* <option value="">---Please choose your options---</option> */}
            {/* </select> */}
          </div>

          {/* Submit Search Button */}
          <div className="flex-row flex justify-items-center justify-center my-5">
            <button
              type="submit"
              className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBarUserListing;
