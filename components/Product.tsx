import Link from "next/link";

import { Button } from "ui/button/Button";
import { ProductType } from "interface/product";
import Image from "next/image";
import { Loader } from "ui";

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
  disable,
}: ProductType) => {
  return (
    <div
      className={
        !detail
          ? `container w-5/6 mx-4 md:w-full px-5 py-5 xl:w-3/4 bg-dark_light ${className}`
          : `container mt-12 px-5 py-5 lg:px-16 mx-auto w-3/4 bg-dark_light`
      }
    >
      <div
        className={
          !detail
            ? "lg:w-4/5 mx-auto flex flex-col md:flex-row"
            : "lg:w-full mx-auto flex flex-col md:flex-row"
        }
      >
        <Image
          alt="ecommerce"
          className={
            detail
              ? "md:w-full w-full md:min-w-[210px] md:h-[450px] h-64 object-cover object-center rounded self-center p-5"
              : "md:w-52 w-full min-w-[210px] md:h-52 h-44 object-cover object-center rounded self-center"
          }
          src={picture}
          width={300}
          height={300}
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
            <div className="stat-value flex justify-center items-center text-2xl md:text-4xl">${price}</div>

            <div className="flex flex-col md:flex-row gap-2">
              {!detail && (
                <Link href={"/item/" + id}>
                  <Button className="w-32 mt-0">View More</Button>
                </Link>
              )}
              <Button
                onClick={onClick}
                className="w-max sm:w-32 btn-success border-0 py-2 disabled focus:outline-none text-white rounded-lg"
                disabled={disable}
              >
                {disable ? <Loader sm /> : "Add to cart"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
