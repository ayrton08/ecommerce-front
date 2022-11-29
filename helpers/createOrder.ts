export const createNewOrder = (orderProduct: any, total: number) => {
  const order = {
    items: [
      {
        title: orderProduct?.Name,
        description: orderProduct?.Description.substring(0, 100),
        // picture_url: orderProduct ? orderProduct?.Image[0]?.url : "",
        category_id: orderProduct?.Type,
        quantity: 1,
        currency_id: "ARS",
        ...orderProduct,
        unit_price: total,
      },
    ],
    back_urls: {
      success: "https://apx.school",
    },
    notification_url:
      "https://e-commerce-backend-jade.vercel.app/api/ipn/mercadopago",
  };

  return { order };
};
