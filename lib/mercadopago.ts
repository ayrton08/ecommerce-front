import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO,
});

export async function getMerchantOrder(id: any) {
  try {
    const res = await mercadopago.merchant_orders.get(id);
    return res.body;
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function createPreference(data: any) {
  try {
    const res = await mercadopago.preferences.create(data);
    return res.body;
  } catch (error: any) {
    console.error(error.message);
  }
}
