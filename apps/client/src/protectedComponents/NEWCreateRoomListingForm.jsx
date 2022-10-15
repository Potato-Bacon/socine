/* eslint-disable react/jsx-key */
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import towns from "../staticData/town";
import mrts from "../staticData/mrts";
import roomListingTags from "../staticData/roomListingTags";
import amenitiesTag from "../staticData/amenitiesTag";

const NEWCreateRoomListingForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        profilePic: "",
        title: "",
        description: "",
        listingPics: null,
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
        occupantDescription: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Choose a name 2-15 characters long")
          .max(15, "Choose a name 2-15 characters long")
          .required("*required"),

        profilePic: Yup.mixed().required("A file is required"),
        title: Yup.string()
          .min(5, "5-60 characters long")
          .max(60, "5-60 characters long")
          .required("*required"),

        description: Yup.string()
          .min(40, "40-600 character limit")
          .max(600)
          .required("*required"),

        listingPics: Yup.mixed().required("A file is required"),
        address: Yup.string()
          .min(5, "5-60 characters long")
          .max(60, "5-60 characters long")
          .required("*required"),

        town: Yup.string().required("*required"),
        mrt: Yup.string().required("*required"),
        amenities: Yup.array().required("*required"),
        listingTags: Yup.array().required("*required"),
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
          .required("*required"),
        rentPerMonth: Yup.number()
          .min(0)
          .max(9999999)
          .positive()
          .required("*required"),
        availability: Yup.date().min(new Date()).required("*required"),
        stayLength: Yup.string().required("*required"),
        propertyDescription: Yup.string()
          .min(40, "40-600 character limit")
          .max(600)
          .required("*required"),
        occupantDescription: Yup.string()
          .min(40, "40-600 character limit")
          .max(600)
          .required("*required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="name">First Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="title">description</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <label htmlFor="description">description</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <label htmlFor="address">address</label>
        <Field name="address" type="text" />
        <ErrorMessage name="address" />

        <label htmlFor="town">Town</label>
        <Field as="select" name="town">
          <option value="">Choose Town</option>
          {towns.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </Field>
        <ErrorMessage name="town" />

        <label htmlFor="mrt">MRT</label>
        <Field as="select" name="mrt">
          <option value="">Choose MRT</option>
          {mrts.map((mrt) => (
            <option value={mrt}>{mrt}</option>
          ))}
        </Field>
        <ErrorMessage name="mrt" />

        <label htmlFor="amenities">Amenities</label>
        <Field as="select" name="amenities" multiple={true}>
          {amenitiesTag.map((amt, i) => (
            <option key={i} value={[amt]}>
              {amt}
            </option>
          ))}
        </Field>
        <ErrorMessage name="amenities" />

        <label htmlFor="listingTags">Tags</label>
        <Field as="select" name="listingTags" multiple={true}>
          <option value="">Choose Listing Tags</option>
          {roomListingTags.map((rlt, i) => (
            <option key={i} value={[rlt]}>
              {rlt}
            </option>
          ))}
        </Field>
        <ErrorMessage name="listingTags" />

        <label htmlFor="wholeUnitOrRoomOnly">Whole unit or Room only?</label>
        <Field as="select" name="wholeUnitOrRoomOnly">
          <option value="">Choose Whole Unit / Room Only</option>

          <option value="Whole Unit">Whole Unit</option>
          <option value="Room Only">Room Only</option>
        </Field>
        <ErrorMessage name="wholeUnitOrRoomOnly" />

        <label htmlFor="roomType">Room Type</label>
        <Field as="select" name="roomType">
          <option value="">Choose Room Type</option>

          <option value="Master">Master</option>
          <option value="Common">Common</option>
          <option value="Others">Others</option>
        </Field>
        <ErrorMessage name="roomType" />

        <label htmlFor="bathroomType">Bathroom Type</label>
        <Field as="select" name="bathroomType">
          <option value="">Choose Bathroom Type</option>
          <option value="Shared Bathroom">Shared Bathroom</option>
          <option value="Own Bathroom">Own Bathroom</option>
          <option value="Ensuite">Ensuite</option>
          <option value="Others">Others</option>
        </Field>
        <ErrorMessage name="bathroomType" />

        <label htmlFor="apartmentType">Apartment Type</label>
        <Field as="select" name="apartmentType">
          <option value="">Choose Apartment Type</option>
          <option value="HDB">HDB</option>
          <option value="Condo">Condo</option>
          <option value="Landed">Landed</option>
          <option value="Others">Others</option>
        </Field>
        <ErrorMessage name="apartmentType" />

        <label htmlFor="roomType">Choose Apartment Room Type</label>
        <Field as="select" name="roomType">
          <option value="Studio">Studio</option>
          <option value="2-Bedroom">2-Bedroom</option>
          <option value="3-Bedroom">3-Bedroom</option>
          <option value="4-Bedroom">4-Bedroom</option>
          <option value="5-Bedroom">5-Bedroom</option>
          <option value="Executive">Executive</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Others">Others</option>
        </Field>
        <ErrorMessage name="apartmentType" />

        <label htmlFor="roomType">Choose Apartment Room Type</label>
        <Field
          name="roomType"
          type="number"
          placeholder="Enter expected Security Deposit"
        />

        <ErrorMessage name="apartmentType" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NEWCreateRoomListingForm;
