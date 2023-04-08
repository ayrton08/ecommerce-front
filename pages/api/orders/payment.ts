import type { NextApiRequest, NextApiResponse } from 'next';

import { validationMiddleware } from 'middlewares';
import methods from 'micro-method-router';
import { makePayment } from '../../../controllers/order-controller';

async function post(req: NextApiRequest, res: NextApiResponse) {
  return makePayment(req, res);
}

const handler = methods({
  post,
});

export default validationMiddleware(handler, null, null);
