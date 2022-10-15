import NavPublic from "../components/NavPublic";
import Footer from "../components/Footer";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div>
        <NavPublic />
      </div>
      <div className="text-white bg-center bg-cover bg-blend-darken bg-[url('https://images.unsplash.com/photo-1499420838073-7de9d689547d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')]">
        <section>
          <div className="hero-content mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex shadow-2xl">
            <div className="hero-content align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-2xl transform transition-all">
              <div className="max-w-3xl mx-auto text-center mb-4">
                <div className="hero-content flex-col">
                  <div className=" items-center justify-center flex-shrink-0 w-44 h-44 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50 hover:animate-pulse">
                    <Img
                      src="https://res.cloudinary.com/dvhamwchi/image/upload/v1665338159/assets/vc9jwpzmrmui9pwimkqq.png"
                      loading="lazy"
                      alt="logo"
                    />
                  </div>
                  <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                    The freedom to make <br className="hidden lg:block" />
                    better choices
                  </h1>

                  <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-white">
                    Having to move into a new space and connect with strangers
                    can seem overwhelming and you are not alone. At Socine we
                    understand the complexity of social integration and we aim
                    to make it easier for evryone to be able to socially connect
                    with one another and make informed decisions for your
                    perfect tenant experience.
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
