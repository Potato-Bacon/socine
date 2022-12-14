/* eslint-disable react/jsx-key */
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Img from "react-cool-img";
import towns from "../staticData/town";
import mrts from "../staticData/mrts";
import roomListingTags from "../staticData/roomListingTags";
import amenitiesTag from "../staticData/amenitiesTag";
import axios from "axios";
import { toast } from "react-toastify";

const createRoomListingURL = "/api/roomlistings/submit";
const uploadImageUrl = "/api/images/uploadlisting";

function CreateRoomListingForm({ userName, token }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      shortDescription: "",
      listingPic: null,
      address: "",
      town: "",
      mrt: "",
      amenities: "",
      listingTags: "",
      wholeUnitOrRoomOnly: "",
      roomType: "",
      bathroomType: "",
      genderPreference: "",
      apartmentType: "",
      apartmentRoomTypes: "",
      securityDeposit: "",
      rentPerMonth: "",
      availability: "",
      stayLength: "",
      propertyDescription: "",
      occupantsDescription: "",
      submittedBy: sessionStorage.getItem("userid"),
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Choose a name 2-15 characters long")
        .max(15, "Choose a name 2-15 characters long")
        .required("*required"),

      title: Yup.string()
        .min(5, "5-60 characters long")
        .max(60, "5-60 characters long")
        .required("*required"),

      shortDescription: Yup.string()
        .min(40, "40-200 character limit")
        .max(200)
        .required("*required"),

      listingPic: Yup.mixed().required("A file is required"),
      address: Yup.string()
        .min(5, "5-60 characters long")
        .max(60, "5-60 characters long")
        .required("*required"),

      town: Yup.string().required("*required"),
      mrt: Yup.string().required("*required"),
      amenities: Yup.array().required("*required"),
      listingTags: Yup.array().required("*required"),
      wholeUnitOrRoomOnly: Yup.string().required("*required"),
      // roomType: Yup.string().required("*required"),
      bathroomType: Yup.string().required("*required"),
      genderPreference: Yup.string().required("*required"),
      apartmentType: Yup.string().required("*required"),
      apartmentRoomTypes: Yup.string().required("*required"),
      securityDeposit: Yup.number()
        .min(0)
        .max(9999999)
        .positive()
        .required("*required"),
      rentPerMonth: Yup.number()
        .min(0)
        .max(9999999)
        .positive()
        .required("*required"),
      availability: Yup.date().min(new Date()).required("*required"),
      stayLength: Yup.string().required("*required"),
      propertyDescription: Yup.string()
        .min(100, "100-3000 character limit")
        .max(3000)
        .required("*required"),
      occupantsDescription: Yup.string()
        .min(100, "100-3000 character limit")
        .max(3000)
        .required("*required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      console.log(values.listingPic);

      const formData = new FormData();

      formData.append("listingPic", values.listingPic);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await axios.post(uploadImageUrl, formData, config, {}).then((res) => {
        values.listingPic = res.data.imageURL;
        console.log(values.listingPic);
      });

      const token = sessionStorage.getItem("accessToken");
      const username = sessionStorage.getItem("username");

      const response = await axios.post(createRoomListingURL, values, {
        headers: {
          Authorization: `Bearer ${token} ${username}`,
        },
      });
      console.log(response);
      toast.success("Room Listing Created!");

      navigate("/user");
    },
  });
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
                Create Room Listing
              </h1>

              <p className="mt-4 leading-relaxed text-white/90">
                we have made the process of leasing your property seamless and
                quick.
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
                  we have made the process of leasing your property seamless and
                  quick.
                </p>
              </div>

              {/* Formik Form - Start */}

              <form
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                {/* name */}
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
                    placeholder="Enter your Name"
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

                {/* title */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter your title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.title && formik.errors.title ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.title}
                  </span>
                ) : null}

                {/* description */}
                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Short Description
                  </label>

                  <input
                    id="shortDescription"
                    name="shortDescription"
                    type="text"
                    placeholder="Enter your description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shortDescription}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.shortDescription &&
                formik.errors.shortDescription ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.shortDescription}
                  </span>
                ) : null}

                {/* Listing Pics */}
                <div className="col-span-6">
                  <div className="flex justify-center items-center w-full">
                    <label
                      htmlFor="listingPic"
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
                            Click to upload Listing Pictures
                          </span>
                          <br /> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                      <input
                        id="listingPic"
                        name="listingPic"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                          formik.setFieldValue(
                            "listingPic",
                            event.currentTarget.files[0]
                          );
                        }}
                        onBlur={formik.handleBlur}
                        value={undefined}
                      />
                    </label>
                  </div>
                </div>

                {formik.touched.listingPic && formik.errors.listingPic ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.listingPic}
                  </span>
                ) : null}

                {/* address */}
                <div className="col-span-6">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>

                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {formik.touched.address && formik.errors.address ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.address}
                  </span>
                ) : null}

                {/* town */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="town"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Town
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.town}
                    name="town"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Town</option>
                    {towns.map((t, i) => (
                      <option key={i} value={t}>
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

                {/* mrt */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mrt"
                    className="block text-sm font-medium text-gray-700"
                  >
                    MRT
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mrt}
                    name="mrt"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose MRT</option>
                    {mrts.map((mrt, i) => (
                      <option key={i} value={mrt}>
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

                {/* amenities */}
                <div className="col-span-6">
                  <label
                    htmlFor="amenities"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amenities
                  </label>
                  <select
                    multiple
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.amenities}
                    id="amenities"
                    name="amenities"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {amenitiesTag.map((amt, i) => (
                      <option key={i} value={[amt]}>
                        {amt}
                      </option>
                    ))}
                  </select>
                </div>

                {formik.touched.amenities && formik.errors.amenities ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.amenities}
                  </span>
                ) : null}

                {/* listingTags */}
                <div className="col-span-6">
                  <label
                    htmlFor="listingTags"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tags
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.listingTags}
                    multiple
                    id="listingTags"
                    name="listingTags"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    {roomListingTags.map((rlt, i) => (
                      <option key={i} value={[rlt]}>
                        {rlt}
                      </option>
                    ))}
                  </select>
                </div>

                {formik.touched.listingTags && formik.errors.listingTags ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.listingTags}
                  </span>
                ) : null}

                {/* WholeUnitOrRoomOnly */}

                <div className="col-span-6">
                  <label
                    htmlFor="wholeUnitOrRoomOnly"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Whole unit or room only?
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.wholeUnitOrRoomOnly}
                    name="wholeUnitOrRoomOnly"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Whole Unit / Room Only</option>
                    <option value="Whole Unit">Whole Unit</option>
                    <option value="Room Only">Room Only</option>
                  </select>
                </div>

                {formik.touched.wholeUnitOrRoomOnly &&
                formik.errors.wholeUnitOrRoomOnly ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.wholeUnitOrRoomOnly}
                  </span>
                ) : null}

                {/* room type */}
                {formik.values.wholeUnitOrRoomOnly === "Room Only" && (
                  <>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="roomType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Room Type
                      </label>
                      <select
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.roomType}
                        name="roomType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        <option value="">Choose Room Type</option>
                        <option value="Master">Master</option>
                        <option value="Common">Common</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    {formik.touched.roomType && formik.errors.roomType ? (
                      <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                        {formik.errors.roomType}
                      </span>
                    ) : null}
                  </>
                )}

                {/* bathroomType */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="bathroomType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bathroom Type
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bathroomType}
                    name="bathroomType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Bathroom Type</option>
                    <option value="Shared Bathroom">Shared Bathroom</option>
                    <option value="Own Bathroom">Own Bathroom</option>
                    <option value="Ensuite">Ensuite</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {formik.touched.bathroomType && formik.errors.bathroomType ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.bathroomType}
                  </span>
                ) : null}

                {/* genderPreference */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="genderPreference"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender Preference
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.genderPreference}
                    name="genderPreference"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Gender Preference</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                {formik.touched.genderPreference &&
                formik.errors.genderPreference ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.genderPreference}
                  </span>
                ) : null}

                {/* aprtmentType */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="apartmentType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment Type
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apartmentType}
                    name="apartmentType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Apartment Type</option>
                    <option value="HDB">HDB</option>
                    <option value="Condo">Condo</option>
                    <option value="Landed">Landed</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {formik.touched.apartmentType && formik.errors.apartmentType ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.apartmentType}
                  </span>
                ) : null}

                {/* apartment room type */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="apartmentRoomTypes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment Room Types
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apartmentRoomTypes}
                    name="apartmentRoomTypes"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Apartment Room Type</option>
                    <option value="Studio">Studio</option>
                    <option value="2-Bedroom">2-Bedroom</option>
                    <option value="3-Bedroom">3-Bedroom</option>
                    <option value="4-Bedroom">4-Bedroom</option>
                    <option value="5-Bedroom">5-Bedroom</option>
                    <option value="Executive">Executive</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {formik.touched.apartmentRoomTypes &&
                formik.errors.apartmentRoomTypes ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.apartmentRoomTypes}
                  </span>
                ) : null}

                {/* Security Deposit */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="securityDeposit"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Security Deposit
                  </label>

                  <input
                    id="securityDeposit"
                    name="securityDeposit"
                    type="number"
                    placeholder="Enter expected Security Deposit"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.securityDeposit}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {formik.touched.securityDeposit &&
                formik.errors.securityDeposit ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.securityDeposit}
                  </span>
                ) : null}

                {/* Rent Per Month */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="rentPerMonth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rent per month
                  </label>

                  <input
                    id="rentPerMonth"
                    name="rentPerMonth"
                    type="number"
                    placeholder="Enter expected monthly rent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rentPerMonth}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {formik.touched.rentPerMonth && formik.errors.rentPerMonth ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.rentPerMonth}
                  </span>
                ) : null}

                {/* Availability */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="availability"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Availability
                  </label>

                  <input
                    id="availability"
                    name="availability"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.availability}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.availability && formik.errors.availability ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.availability}
                  </span>
                ) : null}

                {/* stay length */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="stayLength"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stay Length
                  </label>
                  <select
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stayLength}
                    name="stayLength"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Choose Expected Stay Length</option>
                    <option value="6 months">6 months</option>
                    <option value="12 months">12 months</option>
                    <option value="24 months">24 months</option>
                    <option value="36 months">36 months</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {formik.touched.stayLength && formik.errors.stayLength ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.stayLength}
                  </span>
                ) : null}

                {/* Property Description */}
                <div className="col-span-6">
                  <label
                    htmlFor="propertyDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    About the Room / Unit
                  </label>
                  <div className="col-span-6">
                    <textarea
                      id="propertyDescription"
                      name="propertyDescription"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.propertyDescription}
                      className="mt-1 w-full h-32 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                </div>

                {formik.touched.propertyDescription &&
                formik.errors.propertyDescription ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.propertyDescription}
                  </span>
                ) : null}

                {/* Occupant Description */}
                <div className="col-span-6">
                  <label
                    htmlFor="occupantDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Describe the occupants
                  </label>
                  <div className="col-span-6">
                    <textarea
                      id="occupantsDescription"
                      name="occupantsDescription"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.occupantsDescription}
                      className="mt-1 w-full h-32 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>
                </div>

                {formik.touched.occupantsDescription &&
                formik.errors.occupantsDescription ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.occupantsDescription}
                  </span>
                ) : null}

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
