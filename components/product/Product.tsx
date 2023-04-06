import Link from 'next/link';

import { ProductType } from 'interfaces/product';
import Image from 'next/image';
import { Loader } from 'ui';
import { Button } from '@mui/material';
import { ItemCounter } from '../cart/ItemCounter';
import { useContext, useState } from 'react';
import { ICartProduct } from 'interfaces';
import { CartContext } from 'context';

export const Product = ({
  description,
  image,
  price,
  title,
  category,
  disable,
  id,
}: ProductType) => {
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    images: image,
    price,
    name: title,
    quantity: 1,
    objectID: id,
  });

  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  const onAddProduct = () => {
    addProductToCart(tempCartProduct);
    // router.push('/cart');
  };

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
        <ItemCounter
          currentValue={tempCartProduct.quantity}
          maxValue={5}
          updatedQuantity={onUpdateQuantity}
        />
        <Button
          onClick={onAddProduct}
          fullWidth
          className="bg-successfull hover:bg-green-600 py-2 my-6  focus:outline-none text-white text-lg font-bold rounded-3xl"
          disabled={disable}
        >
          {disable ? <Loader sm /> : 'Add to cart'}
        </Button>
        <p className={'leading-relaxed h-full min-h-[300px] md:min-h-[100px] '}>
          {description}
        </p>
      </div>
    </div>
  );
};
