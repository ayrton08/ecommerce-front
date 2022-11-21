/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "ui/Button";
import { Link } from "ui/Link";

interface ProductProps {
  description: string;
  title: string;
  price: number;
  picture: string;
}

export const Product = ({
  description,
  picture,
  price,
  title,
}: ProductProps) => {
  return (
    <div className="container px-5 py-5 mx-auto bg-black/10">
      <div className="lg:w-4/5 mx-auto flex flex-col md:flex-row">
        <img
          alt="ecommerce"
          className="md:w-52 w-full min-w-[210px] md:h-52 h-64 object-cover object-center rounded self-center"
          src={picture}
        />
        <div className="md:w-full w-full md:pl-10 mt-6 md:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
            {title}
          </h1>

          <p className="leading-relaxed hidden md:flex md:min-h-[80px] max-h-36 p">
            {description.substring(0, 200) + "..."}
          </p>
          <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
          <div className="flex justify-between">
            <span className="title-font font-medium text-2xl text-gray-900">
              ${price}
            </span>

            <div className="flex gap-2">
              <Button className="w-32 mt-0">View More</Button>
              <Button className="w-32 mt-0 bg-green-500 border-0 py-2  focus:outline-none hover:bg-green-600 rounded-lg">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
