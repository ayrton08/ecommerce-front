/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Router from 'next/router';

import { useOrders } from 'hooks';
import { convertSecondsToDate, isUserLogged } from 'helpers';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Chip, Grid, Link, Typography } from '@mui/material';

import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 200,
  },
  {
    field: 'fullname',
    headerName: 'Title',
    width: 300,
  },
  {
    field: 'paid',
    headerName: 'Status',
    description: 'Shows information if the order is paid or not',
    width: 200,
    renderCell: (params: GridCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Outstanding" variant="outlined" />
      );
    },
  },
  {
    field: 'order',
    headerName: 'See order',
    width: 200,
    sortable: false,
    renderCell: (params: GridCellParams) => {
      return params.row.paid ? (
        <Chip color="secondary" label="Shipping" variant="outlined" />
      ) : (
        <Link component={NextLink} href={params.row.order} underline="always">
          Go to order
        </Link>
      );
    },
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
  },
];

const PageOrders = () => {
  const { orders } = useOrders();

  const logged = isUserLogged();

  const rows = orders?.map((order: any) => ({
    id: order.createdAt._seconds,
    paid: order.status === 'closed' ? true : false,
    fullname: order.aditionalInfo.items[0].Name,
    date: convertSecondsToDate(order.createdAt._seconds),
    order: order.aditionalInfo.linkToPay,
  }));

  useEffect(() => {
    if (!logged) {
      Router.push('/signin');
    }
  }, [logged]);

  return (
    <ShopLayout title="Orders" pageDescription="Orders page">
      <Typography variant="h1" component="h1" paddingBottom={4}>
        Historial de ordenes
      </Typography>

      {orders && (
        <Grid container>
          <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
            <DataGrid rows={rows || []} columns={columns} rowBuffer={10} />
          </Grid>
        </Grid>
      )}
    </ShopLayout>
  );
};

export default PageOrders;
