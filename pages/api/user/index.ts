import type { NextApiRequest, NextApiResponse } from 'next';
import methods from 'micro-method-router';
import { findOrCreateAuth } from 'controllers/auth-controller';

async function post(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await findOrCreateAuth(req.body.email);

    const resp = {
      id: user.data.userId,
      email: user.data.email,
    };

    return res.status(201).json(resp);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: { code: 400, message: error.message } });
  }
}

export default methods({ post });
