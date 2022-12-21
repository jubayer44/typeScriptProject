import React from "react";

const Areas = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h2 className="text-2xl font-bold">AREAS</h2>
          <p className="w-[50px] h-1 bg-violet-500"></p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      <a href="/" className="relative">
        <img className="w-full transform transition duration-500 hover:scale-105" src="https://homepress.stylemixthemes.com/wp-content/uploads/2019/03/location-2.jpg" alt="" />
        <h5 className="text-2xl text-white bg-gray-600 p-2 rounded-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Los Angeles</h5>
      </a>
      <div className="relative">
        <img className="w-full" src="https://homepress.stylemixthemes.com/wp-content/uploads/2019/03/location-2.jpg" alt="" />
        <h5 className="text-2xl text-white font-bold absolute top-[80%] left-1/2">Los Angeles</h5>
      </div>
      <div className="relative">
        <img className="w-full" src="https://homepress.stylemixthemes.com/wp-content/uploads/2019/03/location-2.jpg" alt="" />
        <h5 className="text-2xl text-white font-bold absolute top-[80%] left-[50%]">Los Angeles</h5>
      </div>
      </div>
    </div>
  );
};

export default Areas;
