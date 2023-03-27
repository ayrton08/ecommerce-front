import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { Button } from '@mui/material';

interface Props {
  title: string;
  images: string;
  price: number;
  description: string;
}

export const ProductSearched: FC<Props> = ({
  images,
  price,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row relative  shadow-lg rounded-lg mx-2 md:mx-20 border border-light ">
      <Image
        width={300}
        height={300}
        alt={title}
        src={images}
        className="md:w-52 w-full min-w-[200px] md:h-52 h-44 object-cover object-center  rounded-t-lg md:rounded-l-lg self-center"
      />

      <div className="flex px-4 flex-col pt-4 gap-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-between pb-2">
          <div className="font-bold text-lg">$ {price}</div>
          <Button
            className="md:absolute md:bottom-3 px-4 py-1 md:right-3 bg-blue-500"
            variant="outlined"
          >
            View more
          </Button>
        </div>
      </div>
    </div>
  );
};
