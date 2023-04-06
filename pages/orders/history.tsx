/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Router from 'next/router';

import { isUserLogged } from 'helpers';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Chip, Grid, Link, Typography } from '@mui/material';

import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import NextLink from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { fetchApi } from 'api';
import { IOrder } from '../../interfaces/order';

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

interface Props {
  orders: IOrder[];
}

const PageOrders: NextPage<Props> = ({ orders }) => {
  const logged = isUserLogged();

  const rows = orders.map((order, index) => ({
    id: order.id,
    paid: order.isPaid,
    fullname: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
    order: order.id,
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = req.cookies.token;

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login?page=/orders/history',
        permanent: false,
      },
    };
  }

  const token = {
    token: req.cookies.token,
  };

  const { data } = await fetchApi.get('/orders', {
    headers: {
      Cookie: JSON.stringify(token),
    },
  });

  return {
    props: {
      orders: data.orders,
    },
  };
};

export default PageOrders;
