import React from "react";

const ChooseUs = () => {
  return (
    <div className="my-10">
      <div className="flex justify-center mb-10">
        <div>
          <h2 className="text-2xl font-bold">WHY CHOOSE US</h2>
          <p className="w-[50px] h-1 bg-violet-500"></p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="border-2 flex flex-col items-center rounded-md p-4">
          <img className="w-24 mb-4" src="https://code-theme.com/html/findhouses/images/icons/icon-4.svg" alt="" />
          <h4 className="text-gray-700 text-xl font-bold text-center">
          Wide Renge Of Properties
          </h4>
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae quasi quo, vero doloribus deserunt delectus possimus
            nostrum minus iusto?
          </p>
        </div>
        <div className="border-2 flex flex-col items-center rounded-md p-4">
          <img className="w-24 mb-4" src="https://code-theme.com/html/findhouses/images/icons/icon-5.svg" alt="" />
          <h4 className="text-gray-700 text-xl font-bold text-center">
          Trusted by thousands
          </h4>
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae quasi quo, vero doloribus deserunt delectus possimus
            nostrum minus iusto?
          </p>
        </div>
        <div className="border-2 flex flex-col items-center rounded-md p-4">
          <img className="w-24 mb-4" src="https://code-theme.com/html/findhouses/images/icons/icon-6.svg" alt="" />
          <h4 className="text-gray-700 text-xl font-bold text-center">
          Financing made easy
          </h4>
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae quasi quo, vero doloribus deserunt delectus possimus
            nostrum minus iusto?
          </p>
        </div>
        <div className="border-2 flex flex-col items-center rounded-md p-4">
          <img className="w-24 mb-4" src="https://code-theme.com/html/findhouses/images/icons/icon-15.svg" alt="" />
          <h4 className="text-xl font-bold text-gray-700 text-center">
          We are here near you
          </h4>
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae quasi quo, vero doloribus deserunt delectus possimus
            nostrum minus iusto?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
