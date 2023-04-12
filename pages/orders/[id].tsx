import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from '@mui/icons-material';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
  Link,
  Chip,
} from '@mui/material';
import { CartList } from 'components/cart/CartList';
import { OrderSummary } from 'components/cart/OrderSummary';
import { ShopLayout } from 'components/layouts/ShopLayout';
import { GetServerSideProps, NextPage } from 'next';
import NextLink from 'next/link';
import { IOrder } from '../../interfaces/order';
import { getSession } from 'next-auth/react';
import { Order } from 'models';
import { fetchApi } from 'fetcher';
import { useRouter } from 'next/router';

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {
  const { shippingAddress } = order;

  const router = useRouter();

  const onPayment = async () => {
    const { data } = await fetchApi.post('/orders/payment', { id: order.id });
    if (data.error) {
      // todo: mostrar modal que algo salio mal
    }
    router.push(data.link);
  };

  return (
    <ShopLayout
      title={`Resumen de la orden ${order.id}`}
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1" marginBottom={2} marginTop={2}>
        Order: {order.id}
      </Typography>

      {order.isPaid ? (
        <Chip
          sx={{ my: 2 }}
          label="Order has already been paid"
          variant="outlined"
          color="success"
          icon={<CreditScoreOutlined />}
        />
      ) : (
        <Chip
          sx={{ my: 2 }}
          label="Outstanding"
          variant="outlined"
          color="error"
          icon={<CreditCardOffOutlined />}
        />
      )}

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">
                Resume ({order.numberOfItems}{' '}
                {order.numberOfItems > 1 ? 'products' : 'product'})
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Delivery address</Typography>
                <Link
                  underline="always"
                  href="/checkout/address"
                  component={NextLink}
                  className="text-blue-500"
                >
                  Edit
                </Link>
              </Box>
              <Typography sx={{ height: 40 }}>
                {shippingAddress.firstName} {shippingAddress.lastName}
              </Typography>
              <Typography sx={{ height: 40 }}>
                {shippingAddress.address}{' '}
                {shippingAddress.address2 ? shippingAddress.address2 : ''}
              </Typography>
              <Typography sx={{ height: 40 }}>
                {shippingAddress.city}, {shippingAddress.zip}
              </Typography>
              <Typography sx={{ height: 40 }}>Argentina</Typography>
              <Typography sx={{ height: 40 }}>
                {shippingAddress.phone}
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <Link
                  underline="always"
                  href="/cart"
                  component={NextLink}
                  className="text-blue-500"
                >
                  Edit
                </Link>
              </Box>

              <OrderSummary
                orderValues={{
                  numberOfItems: order.numberOfItems,
                  total: order.total,
                }}
              />

              <Box sx={{ mt: 3 }}>
                {order.isPaid ? (
                  <Chip
                    sx={{ my: 2 }}
                    label="Order has already been paid"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined />}
                  />
                ) : (
                  <Button
                    onClick={onPayment}
                    fullWidth
                    className="rounded-3xl bg-blue-500 text-white font-bold text-lg hover:bg-blue-600"
                  >
                    Pay
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { id = '' } = query;

  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: `/signin?page=/orders/${id}`,
        permanent: false,
      },
    };
  }

  const order = await Order.findById(id.toString());

  if (!order) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      },
    };
  }

  if (order.user !== session.user.id) {
    return {
      redirect: {
        destination: '/orders/history',
        permanent: false,
      },
    };
  }

  return {
    props: {
      order,
    },
  };
};

export default OrderPage;
