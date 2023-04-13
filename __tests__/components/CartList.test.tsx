// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { CartContext } from '../../context/cart/CartContext';
// import { ICartProduct } from '../../interfaces/cart';
// import { CartList } from '../../components/cart/CartList';

// describe('CartList', () => {
//   const cart: ICartProduct[] = [
//     {
//       id: '1',
//       name: 'Product 1',
//       images: '/product1.png',
//       price: 10,
//       quantity: 2,
//     },
//     {
//       id: '2',
//       name: 'Product 2',
//       images: '/product2.png',
//       price: 20,
//       quantity: 1,
//     },
//   ];

//   test('renders the list of cart items', () => {
//     const { getByText, getAllByRole } = render(
//       <CartContext.Provider value={{ cart }}>
//         <CartList />
//       </CartContext.Provider>
//     );

//     const productNames = getAllByRole('heading', { level: 2 });
//     expect(productNames).toHaveLength(2);
//     expect(getByText('Product 1')).toBeInTheDocument();
//     expect(getByText('Product 2')).toBeInTheDocument();
//   });

//   test('renders editable cart list when editable prop is true', () => {
//     const { getByLabelText } = render(
//       <CartContext.Provider value={{ cart }}>
//         <CartList editable={true} />
//       </CartContext.Provider>
//     );

//     const quantityInput = getByLabelText('Quantity');
//     expect(quantityInput).toBeInTheDocument();
//     expect(quantityInput).toHaveValue(2);
//   });

//   test('calls updateCartQuantity function when quantity is updated', () => {
//     const updateCartQuantity = jest.fn();
//     const { getByLabelText } = render(
//       <CartContext.Provider value={{ cart, updateCartQuantity }}>
//         <CartList editable={true} />
//       </CartContext.Provider>
//     );

//     const quantityInput = getByLabelText('Quantity');
//     fireEvent.change(quantityInput, { target: { value: '3' } });
//     expect(updateCartQuantity).toHaveBeenCalledTimes(1);
//     expect(updateCartQuantity).toHaveBeenCalledWith({
//       id: 1,
//       name: 'Product 1',
//       images: '/product1.png',
//       price: 10,
//       quantity: 3,
//     });
//   });

//   test('calls removeCartProduct function when remove button is clicked', () => {
//     const removeCartProduct = jest.fn();
//     const { getAllByText } = render(
//       <CartContext.Provider value={{ cart, removeCartProduct }}>
//         <CartList editable={true} />
//       </CartContext.Provider>
//     );

//     const removeButtons = getAllByText('Remover');
//     expect(removeButtons).toHaveLength(2);
//     fireEvent.click(removeButtons[0]);
//     expect(removeCartProduct).toHaveBeenCalledTimes(1);
//     expect(removeCartProduct).toHaveBeenCalledWith({
//       id: 1,
//       name: 'Product 1',
//       images: '/product1.png',
//       price: 10,
//       quantity: 2,
//     });
//   });
// });
