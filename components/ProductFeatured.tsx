/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { ProductType } from "interface/product";
import { Button } from "ui/button/Button";

export const ProductFeatured = ({ title, picture, price, id }: ProductType) => {
  return (
    <div className="card-result">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={picture}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1 flex justify-between items-center">
          <span className="font-bold text-xl">${price}</span>
          <Link href={"/item/" + id}>
            <Button className="w-28 btn-md text-xs mt-0">View More</Button>
          </Link>
        </p>
      </div>
    </div>
  );
};
