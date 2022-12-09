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
}: ProductType) => {
  return (
    <div className="card-result mx-4 my-4">
      <Link
        className="block relative h-48 rounded overflow-hidden"
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
      <div className="mt-4">
        <span className="text-dark text-xs tracking-widest title-font mb-1">
          {category}
        </span>
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
