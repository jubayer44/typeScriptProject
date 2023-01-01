import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="px-4 pb-24 mx-auto md:pt-20">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img-gradient">
            <img
              className="w-full h-[80vh] relative"
              src="https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?w=900&t=st=1672552038~exp=1672552638~hmac=78898ef2961092240c9751348fc3474d9632958b216f1fac6a71f7a83e379ece"
              alt=""
            />
          </div>
          <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
              Find your{" "}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 lg:inline">
                Perfect Home
              </span>{" "}
              you'll love to live
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
              Take a deep dive and browse homes for sale, original neighborhood
              photos, resident reviews and local insights to find what is right
              for you.
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-gradient">
            <img
              className="w-full h-[80vh] relative"
              src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=900&t=st=1672556701~exp=1672557301~hmac=4c552d5d2b58e8fda26011a7deb831e014237cfdb9e14b2a54a079deeba4b9fc"
              alt=""
            />
          </div>
          <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
              Find your{" "}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 lg:inline">
                Perfect Home
              </span>{" "}
              you'll love to live
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
              Take a deep dive and browse homes for sale, original neighborhood
              photos, resident reviews and local insights to find what is right
              for you.
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-gradient">
            <img
              className="w-full h-[80vh] relative"
              src="https://img.freepik.com/free-photo/interior-bedroom-white-creamy-tones_181624-16134.jpg?w=1060&t=st=1672556870~exp=1672557470~hmac=f77ccb607e7fdeed9c29fce8a002cf6f367c20fb03008f8c1ae77ee51acfb907"
              alt=""
            />
          </div>
          <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
              Find your{" "}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 lg:inline">
                Perfect Home
              </span>{" "}
              you'll love to live
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
              Take a deep dive and browse homes for sale, original neighborhood
              photos, resident reviews and local insights to find what is right
              for you.
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-gradient">
            <img
              className="w-full h-[80vh] relative"
              src="https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?w=900&t=st=1672556910~exp=1672557510~hmac=dffce13a29ebc03df6e966d7423b7f6edeb7e6c47052f12452ae1a371bd3fc76"
              alt=""
            />
          </div>
          <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
              Find your{" "}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 lg:inline">
                Perfect Home
              </span>{" "}
              you'll love to live
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
              Take a deep dive and browse homes for sale, original neighborhood
              photos, resident reviews and local insights to find what is right
              for you.
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-gradient">
            <img
              className="w-full h-[80vh] relative"
              src="https://img.freepik.com/free-photo/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other_181624-14768.jpg?w=900&t=st=1672556974~exp=1672557574~hmac=3e76cab4c52374cdd9f375158f9006cbf2f28ad30a79bd186ed3f8e697774131"
              alt=""
            />
          </div>
          <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
              Find your{" "}
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500 lg:inline">
                Perfect Home
              </span>{" "}
              you'll love to live
            </h1>
            <p className="px-0 mb-6 text-lg text-gray-200 md:text-xl lg:px-24">
              Take a deep dive and browse homes for sale, original neighborhood
              photos, resident reviews and local insights to find what is right
              for you.
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
