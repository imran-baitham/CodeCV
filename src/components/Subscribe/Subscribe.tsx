import React from "react";

function Subscribe() {
  return (
    <div className="container_main pb-10">
      <div className="lg:h-[270px] dark:bg-zinc-700 p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 md:p-[60px] lg:border lg:border-white">
          <div className="lg:w-auto">
            <h1 className="font-bold text-2xl py-2">
              Subscribe Our Newsletter
            </h1>
            <p className="font medium text-md pb-7">
              Don't miss out on your discounts. Subscribe to our email
              newsletter to get the best offers, discounts, coupons, gifts and
              much more.
            </p>
          </div>
          <div className="flex items-center md:justify-left lg:justify-center">
            <form className="mt-4 sm:flex w-full sm:w-auto">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
