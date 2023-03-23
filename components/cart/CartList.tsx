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
import { ItemCounter } from './ItemCounter';
import { CartContext } from 'context';

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
  const { cart } = useContext(CartContext);

  console.log({ cart });

  return (
    <>
      {cart.map((product) => (
        <Grid container key={product.name} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <Link component={NextLink} href={`/product/${product.objectID}`}>
              <CardActionArea>
                <CardMedia
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
              <Typography variant="body1">
                Talla: <strong>M</strong>{' '}
              </Typography>

              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant="subtitle1">3 items</Typography>
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
              <Button variant="text" color="error">
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
