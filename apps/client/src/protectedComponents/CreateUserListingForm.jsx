/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Img from "react-cool-img";
import { useEffect, useState } from "react";
import towns from "../staticData/town";
import mrts from "../staticData/mrts";
import userListingTags from "../staticData/userLiftingTags";
import axios from "axios";
import { toast } from "react-toastify";

const mbtiURL = "/api/mbti";
const interestsURL = "/api/interests";
const createUserListingURL = "/api/userlistings/submit";
const uploadImageUrl = "/api/images/upload";

function CreateUserListingForm({ userName, token }) {
  const navigate = useNavigate();
  const [mbti, setMbti] = useState([]);
  const [interests, setInterests] = useState([]);
  const formik = useFormik({
    initialValues: {
      profilePicture: null,
      name: "",
      age: "",
      gender: "",
      occupation: "",
      mbti: "",
      interests: "",
      town: "",
      mrt: "",
      budget: "",
      earlyMoveInDate: "",
      userListingTag: "",
      description: "",
      submittedBy: sessionStorage.getItem("userid"),
    },
    validationSchema: Yup.object({
      profilePicture: Yup.mixed().required("A file is required"),
      name: Yup.string()
        .min(2, "Choose a name 2-15 characters long")
        .max(15, "Choose a name 2-15 characters long")
        .required("*required"),
      age: Yup.number()
        .min(18, "You need to be 18 years old and above")
        .max(99)
        .positive()
        .integer()
        .required("*required"),
      gender: Yup.string().required("*required"),
      occupation: Yup.string()
        .min(5, "Indicate an occupation 5-60 characters long")
        .max(60, "Indicate a occupation 5-60 characters long")
        .required("*required"),
      mbti: Yup.string().required("*required"),
      interests: Yup.array().required("*required"),
      town: Yup.string().required("*required"),
      mrt: Yup.string().required("*required"),
      budget: Yup.number()
        .positive()
        .integer()
        .min(0, "We suggest to indicate a realistic amount")
        .max(9999999)
        .required("*required"),
      earlyMoveInDate: Yup.date().min(new Date()).required("*required"),
      userListingTag: Yup.array().required("*required"),
      description: Yup.string()
        .min(40, "40-600 character limit")
        .max(600)
        .required("*required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      console.log(values.profilePicture);

      const formData = new FormData();
      const token = sessionStorage.getItem("accessToken");
      const username = sessionStorage.getItem("username");

      formData.append("profilePicture", values.profilePicture);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await axios.post(uploadImageUrl, formData, config, {}).then((res) => {
        values.profilePicture = res.data.imageURL;
      });

      const response = await axios.post(createUserListingURL, values, {
        headers: {
          Authorization: `Bearer ${token} ${username}`,
        },
      });
      console.log(response);

      // axios.post(uploadImageUrl, formData, config).then((res) => {
      //   values.profilePicture = res.data.imageURL;
      //   return axios.post(createUserListingURL, values);
      // });

      // const res = await fetch(userlistingURL, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // });

      // const data = await res.json();
      // include error checking
      // console.log("Response:", data);

      toast.success("Room Listing Created!");

      navigate("/user/");
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
              src="https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg"
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
                Create User Listing
              </h1>

              <p className="mt-4 leading-relaxed text-white/90">
                we have made the process of connecting with other users seamless
                and quick.
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
                  Create User Listing
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
                    <label
                      htmlFor="profilePicture"
                      className="flex flex-col justify-center items-center w-1/2 h-48 bg-slate-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                        id="profilePicture"
                        name="profilePicture"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "profilePicture",
                            event.currentTarget.files[0]
                          );
                        }}
                        onBlur={formik.handleBlur}
                        value={undefined}
                      />
                    </label>
                  </div>
                </div>

                {formik.touched.profilePicture &&
                formik.errors.profilePicture ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.profilePicture}
                  </span>
                ) : null}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.name && formik.errors.name ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.name}
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

                {formik.touched.age && formik.errors.age ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.age}
                  </span>
                ) : null}
                <div className="col-span-6">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Gender</option>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

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

                {formik.touched.occupation && formik.errors.occupation ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.occupation}
                  </span>
                ) : null}

                <div className="col-span-6">
                  <label
                    htmlFor="mbti"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Myers-Breggs Personality
                  </label>

                  <select
                    id="mbti"
                    name="mbti"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mbti}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose a Personality</option>
                    {mbti.map((m) => (
                      <option
                        // name="mbti"
                        key={m._id}
                        label={m.mbti}
                        value={m._id}
                      >
                        {m.mbti}
                      </option>
                    ))}
                  </select>
                </div>

                {formik.touched.mbti && formik.errors.mbti ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.mbti}
                  </span>
                ) : null}

                <div className="col-span-6 ">
                  <label
                    htmlFor="interests"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interests
                  </label>
                  <select
                    multiple
                    id="interests"
                    name="interests"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.interests}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {/* <option selected>Choose Interests</option> */}
                    {interests.map((i) => (
                      // eslint-disable-next-line react/jsx-key
                      <option value={[i._id]}>{i.interests}</option>
                    ))}
                  </select>
                </div>

                {formik.touched.interests && formik.errors.interests ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.interests}
                  </span>
                ) : null}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="town"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Town
                  </label>
                  <select
                    name="town"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.town}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {/* <select
                      id="interests"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    > */}
                    <option value="">Choose Town</option>
                    {towns.map((t) => (
                      // eslint-disable-next-line react/jsx-key
                      <option
                        value={t}
                        // name="town"
                      >
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {formik.touched.town && formik.errors.town ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.town}
                  </span>
                ) : null}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mrt"
                    className="block text-sm font-medium text-gray-700"
                  >
                    MRT
                  </label>
                  <select
                    name="mrt"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mrt}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose MRT</option>
                    {mrts.map((mrt) => (
                      <option
                        key={mrt._id}
                        // name="mrt"
                      >
                        {mrt}
                      </option>
                    ))}
                  </select>
                </div>

                {formik.touched.mrt && formik.errors.mrt ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.mrt}
                  </span>
                ) : null}

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
                {formik.touched.budget && formik.errors.budget ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.budget}
                  </span>
                ) : null}

                {/* earlyMoveInDate */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="earlyMoveInDate"
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

                {formik.touched.earlyMoveInDate &&
                formik.errors.earlyMoveInDate ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.earlyMoveInDate}
                  </span>
                ) : null}

                {/* interest */}
                <div className="col-span-6">
                  <label
                    htmlFor="userListingTag"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Listing Tag
                  </label>
                  <select
                    multiple
                    name="userListingTag"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userListingTag}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {userListingTags.map((ult) => (
                      <option key={ult._id} value={[ult]}>
                        {ult}
                      </option>
                    ))}
                  </select>
                </div>

                {formik.touched.userListingTag &&
                formik.errors.userListingTag ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.userListingTag}
                  </span>
                ) : null}

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

                {formik.touched.description && formik.errors.description ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.description}
                  </span>
                ) : null}

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create User Listing
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

export default CreateUserListingForm;
