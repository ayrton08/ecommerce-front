import Link from 'next/link';

import { ProductType } from 'interfaces/product';
import Image from 'next/image';
import { Loader } from 'ui';
import { Button } from '@mui/material';

export const Product = ({
  description,
  image,
  price,
  title,
  category,
  onClick,
  disable,
}: ProductType) => {
  return (
    <div className="lg:w-full pt-6 flex flex-col md:flex-row">
      <Image
        alt="ecommerce"
        className="w-full h-64 md:h-[450px] object-cover object-center rounded self-center"
        src={image}
        width={300}
        height={300}
      />
      <div
        className={'w-full pt-4 md:pt-0 md:pl-10 flex flex-col justify-center'}
      >
        <h2 className="text-sm title-font text-dark tracking-widest">
          {category}
        </h2>
        <div className="flex justify-between">
          <h1 className={'text-gray-900 text-3xl title-font font-medium '}>
            {title}
          </h1>
          <div className="stat-value flex text-2xl md:text-4xl">${price}</div>
        </div>

        <Button
          onClick={onClick}
          color="primary"
          className="w-full bg-successfull py-2 my-6  focus:outline-none text-white text-lg font-bold rounded-3xl"
          disabled={disable}
        >
          {disable ? <Loader sm /> : 'Add to cart'}
        </Button>
        <p className={'leading-relaxed h-full min-h-[300px]'}>{description}</p>
      </div>
    </div>
  );
};
