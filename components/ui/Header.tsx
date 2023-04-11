import { useMe } from 'hooks';
import { Text, Navbar, Avatar } from '@nextui-org/react';
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
  // const data = useMe('/me');

  const { numberOfItems } = useContext(CartContext);

  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className="bg-black/80 h-[65px] flex px-6 sticky top-0 w-full z-50 justify-between">
      <Navbar.Brand className="flex gap-4 nav">
        <Link href="/" aria-label="Button Home">
          <Text
            b
            hideIn="xs"
            className="flex items-center gap-4 text-lg text-white"
          >
            <AcmeLogo />
            MARKET
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Searcher />
      </Navbar.Content>
      <Navbar.Content>
        <h3 className="text-white font-bold w-28">{user?.fullname || ''}</h3>

        <Link href="/cart">
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
                className="bg-black/30  w-full"
                withDivider
              >
                <div className="flex flex-col rounded-md  w-full ">
                  <Text b color="inherit" css={{ d: 'flex' }}>
                    Signed in as
                  </Text>
                  <Text b color="success" css={{ d: 'flex' }}>
                    {user!.email}
                  </Text>
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
                <Dropdown.Item key="orders" icon={<SupportIcon />} withDivider>
                  Support
                </Dropdown.Item>
              </Link>
              <Link className="items-center grid text-white" href="/support">
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
      </Navbar.Content>
    </div>
  );
};
