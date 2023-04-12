import { AcmeLogo } from 'ui/icons/Icon';
import { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from 'context';
import { Searcher } from './Searcher';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {
  LogoutIcon,
  OrdersIcon,
  ProfileIcon,
  SupportIcon,
} from 'ui/icons/boxicons';
import { AuthContext } from 'context/auth';
import { Button } from 'ui';
import { Dropdown } from './Dropdown';

export const Header = () => {
  const { numberOfItems } = useContext(CartContext);

  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className="bg-black/80 h-[65px] flex px-2 md:px-6 sticky top-0 w-full z-50 justify-between">
      <div className="flex gap-4 nav items-center md:w-1/3">
        <Link href="/" aria-label="Button Home" className="flex gap-4">
          <AcmeLogo />
          <h2 className="hidden md:flex items-center gap-4 text-lg text-white font-bold">
            MARKET
          </h2>
        </Link>
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <Searcher />
      </div>
      <div className="md:w-1/3 flex gap-6 items-center justify-end">
        <h3 className="hidden md:flex text-white font-bold">{user?.fullname || ''}</h3>

        <Link href="/cart" className='hidden md:flex'>
          <IconButton>
            <Badge badgeContent={numberOfItems} color="secondary">
              <ShoppingCartOutlined color="info" />
            </Badge>
          </IconButton>
        </Link>

        {isLoggedIn ? (
          <Dropdown isBordered user={user}>
            <Dropdown.Menu ariaLabel="Static Actions">
              <Dropdown.Item
                key="user"
                className="bg-black/30  w-full font-bold cursor-default hover:bg-black/30"
                withDivider
              >
                <div className="flex flex-col rounded-md  w-full ">
                  <span>Signed in as</span>
                  <span className="text-green-500">{user!.email}</span>
                </div>
              </Dropdown.Item>
              <Link className="items-center grid text-white " href="/profile">
                <Dropdown.Item key="profile" icon={<ProfileIcon />}>
                  Profile
                </Dropdown.Item>
              </Link>
              <Link
                className="items-center grid text-white"
                href="/orders/history"
              >
                <Dropdown.Item key="orders" icon={<OrdersIcon />}>
                  Orders
                </Dropdown.Item>
              </Link>
              <Link className="items-center grid text-white" href="/support">
                <Dropdown.Item
                  key="orders"
                  icon={<SupportIcon />}
                  withDivider
                  className="bg-gray-900"
                >
                  Support
                </Dropdown.Item>
              </Link>
              <Link
                className="items-center grid text-white"
                href="/"
                onClick={logout}
              >
                <Dropdown.Item
                  key="logout"
                  color="error"
                  className="text-danger flex hover:text-white hover:bg-danger font-bold"
                  icon={<LogoutIcon />}
                >
                  Logout
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link href="/signin" data-test="btn-login">
            <Button className="py-2 px-4">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
