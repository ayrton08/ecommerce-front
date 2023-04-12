import {
  Typography,
  CardContent,
  Box,
  Grid,
  Divider,
  Card,
} from '@mui/material';
import { CartList } from 'components/cart/CartList';
import { OrderSummary } from 'components/cart/OrderSummary';
import { CartContext } from 'context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Button } from 'ui';
import { ShopLayout } from '../../components/layouts/ShopLayout';

const CartPage = () => {
  const { isLoaded, cart } = useContext(CartContext);

  const router = useRouter();

  useEffect(() => {
    if (isLoaded && cart.length === 0) {
      router.replace('/cart/empty');
    }
  }, [cart, isLoaded, router]);

  if (!isLoaded || cart.length === 0) {
    return <></>;
  }

  return (
    <ShopLayout title="Cart" pageDescription="Store shopping cart">
      <Typography variant="h1" component="h1" marginBottom={2}>
        Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Order</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button className="w-full">
                  <Link href="checkout/address"></Link>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
