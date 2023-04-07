import type { NextApiRequest, NextApiResponse } from 'next';
import * as Yup from 'yup';

import { authMiddleware, validationMiddleware } from 'middlewares';
import methods from 'micro-method-router';
import { createOrder, findOrders } from 'controllers/order-controller';
import { JwtPayload } from 'jsonwebtoken';

// const schemaBody = Yup.object()
//   .shape({
//     items: Yup.array()
//       .of(
//         Yup.object({
//           title: Yup.string(),
//           description: Yup.string(),
//           picture_url: Yup.string(),
//           category_id: Yup.string(),
//           quantity: Yup.number(),
//           currency_id: Yup.string(),
//           unit_price: Yup.number(),
//         })
//       )
//       .required(),
//     back_urls: Yup.object({
//       success: Yup.string(),
//       failure: Yup.string(),
//     }).required(),
//     notification_url: Yup.string().required(),
//   })
//   .noUnknown()
//   .strict();

async function post(req: NextApiRequest, res: NextApiResponse) {
  return createOrder(req, res);
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  return findOrders(req, res);
}

// const postAuth = authMiddleware(post);
// const getAuth = authMiddleware(get);

const handler = methods({
  post,
  get,
});

export default validationMiddleware(handler, null, null);
