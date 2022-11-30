import Link from "next/link";
import React from "react";
import { Category } from "../Category";

export const Categories = ({ children }: any) => {
  return (
    <section className="text-gray-600 body-font" id="categories">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-2 justify-center">{children}</div>
      </div>
    </section>
  );
};
