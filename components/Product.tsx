/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Button } from "ui/button/Button";
import { ProductType } from "interface/product";

export const Product = ({
  description,
  picture,
  price,
  title,
  id,
  className,
  detail,
  category,
  onClick,
}: ProductType) => {
  return (
    <div className={`container px-5 py-5 mx-auto bg-black/10 ${className}`}>
      <div
        className={
          !detail
            ? "lg:w-4/5 mx-auto flex flex-col md:flex-row"
            : "lg:w-full mx-auto flex flex-col md:flex-row"
        }
      >
        <img
          alt="ecommerce"
          className={
            !detail
              ? "md:w-52 w-full min-w-[210px] md:h-52 h-64 object-cover object-center rounded self-center"
              : "md:w-full w-full min-w-[210px] md:h-[600px] h-64 object-cover object-center rounded self-center p-5"
          }
          src={picture}
        />
        <div
          className={
            !detail
              ? "w-full md:pl-10 mt-6 md:mt-0"
              : "w-full md:pl-10 mt-6 flex flex-col justify-center"
          }
        >
          {detail && (
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category}
            </h2>
          )}
          <h1
            className={
              !detail
                ? "text-gray-900 text-3xl title-font font-medium mb-3"
                : "text-gray-900 text-3xl title-font font-medium mb-10"
            }
          >
            {title}
          </h1>

          <p
            className={
              !detail
                ? "leading-relaxed hidden md:flex md:min-h-[80px] max-h-36 p"
                : "leading-relaxed"
            }
          >
            {!detail ? description?.substring(0, 200) + "..." : description}
          </p>
          <div className="flex justify-between mt-6">
            <div className="stat-value">${price}</div>

            <div className="flex gap-2">
              {!detail && (
                <Link href={"/item/" + id}>
                  <Button className="w-32 mt-0">View More</Button>
                </Link>
              )}
              <Button
                onClick={onClick}
                className="w-32 bg-green-500 border-0 py-2  focus:outline-none hover:bg-green-600 rounded-lg"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
