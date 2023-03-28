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
import axios from 'axios';
import { CartList } from 'components/cart/CartList';
import { OrderSummary } from 'components/cart/OrderSummary';
import { ShopLayout } from 'components/layouts/ShopLayout';
import { fetchApi } from 'lib/api';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const OrderPage = () => {
  const { query } = useRouter();

  const { id } = query;

  const { data, error } = useSWR(`/order/${id}`, fetchApi);

  return (
    <ShopLayout
      title="Resumen de la orden 12512541"
      pageDescription="Resumen de la orden"
    >
      <Typography variant="h1" component="h1" marginBottom={2}>
        Orden: ABC123
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}

      <Chip
        sx={{ my: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <Link
                  underline="always"
                  href="/checkout/address"
                  component={NextLink}
                >
                  Editar
                </Link>
              </Box>

              <Typography>Ayrton Juarez</Typography>
              <Typography>323 Algun lugar</Typography>
              <Typography>Puerto Rico</Typography>
              <Typography>Argentina</Typography>
              <Typography>3518147454</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <Link underline="always" href="/cart" component={NextLink}>
                  Editar
                </Link>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
