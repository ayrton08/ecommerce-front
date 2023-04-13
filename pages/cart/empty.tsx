import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { Button } from 'components/styled';

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Cart empty"
      pageDescription="There are no items in the shopping cart"
    >
      <Box
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 265px)"
      >
        <RemoveShoppingCartOutlined
          sx={{
            fontSize: 100,
          }}
        />
        <Box display="flex" flexDirection="column" alignItems="start" marginLeft={4}>
          <h3 className='pb-2 text-lg font-bold'>Your cart is empty</h3>
          <Link href="/" component={NextLink} typography="h4" color="secondary">
            <Button className="px-12 py-2 w-full ">Regresar</Button>
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
