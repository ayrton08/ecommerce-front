import { IOrder } from '../interfaces/order';

export const transformDataToPreference = (order: IOrder): any => {
  const ordersUpdated = order.orderItems.map((items) => ({
    ...items,
    unit_price: order.total,
    currency_id: 'ARS',
  }));

  return ordersUpdated;
};
