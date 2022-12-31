import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Banner = () => {
  const {user} = useContext(AuthContext);
  console.log(user?.email);



  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          Find your{" "}
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            Perfect Home
          </span>{" "}
          you'll love to live
        </h1>
        <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
        Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.
        </p>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <a
            className="inline-flex mr-2 items-center justify-center bg-violet-500 rounded-md p-2 text-white font-bold"
            href="/"
          >
            Get Started
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center justify-center mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0 border p-2 rounded-md"
            href="/"
          >
            Book a Demo
           
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
