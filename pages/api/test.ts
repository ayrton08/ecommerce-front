import type { NextApiRequest, NextApiResponse } from 'next';
import { Order } from 'models';
import { IOrder } from '../../interfaces/order';
import { User } from 'models/User';
import { Auth } from 'models/Auth';
import { findOrCreateAuth } from 'controllers/auth-controller';

type Data =
  | {
      error: {
        message: string;
        code: number;
      };
    }
  | {
      order: IOrder;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return test(req, res);
}

async function test(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    console.log('api cookies', req.cookies);

    // const user = await findOrCreateAuth(req.body.email);
    return res.status(201).json(req.cookies as any);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: { code: 400, message: error.message } });
  }
}
