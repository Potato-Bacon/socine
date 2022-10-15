import { Link } from "react-router-dom";
import Img from "react-cool-img";

function NavPublic() {
  return (
    <>
      <header className="bg-gray-900 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 dark:text-teal-300" href="/">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12mx-auto text-blue-600 rounded-full bg-gray-50 hover:animate-pulse">
                  <Img
                    src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                    loading="lazy"
                    alt="logo"
                  />
                </div>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <button className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 shadow hover:bg-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:text-white  dark:hover:text-white/75">
                    <Link to="/developers">Meet The Developers</Link>
                  </button>

                  <button className="rounded-md bg-teal-600  px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600 active:bg-blue-700  hover:dark:bg-blue-600 active:dark:bg-blue-700">
                    <Link to="/login">Login</Link>
                  </button>

                  <div className="hidden sm:flex">
                    <button className="rounded-md bg-teal-600  px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600 active:bg-blue-700  hover:dark:bg-blue-600 active:dark:bg-blue-700">
                      <Link to="/register">Register</Link>
                    </button>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavPublic;
