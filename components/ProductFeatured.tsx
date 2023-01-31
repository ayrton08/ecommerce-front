import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ProductType } from "interface/product";
import { Button } from "ui/button/styled";

export const ProductFeatured = ({
  title,
  picture,
  price,
  id,
  category,
  className,
  recomended,
}: ProductType) => {
  return (
    <div className={`card-result rounded-lg mx-4 my-4 shadow-2xl ${recomended ? "w-60" : "w-80"}`}>
      <Link
        className={`block relative ${
          recomended ? "h-24" : "h-48"
        } rounded overflow-hidden`}
        href={"/item/" + id}
      >
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={picture}
          width={500}
          height={500}
        />
      </Link>
      <div className={` bg-white p-2 rounded-b-md ${recomended && "py-0"}`}>
        <span className="text-dark text-xs tracking-widest title-font mb-1">
          {category}
        </span>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1 flex justify-between items-center">
          <span className="font-bold text-xl">${price}</span>
          <Link href={"/item/" + id}>
            <Button
              className={`${
                recomended
                  ? "w-20 p-0 btn-sm text-xs mt-0 "
                  : "w-28 btn-md text-xs mt-0"
              }`}
            >
              View More
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
};
