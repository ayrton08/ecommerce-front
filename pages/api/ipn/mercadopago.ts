import type { NextApiRequest, NextApiResponse } from 'next';
import methods from 'micro-method-router';

import { updateStatusPayment } from 'controllers/order-controller';

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await updateStatusPayment(req, res);

    res.status(200).send(true);
  } catch (error: any) {
    console.log(error.message);
    res.status(200).send(true);
  }
};

export default methods({
  post,
});
