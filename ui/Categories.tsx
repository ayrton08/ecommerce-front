/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Categories = () => {
  return (
    <section className="text-gray-600 body-font" id="categories">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-2 justify-center">
          <div className="p-2 lg:w-[210px] md:w-1/2 w-full">
            <Link
              className="h-full flex items-center  p-4 rounded-lg bg-white hover:bg-black/10"
              href="/search"
            >
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Tecnology
                </h2>
              </div>
            </Link>
          </div>
          <div className="p-2 lg:w-[210px] md:w-1/2 w-full">
            <div className="h-full flex items-center   p-4 rounded-lg bg-white hover:bg-black/10">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Tecnology
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-[210px] md:w-1/2 w-full">
            <div className="h-full flex items-center   p-4 rounded-lg bg-white hover:bg-black/10">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Tecnology
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-[210px] md:w-1/2 w-full">
            <div className="h-full flex items-center   p-4 rounded-lg bg-white hover:bg-black/10">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Tecnology
                </h2>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-[210px] md:w-1/2 w-full">
            <div className="h-full flex items-center   p-4 rounded-lg bg-white hover:bg-black/10">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Tecnology
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
