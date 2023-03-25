import Link from 'next/link';

import { ProductType } from 'interfaces/product';
import Image from 'next/image';
import { Loader } from 'ui';
import { Button } from '@mui/material';

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
  console.log({ description });
  return (
    <div
      className={
        !detail
          ? `flex w-4/5  md:w-full px-5 py-5 xl:w-4/5  ${className}  bg-transparent text-black border-t-2`
          : `container  mb-10 px-5 py-5 lg:px-8  md:w-full text-black`
      }
    >
      <div
        className={
          !detail
            ? '  flex flex-col md:flex-row mb-4 h-full w-full'
            : 'lg:w-full  flex flex-col md:flex-row'
        }
      >
        <Image
          alt="ecommerce"
          className={
            detail
              ? 'md:w-full w-full md:min-w-[210px] md:h-[450px] h-full object-contain object-center rounded self-center p-5'
              : 'md:w-52 w-full min-w-[210px] md:h-52 h-44 object-cover object-center rounded self-center'
          }
          src={picture}
          width={300}
          height={300}
        />
        <div
          className={
            !detail
              ? 'w-full md:pl-10 mt-6 md:mt-0'
              : 'w-full md:pl-10 mt-6 flex flex-col justify-center'
          }
        >
          {detail && (
            <h2 className="text-sm title-font text-dark tracking-widest">
              {category}
            </h2>
          )}
          <div className="flex justify-between">
            <h1
              className={
                !detail
                  ? 'text-gray-900 text-3xl title-font font-medium mb-3'
                  : 'text-gray-900 text-3xl title-font font-medium '
              }
            >
              {title}
            </h1>
            <div className="stat-value flex text-2xl md:text-4xl">${price}</div>
          </div>

          {!detail && (
            <div className="flex justify-between mt-4 mb-6">
              <div className="flex flex-col md:flex-row gap-2">
                {!detail && (
                  <Link href={'/item/' + id}>
                    <Button className="w-32 mt-0">View More</Button>
                  </Link>
                )}
              </div>
            </div>
          )}
          <Button
            onClick={onClick}
            color="primary"
            className="w-full bg-successfull py-2 my-6  focus:outline-none text-white text-lg font-bold rounded-3xl"
            disabled={disable}
          >
            {disable ? <Loader sm /> : 'Add to cart'}
          </Button>
          <p
            className={
              !detail
                ? 'leading-relaxed hidden md:flex '
                : 'leading-relaxed h-full pt-4'
            }
          >
            {!detail ? description + '...' : description}
          </p>
        </div>
      </div>
    </div>
  );
};
