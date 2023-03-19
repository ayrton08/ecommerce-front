import { sortByDate } from 'helpers/sortByDate';
import { OrderCart } from 'interface/cart';
import { fetchApi } from 'lib/api';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const useOrders = (selected: string) => {
  const { data, error } = useSWR('/me/orders', fetchApi);
  const allOrders = data?.orders;
  const [orders, setOrders] = useState<[] | null>();


  const pendigOrders = allOrders?.filter(
    (order: OrderCart) => order.status === 'pending'
  );
  const closedOrders = allOrders?.filter(
    (order: OrderCart) => order.status === 'closed'
  );

  useEffect(() => {
    if (selected === 'Chose') {
      setOrders(null);
    }
    if (selected === 'Pending') {
      setOrders(pendigOrders);
    }
    if (selected === 'Payeds') {
      setOrders(closedOrders);
    }
    if (selected === 'All') {
      setOrders(allOrders);
    }
  }, [selected]);

  return { orders: sortByDate(orders), allOrders };
};
