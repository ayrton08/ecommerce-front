import { ICartProduct } from 'interfaces';

export const createNewOrder = (orderProduct: ICartProduct[], total: number) => {
  const order = {
    items: [
      total,
      ...orderProduct,
      // {
      //   title: orderProduct?.Name,
      //   description: orderProduct?.Description.substring(0, 100),
      //   category_id: orderProduct?.Type,
      //   quantity: 1,
      //   currency_id: "ARS",
      //   ...orderProduct,
      //   unit_price: total,
      // },
    ],
    back_urls: {
      success: 'https://aj-market.vercel.app/thanks',
    },
    notification_url:
      'https://e-commerce-backend-jade.vercel.app/api/ipn/mercadopago',
  };

  return { order };
};
