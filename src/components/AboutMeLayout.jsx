import React from "react";

export const AboutMeLayout = () => {
  let a = "<SS/>";
  return (
    <div className="flex flex-col items-center w-screen bg-gray-50">
      <div className="flex flex-col items-center gap-6 mx-4 my-16 md:w-auto md:p-4 md:gap-12  xl:w-[1280px] ">
        <div className="flex justify-center items-center menu-para rounded-xl w-[105px] h-[28px] bg-gray-200">
          About me
        </div>
        <div className="flex flex-col items-center mx-4 lg:items-start lg:flex-row  md:w-auto md:px-1 md:mx-0 xl:[1280px] gap-12 ">
          <div className="w-72 h-[300px] lg:w-[440px] lg:h-[520px] xl:w-[584px] ">
            <div className="flex relative  lg:w-[440px] lg:h-[520px]  xl:mr-[144px]">
              <img
                src="/img-1.jpeg"
                className="absolute z-10 w-60 left-1/2 h-72 -translate-x-1/2 lg:translate-x-0 lg:left-[40px]  lg:w-[400px] lg:h-[480px] object-cover bg-white p-2 "
                alt=""
              />
              <div className="absolute z-0 w-[264px] h-[272px] top-7 left-1/2 -translate-x-1/2 lg:left-0 lg:ml-0 lg:-translate-x-0  lg:w-[400px] lg:h-[480px] bg-gray-200 p-2"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-left md:w-auto text-wrap ">
            <h1 className="text-3xl font-semibold text-gray-900">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col gap-4">
              <p className="menu-para w-auto">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="menu-para w-auto">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="menu-para w-auto">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="menu-para w-auto">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="menu-para w-auto">
                Finally, some quick bits about me.
              </p>
              <div className="flex w-auto">
                <div className="flex flex-col gap-2.5">
                  <li className="menu-para">B.E. in Computer Engineering</li>
                  <li className="menu-para">Full time freelancer</li>
                </div>
                <div>
                  <li className="menu-para">Avid learner</li>
                  <li className="menu-para">Aspiring indie hacker</li>
                </div>
              </div>
              <p className="menu-para w-auto">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
