import React from "react";
import NavPublic from "../components/NavPublic";
import Img from "react-cool-img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function MeetDevPage() {
  return (
    <>
      <NavPublic />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            The team behind Socine
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <Img
                className="object-cover w-52 h-52 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                className="object-cover w-52 h-52 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
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
    </>
  );
}

export default MeetDevPage;
