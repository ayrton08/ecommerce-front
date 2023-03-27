/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Router from 'next/router';

import { useOrders } from 'hooks';
import { convertSecondsToDate, isUserLogged } from 'helpers';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Chip, Grid, Link, Typography } from '@mui/material';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 200,
  },
  {
    field: 'fullname',
    headerName: 'Nombre Completo',
    width: 300,
  },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra información si está pagada la orden o no',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <Link component={NextLink} href={'/'} underline="always">
          Ver orden
        </Link>
      );
    },
  },
  {
    field: 'date',
    headerName: 'Fecha',
    width: 200,
  },
];

export default function Orders() {
  const { orders } = useOrders();
  const logged = isUserLogged();

  const rows = orders?.map((order: any) => ({
    id: order.createdAt._seconds,
    paid: order.status === 'paid' ? true : 'false',
    fullname: order.aditionalInfo.items[0].Name,
    date: convertSecondsToDate(order.createdAt._seconds),
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
            <DataGrid rows={rows} columns={columns} rowBuffer={10} />
          </Grid>
        </Grid>
      )}
    </ShopLayout>
  );
}
