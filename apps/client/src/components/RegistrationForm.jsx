import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import "yup-phone";
// import YupPassword from "yup-password";
// YupPassword(Yup);
import Img from "react-cool-img";

const url = "/api/register";

function RegistrationForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      mobileNo: "",
      getEmail: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Choose a username 5-15 characters long")
        .max(15, "Choose a username 5-15 characters long")
        .required("username is required"),
      password: Yup.string()
        // .password()
        .min(
          6,
          "Password is too short - Choose a password with minimum 6 characters"
        )
        // .minLowercase(1, "Password must contain at least 1 lower-case letter")
        // .minUppercase(1, "Password must contain at least 1 upper-case letter")
        // .minNumbers(1, "Password must contain at least 1 number")
        // .minSymbols(1, "Password must contain at least 1 special character")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      mobileNo: Yup.string().phone("SG").required("Mobile Number is required"),
      getEmail: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      // include error checking
      console.log("Response:", data);

      if (data.msg === "Username in use") {
        alert("Username in use. Please try another username");
      } else if (data.msg === "Email in use") {
        alert("Email in use. Please try another email");
      } else if (data.msg === "Wrong Password" && "Username in use") {
        alert(
          "There is something wrong with your submmision. Please try again"
        );
      } else {
        alert("Registration Successful - Thank you for being part of Socine");
        navigate("/login");
      }
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
              src="https://images.unsplash.com/photo-1499420838073-7de9d689547d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 mx-auto mb-5 text-white rounded-full bg-gray-50">
                <a href="/">
                  <Img
                    src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                    loading="lazy"
                    alt="logo"
                  />
                </a>
              </div>

              <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Socine
              </h1>

              <p className="mt-4 leading-relaxed text-white/90">
                Having to move into a new space and connect with strangers can
                seem overwhelming and you are not alone. Socine provides you the
                freedom to make better choices.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <Img
                    className="h-8 sm:h-10"
                    fill="none"
                    src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                    loading="lazy"
                  />
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Socine
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Having to move into a new space and connect with strangers can
                  seem overwhelming and you are not alone. Socine provides you
                  the freedom to make better choices.
                </p>
              </div>

              {/* Formik Form - Start */}

              <form
                autoComplete="off"
                onSubmit={formik.handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.username && formik.errors.username ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.username}
                  </span>
                ) : null}

                <div className="col-span-6">
                  <label
                    htmlFor="mobileNo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="mobileNo"
                    name="mobileNo"
                    type="tel"
                    placeholder="Enter a valid mobile number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileNo}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.mobileNo && formik.errors.mobileNo ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.mobileNo}
                  </span>
                ) : null}

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.email}
                  </span>
                ) : null}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.password}
                  </span>
                ) : null}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <span className="text-sm text-red-500 italic col-span-6 flex gap-4">
                    {formik.errors.confirmPassword}
                  </span>
                ) : null}

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      id="getEmail"
                      name="getEmail"
                      type="checkbox"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.getEmail}
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <button className="text-gray-700 underline">
                      <Link to="/termsconditions">terms and conditions</Link>
                    </button>{" "}
                    and{" "}
                    <button className="text-gray-700 underline">
                      <Link to="/PrivacyPolicy">privacy policy</Link>
                    </button>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{" "}
                    <button className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">
                      <Link to="/Login">Login</Link>
                    </button>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default RegistrationForm;
