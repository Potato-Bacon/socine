import NavPublic from "../components/NavPublic";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div>
        <NavPublic />
      </div>
      {/* <section className="text-white bg-center bg-cover bg-blend-darken bg-[url('https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"> */}
      <section>
        <div className="mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-col w-full mb-12 text-center">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-44 h-44 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50 hover:animate-pulse">
                <Img
                  src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                  loading="lazy"
                  alt="logo"
                />
              </div>
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                The freedom to make <br className="hidden lg:block" />
                better choices
              </h1>

              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
                Having to move into a new space and connect with strangers can
                seem overwhelming and you are not alone. Watch this space for
                updates.
              </p>

              <button
                className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
                title="read more"
              >
                <Link to="/register">Learn More »</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
