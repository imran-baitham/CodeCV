import React from "react";

function Academy() {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-pink-500">
      {/*  =========={  Transform Utilites  }==========  */}
      <div className="grid grid-cols-5 gap-10">
        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:scale-75 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:rotate-45 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform origin-bottom-left hover:rotate-45 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform origin-top hover:rotate-45 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:translate-x-4 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:-translate-x-full transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:translate-y-12 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:translate-y-6 hover:translate-x-6 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:rotate-90 hover:translate-x-full hover:scale-125 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>

        <div className="h-32 w-32 relative">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
          <div className="transform hover:rotate-90 hover:scale-125 transition duration-300 bg-white absolute h-full w-full">
            <div className="h-full w-full rounded-lg shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
