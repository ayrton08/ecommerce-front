import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';

import { isUserLogged } from 'helpers/localStorage';
import {
  Typography,
  CardContent,
  Box,
  Grid,
  Divider,
  Button,
  Card,
} from '@mui/material';
import { CartList } from 'components/cart/CartList';
import { OrderSummary } from 'components/cart/OrderSummary';

const CartPage = () => {
  // const logged = isUserLogged();

  // useEffect(() => {
  //   if (!logged) {
  //     Router.push('/signin');
  //   }
  // }, [logged]);

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta
          property="description"
          content="Here you can see your shopping cart and added products"
          key="title"
        />
      </Head>
      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px',
        }}
      >
        <Typography variant="h1" component="h1" marginBottom={2}>
          Carrito
        </Typography>

        <Grid container>
          <Grid item xs={12} sm={7}>
            <CartList editable />
          </Grid>

          <Grid item xs={12} sm={5}>
            <Card className="summary-card">
              <CardContent>
                <Typography variant="h2">Orden</Typography>
                <Divider sx={{ my: 1 }} />

                <OrderSummary />

                <Box sx={{ mt: 3 }}>
                  <Button color="secondary" className="circular-btn" fullWidth>
                    Checkout
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>

      {/* <Cart /> */}
    </>
  );
};

export default CartPage;
