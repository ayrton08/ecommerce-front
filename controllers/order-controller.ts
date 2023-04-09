import type { NextApiRequest, NextApiResponse } from 'next';
import { IOrder } from 'interfaces';
import { Order } from '../models';
import { JwtPayload } from 'jsonwebtoken';
import { createPreference, getMerchantOrder } from 'lib/mercadopago';
import { getSession, useSession } from 'next-auth/react';
import { transformDataToPreference } from '../utils/transformDataToPreference';
import { sendEmail } from 'lib/sendGrid';
import { Auth } from 'models/Auth';

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
    }
  | {
      error: null;
      link: string;
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

export const makePayment = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const { id } = req.body;

  try {
    const order: IOrder = await Order.findById(id!.toString());

    if (!order) throw new Error("Order doesn't exist");

    const items = transformDataToPreference(order);

    const pref = await createPreference({
      items,
      external_reference: order.id,
      notification_url: 'https://aj-market.vercel.app/api/ipn/mercadopago',
    });

    return res.status(201).json({ error: null, link: pref.init_point });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: { code: 400, message: error.message } });
  }
};

export const updateStatusPayment = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const id = req.query.id as string;
  const topic = req.query.topic as string;

  if (topic === 'merchant_order') {
    const order = await getMerchantOrder(id);
    if (order.order_status === 'paid') {
      const orderId = order.external_reference;

      const { userId } = await Order.updateStatusPaid(orderId);

      if (userId) {
        try {
          const user = await Auth.getUserId(userId);
          if (user) {
            sendEmail({
              addressee: user!.email,
              message: 'The payment was successful',
              title: 'Payment status',
            });
          }
        } catch (error: any) {
          console.error(error.message);
        }
      }
    }
  }
};
