import NavLanding from "../components/NavLanding";
function LandingPage() {
  return (
    <>
      <div>
        <NavLanding />
      </div>
      <section>
        <div className="mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-col w-full mb-12 text-center">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-44 h-44 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50 hover:animate-pulse">
                <img src="../src/assets/2.png" loading="lazy" alt="logo" />
              </div>
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                The freedom to make <br className="hidden lg:block" />
                better choices
              </h1>

              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
                Having to move into a new space can seem overwhelming and we
                understand it. Watch this space for any updates.
              </p>

              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
                title="read more"
              >
                {" "}
                Learn More »{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
