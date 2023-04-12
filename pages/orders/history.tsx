import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Chip, Grid, Link, Typography } from '@mui/material';

import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import NextLink from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { IOrder } from '../../interfaces/order';
import { getSession } from 'next-auth/react';
import { Order } from 'models';
import { getServerSession } from 'next-auth';

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
      return (
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
  const rows = orders.map((order, index) => ({
    id: order.id,
    paid: order.isPaid,
    fullname: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
    order: order.id,
  }));

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
  const session: any = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/signin?page=/orders/history',
        permanent: false,
      },
    };
  }

  const orders = await Order.getOrdersByUser(session.user.id);

  return {
    props: {
      orders,
    },
  };
};

export default PageOrders;
