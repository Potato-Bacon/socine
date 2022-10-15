import NavPublic from "../components/NavPublic";
import Img from "react-cool-img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function MeetDevPage() {
  return (
    <>
      <NavPublic />
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto max-h-screen">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              The team behind Socine
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
              As Software Engineering Immersive students from General Assembly
              Singapore, Socine was developed as part of our Capstone Final
              Project. Please feel free to reach out to us and take a look at
              our portfolios.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Img
                  className="object-cover w-52 h-52 rounded-full ring-4 ring-gray-300"
                  src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665497071/assets/zi3ghyvnkos9sz7frhcj.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  Justen Manni
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Full Stack Developer
                </p>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  General Assembly Singapore - SEI38
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://github.com/JustenMX"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="github"
                  >
                    <svg className="w-6 h-6 fill-current" fill="none">
                      <FontAwesomeIcon icon={faGithub} />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/justenmanni/"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="linkedin"
                  >
                    <svg className="w-6 h-6 fill-current" fill="none">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="discord"
                  >
                    <svg className="w-6 h-6 fill-current" fill="none">
                      <FontAwesomeIcon icon={faDiscord} />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Img
                  className="object-cover object-top w-52 h-52 rounded-full ring-4 ring-gray-300"
                  src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665497650/assets/t3jnidsisuhaamuc7vcb.jpg"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  Andy Loh
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Full Stack developer
                </p>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  General Assembly Singapore - SEI38
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href="https://github.com/Potato-Bacon"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="github"
                  >
                    <svg className="w-6 h-6 fill-current" fill="none">
                      <FontAwesomeIcon icon={faGithub} />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/andyloh/"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="linkedin"
                  >
                    <svg className="w-6 h-6 fill-current" fill="none">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="discord"
                  >
                    <svg className="w-6 h-6 fill-current" fill="none">
                      <FontAwesomeIcon icon={faDiscord} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MeetDevPage;
