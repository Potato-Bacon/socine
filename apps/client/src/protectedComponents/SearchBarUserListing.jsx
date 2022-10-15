/* eslint-disable react/prop-types */
// import React from "react";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

function SearchBarUserListing({
  token,
  searchUser,
  setSearchUser,
  searchInput,
  setSearchInput,
}) {
  const handleSearch = async (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const searchBody = {
      input: elements.input.value,
    };

    const url = "/api/userlistings/search";

    const data = await axios.post(url, searchBody);
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSearch} autoComplete="off" className="m-6">
        <fieldset className="w-full space-y-1 dark:text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={handleSearch}
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <FontAwesomeIcon icon={faSearchengin} />
                </svg>
              </button>
            </span>
            <input
              name="input"
              placeholder="Search..."
              className="py-2 pl-10 text-sm rounded-md sm:w-full first-letter:focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            />
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default SearchBarUserListing;
