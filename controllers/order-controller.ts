import type { NextApiRequest, NextApiResponse } from 'next';
import { IOrder } from 'interfaces';
import { Order } from '../models';
import { JwtPayload } from 'jsonwebtoken';
import { getMerchantOrder } from 'lib/mercadopago';
import { getSession } from 'next-auth/react';

type Response =
  | {
      error: {
        message: string;
        code: number;
      };
    }
  | {
      error: null;
      order: IOrder;
    }
  | {
      error: null;
      orders: IOrder[];
    };

export const createOrder = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  try {
    const { user }: any = await getSession({ req });
    const newOrder = new Order({
      ...req.body,
      isPaid: false,
      user: user.id,
    });

    await newOrder.save();

    return res.status(201).json({ error: null, order: newOrder.order });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: { code: 400, message: error.message } });
  }
};

export const findOrders = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  try {
    const { user }: any = await getSession({ req });
    const orders = await Order.getOrdersByUser(user.id);

    return res.status(201).json({ error: null, orders });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: { code: 400, message: error.message } });
  }
};

export const getOrderById = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const { id } = req.query;

  try {
    const order = await Order.findById(id!.toString());

    return res.status(201).json({ error: null, order });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: { code: 400, message: error.message } });
  }
};

// export const createOrder = async ({
//   productId,
//   token,
//   aditionalInfo,
// }: CreateOrder) => {
//   const product = await products.getObject(productId);

//   if (!product) {
//     throw new Error('Product not found');
//   }

//   const order = await Order.createNewOrder({
//     aditionalInfo,
//     productId,
//     userId: token.userId,
//     status: 'pending',
//     createdAt: new Date(),
//   });

//   const pref = await createPreference({
//     ...aditionalInfo,
//     external_reference: order.id,
//   });

//   await order.updateOrder(order.id, pref.init_point);

//   const orderId = order.id;
//   const url = pref.init_point;

//   return {
//     url,
//     orderId,
//   };
// };

// export const findOrderById = async (orderId: string): Promise<Order> => {
//   const order = new Order(orderId);
//   await order.pull();
//   return order;
// };

export const updateStatusPayment = async (
  topic: string,
  id: string
): Promise<void> => {
  if (topic === 'merchant_order') {
    const order = await getMerchantOrder(id);
    if (order.order_status === 'paid') {
      const orderId = order.external_reference;

      // const myOrder = await findOrderById(orderId);

      // const user = await findUserById(myOrder.data.userId);

      //   myOrder.data.status = 'closed';

      //   if (myOrder.data.status === 'closed' && order.order_status === 'paid') {
      //     try {
      //       sendEmail({
      //         addressee: user.data.email,
      //         message: 'The payment was successful',
      //         title: 'Payment status',
      //       });
      //     } catch (error) {
      //       console.error(error.message);
      //     }
      //   }
      //   await myOrder.push();
      // }
    }
  }
};
