import React from "react";
import { Button } from "../Button/Button";

export function Subscribe() {
  return (
    <div className="container_main pb-10">
      <div className="md:bg-nature-dark bg-cover object-cover bg-center h-full w-full object-cover z-10">
        <div className="lg:h-[270px] p-3 dark:bg-[rgba(0,0,0,0.7)] bg-[rgba(255,255,255,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-4 md:p-[60px]">
            <div className="lg:w-auto">
              <h1 className="font-bold text-2xl py-2">
                Subscribe Our Newsletter
              </h1>
              <p className="font medium text-md pb-5 md:pb-0 md:pr-[3rem]">
                {"Don't"} miss out on your discounts. Subscribe to our email
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
                  required
                  className="w-full min-w-0 appearance-none rounded border border-gray-300 bg-white py-3 md:py-0 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-1 sm:flex-shrink-0">
                  <Button className="rounded" full>
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
