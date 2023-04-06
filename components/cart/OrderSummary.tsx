import { currency } from 'utils';
import { Grid, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { CartContext } from '../../context/cart/CartContext';

interface Props {
  orderValues?: {
    numberOfItems: number;
    total: number;
  };
}

export const OrderSummary: FC<Props> = ({ orderValues }) => {
  const { numberOfItems, total } = useContext(CartContext);

  const summaryValues = orderValues ? orderValues : { numberOfItems, total };

  return (
    <Grid container paddingTop={2}>
      <Grid item xs={6}>
        <Typography>No. Products</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="end"
        className="text-end"
      >
        <Typography>
          {summaryValues.numberOfItems}{' '}
          {summaryValues.numberOfItems > 1 ? 'items' : 'item'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1">
          {currency.format(summaryValues.total)}
        </Typography>
      </Grid>
    </Grid>
  );
};
