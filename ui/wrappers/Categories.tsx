import Link from "next/link";
import React from "react";
import { CardTitle } from "ui/label/styled";
import { Category } from "../Category";

export const Categories = ({ children }: any) => {
  return (
    <section className="text-gray-600 body-font " id="categories">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center text-center w-full mb-20">
          <CardTitle>Categories</CardTitle>
        </div>
        <div className="flex flex-wrap -m-2 justify-center">{children}</div>
      </div>
    </section>
  );
};
