import { ICartProduct, IShippingAddress } from 'interfaces';
import { createContext } from 'react';

interface IContextProps {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  total: number;

  shippingAddress?: IShippingAddress;

  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  removeCartProduct: (product: ICartProduct) => void;
  updateAddress: (address: IShippingAddress) => void;

  createOrder: () => Promise<{
    hasError: boolean;
    message: string;
  }>;
}

export const CartContext = createContext({} as IContextProps);
