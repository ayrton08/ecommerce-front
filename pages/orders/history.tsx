import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Chip, Grid, Link, Typography } from '@mui/material';

import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import NextLink from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { IOrder } from '../../interfaces/order';
import { getSession } from 'next-auth/react';
import { Order } from 'models';

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

export const config = {
  // Configura el tiempo límite de fallback en 10 segundos
  fallback: {
    // Permite que la página se genere después de 10 segundos si la generación de la página tarda demasiado
    // Nota: El tiempo límite debe ser mayor que el tiempo que tarda en generarse la página
    // de lo contrario, la página de fallback se generará incluso si la página real se generó con éxito.
    timeout: 10000,
    // Muestra una página de fallback mientras se genera la página real
    // (opcional, pero se recomienda para proporcionar una mejor experiencia de usuario)
    // Esta página de fallback se generará si la página real tarda demasiado.
    fallback: <div>Generando la página...</div>,
  },
};

export default PageOrders;
