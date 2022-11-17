/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProductProps {
  title: string;
  price: number;
  picture: string;
}

export const ProductFeatured = ({ title, picture, price }: ProductProps) => {
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
        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
};
