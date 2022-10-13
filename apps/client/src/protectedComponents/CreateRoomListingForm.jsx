import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Img from "react-cool-img";
import { useEffect, useState } from "react";
// import React from "react";
import towns from "../staticData/town";
import mrts from "../staticData/mrts";
import { v4 as uuidv4 } from "uuid";

const mbtiURL = "/api/mbti";
const interestsURL = "/api/interests";
const roomListingURL = "/api/roomlisting/submit";

function CreateRoomListingForm() {
  const navigate = useNavigate();
  const [mbti, setMbti] = useState([]);
  const [interests, setInterests] = useState([]);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      profilePic: "",
      title: "",
      description: "",
      listingPics: "",
      address: "",
      town: "",
      mrt: "",
      amenities: "",
      listingTags: [""],
      wholeUnitOrRoomOnly: "",
      roomType: "",
      bathroomType: "",
      genderPreference: "",
      apartmentType: "",
      apartmentRoomTypes: "",
      securityDeposit: 0,
      rentPerMonth: 0,
      availability: "",
      stayLength: "",
      propertyDescription: "",
      occupantdescription: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "Choose a name 5-30 characters long")
        .max(30, "Choose a name 5-30 characters long")
        .required("*required"),

      profilePic: Yup.mixed().required("*required"),
      title: Yup.string()
        .min(5, "5-30 characters long")
        .max(30, "5-30 characters long")
        .required("*required"),

      description: Yup.string()
        .min(40, "40-600 character limit")
        .max(600)
        .required("*required"),

      listingPics: Yup.mixed(),
      address: Yup.string()
        .min(5, "5-30 characters long")
        .max(30, "5-30 characters long")
        .required("*required"),

      town: Yup.string().required("*required"),
      mrt: Yup.string().required("*required"),
      amenities: Yup.string().required("*required"),
      listingTags: Yup.string().required("*required"),
      wholeUnitOrRoomOnly: Yup.string().required("*required"),
      roomType: Yup.string().required("*required"),
      bathroomType: Yup.string().required("*required"),
      genderPreference: Yup.string().required("*required"),
      apartmentType: Yup.string().required("*required"),
      apartmentRoomTypes: Yup.string().required("*required"),
      securityDeposit: Yup.number()
        .min(0)
        .max(9999999)
        .positive()
        .integer()
        .required("*required"),
      rentPerMonth: Yup.number()
        .min(0)
        .max(9999999)
        .positive()
        .integer()
        .required("*required"),
      availability: Yup.date().min(new Date()).required("*required"),
      stayLength: Yup.string().required("*required"),
      propertyDescription: Yup.string()
        .min(40, "40-600 character limit")
        .max(600)
        .required("*required"),
      occupantdescription: Yup.string()
        .min(40, "40-600 character limit")
        .max(600)
        .required("*required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(roomListingURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      // include error checking
      console.log("Response:", data);
    },
  });

  //fetch MBTI data
  useEffect(() => {
    fetch(mbtiURL, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMbti(data));
  }, []);

  //fetch Interest data
  useEffect(() => {
    fetch(interestsURL, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setInterests(data));
  }, []);

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <Img
              alt="Night"
              loading="lazy"
              src="https://images.unsplash.com/photo-1499420838073-7de9d689547d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 mx-auto mb-5 text-white rounded-full bg-gray-50">
                <Img
                  src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                  loading="lazy"
                  alt="logo"
                />
              </div>

              <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Create Room Listing
              </h1>

              <p className="mt-4 leading-relaxed text-white/90">
                we have made the process of setting up a room / apartment
                leasing easy.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <button
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <Img
                    src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                    loading="lazy"
                    alt="logo"
                  />
                </button>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Create Room Listing
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  we have made the process of connecting with other users
                  seamless and quick.
                </p>
              </div>

              {/* Formik Form - Start */}

              <form
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <div className="flex justify-center items-center w-full">
                    {/* Full Name */}
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    {formik.touched.fullName && formik.errors.fullName ? (
                      <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                        {formik.errors.fullName}
                      </span>
                    ) : null}

                    {/* Upload Profile Picture */}
                    <label
                      htmlFor="profilePic"
                      className="flex flex-col justify-center items-center w-1/2 h-32 bg-slate-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                          <span className="font-semibold text-center">
                            Click to upload Profile Picture
                          </span>
                          <br /> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                      <input
                        id="profilePic"
                        name="profilePic"
                        type="file"
                        className="hidden"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.profilePic}
                      />
                    </label>
                  </div>
                </div>

                {/* title */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.fullName && formik.errors.fullName ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.fullName}
                  </span>
                ) : null}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {/* {formik.touched.age && formik.errors.age ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.age}
                  </span>
                ) : null} */}

                <div className="col-span-6">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>

                  <input
                    id="occupation"
                    name="occupation"
                    type="text"
                    placeholder="Enter your occupation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.occupation}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="mbti"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Myers-Breggs Personality
                  </label>

                  <select
                    id="mbti"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {/* <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    > */}
                    {/* <option selected>Choose a Personality</option> */}
                    {mbti.map((m) => (
                      <option
                        key={uuidv4()}
                        onChange={formik.handleBlur}
                        onBlur={formik.handleBlur}
                        value={formik.values.mbti}
                      >
                        {m.mbti} - {m.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="interests"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interests
                  </label>
                  <select
                    multiple
                    id="interests"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {/* <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    > */}
                    {/* <option selected>Choose Interests</option> */}
                    {interests.map((i) => (
                      <option
                        key={uuidv4()}
                        onChange={formik.handleBlur}
                        onBlur={formik.handleBlur}
                        value={formik.values.interests}
                      >
                        {i.interests}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="town"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Town
                  </label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    {/* <select
                      id="interests"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    > */}
                    {/* <option selected>Choose Town</option> */}
                    {towns.map((t) => (
                      <option
                        key={uuidv4()}
                        onChange={formik.handleBlur}
                        onBlur={formik.handleBlur}
                        value={formik.values.town}
                      >
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mrt"
                    className="block text-sm font-medium text-gray-700"
                  >
                    MRT
                  </label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    {/* <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    > */}
                    {/* <option selected>Choose MRT</option> */}
                    {mrts.map((mrt) => (
                      <option
                        key={uuidv4()}
                        onChange={formik.handleBlur}
                        onBlur={formik.handleBlur}
                        value={formik.values.mrt}
                      >
                        {mrt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Budget
                  </label>

                  <input
                    id="budget"
                    name="budget"
                    type="number"
                    placeholder="Enter your budget"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.budget}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {/* {formik.touched.budget && formik.errors.budget ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.budget}
                  </span>
                ) : null} */}

                {/* earlyMoveInDate */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Earliest Move in Date
                  </label>

                  <input
                    id="earlyMoveInDate"
                    name="earlyMoveInDate"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.earlyMoveInDate}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {/* {formik.touched.earlyMoveInDate && formik.errors.earlyMoveInDate ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.earlyMoveInDate}
                  </span>
                ) : null} */}

                {/* User Listing Tag */}
                <div className="col-span-6 flex-row">
                  {userListingTags.map((ult) => (
                    <>
                      <input
                        key={uuidv4()}
                        id="userListingTag"
                        name="userListingTag"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userListingTag}
                        className="mt-1 w-5 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <label
                        key={uuidv4()}
                        htmlFor="userListingTag"
                        className="flex-row justify-evenly text-sm font-medium text-gray-700 mx-auto"
                      >
                        {ult}
                      </label>
                    </>
                  ))}
                </div>

                {/* Description */}
                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="col-span-6">
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                      className="mt-1 w-full h-32 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create Room Listing
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default CreateRoomListingForm;
