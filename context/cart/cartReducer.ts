import { ICartProduct } from 'interfaces';
import { ICartState } from '.';
import { IProduct } from '../../interfaces/product';

type ICartType =
  | {
      type: '[Cart] - LoadCart from cookies | storage';
      payload: ICartProduct[];
    }
  | {
      type: '[Cart] - Update products in cart';
      payload: ICartProduct[];
    };

export const cartReducer = (
  state: ICartState,
  action: ICartType
): ICartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
        cart: [...action.payload],
      };

    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload],
      };

    default:
      return state;
  }
};
