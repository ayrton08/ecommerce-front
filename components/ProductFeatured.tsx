import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ProductType } from 'interface/product';

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
    <div
      className={` rounded-lg border mx-4 my-4 shadow-2xl ${
        recomended ? 'w-60 ' : 'md:min-w-72 '
      }`}
    >
      <Link
        className={`block relative ${
          recomended ? 'h-24' : 'h-48'
        } rounded-t-lg overflow-hidden`}
        href={'/item/' + id}
      >
        <Image
          alt="ecommerce"
          className="object-contain object-center h-full block"
          src={picture}
          width={500}
          height={500}
        />
      </Link>
      <div className={` bg-white rounded-b-lg ${recomended && 'py-0'}`}>
        <span className="text-dark text-xs px-2 tracking-widest title-font mb-1">
          {category}
        </span>
        <h2 className="text-gray-900 title-font px-2 text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1 flex justify-between items-center">
          <span className="font-bold text-xl w-1/2 h-full flex justify-center items-center  rounded-bl-lg bg-primaryA/40 text-black font-mono">
            ${price}
          </span>
          <Link
            href={'/item/' + id}
            className="flex hover:text-green-400 w-1/2 h-full bg-primaryA text-white items-center justify-center font-bold rounded-br-lg hover:bg-primaryA/90"
          >
            View More
          </Link>
        </p>
      </div>
    </div>
  );
};
