import { FC, useContext } from 'react';
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { CartContext } from '../../context/cart/CartContext';
import { ICartProduct } from '../../interfaces/cart';
import { ItemCounter } from './ItemCounter';

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);

  const onNewCartQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };
  return (
    <>
      {cart.map((product) => (
        <Grid container key={product.id} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <Link component={NextLink} href={`/product/${product.id}`}>
              <CardActionArea>
                <CardMedia
                  className="w-32 h-32 object-contain"
                  image={product.images}
                  component="img"
                  sx={{ borderRadius: '5px' }}
                />
              </CardActionArea>
            </Link>
          </Grid>

          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.name}</Typography>

              {editable ? (
                <ItemCounter
                  currentValue={product.quantity}
                  maxValue={5}
                  updatedQuantity={(value) =>
                    onNewCartQuantityValue(product, value)
                  }
                />
              ) : (
                <Typography variant="subtitle1">
                  {product.quantity}{' '}
                  {product.quantity > 1 ? 'productos' : 'producto'}
                </Typography>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">${product.price}</Typography>

            {editable && (
              <Button
                variant="text"
                color="error"
                onClick={() => removeCartProduct(product)}
              >
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
