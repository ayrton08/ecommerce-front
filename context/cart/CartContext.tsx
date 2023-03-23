import { ICartProduct } from 'interfaces';
import { createContext } from 'react';

interface IContextProps {
  cart: ICartProduct[];
  addProductToCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as IContextProps);
