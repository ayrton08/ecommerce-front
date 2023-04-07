import { useMe } from 'hooks';
import { ModalMenu } from './ModalMenu';
import { Dropdown, Text, Navbar, Avatar } from '@nextui-org/react';
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

export const Header = () => {
  // const data = useMe('/me');

  const { numberOfItems } = useContext(CartContext);

  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <>
      <ModalMenu />

      <div className="bg-black/80 h-[74px] flex px-6 sticky top-0 w-full z-50 justify-between">
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
          hideIn="xs"
          css={{
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Searcher />
        </Navbar.Content>
        <Navbar.Content>
          {/* <Text h1 size={19} weight="bold" color="white">
            {data?.data?.name}
          </Text> */}

          <Link href="/cart">
            <IconButton>
              <Badge badgeContent={numberOfItems} color="secondary">
                <ShoppingCartOutlined color="info" />
              </Badge>
            </IconButton>
          </Link>

          {isLoggedIn ? (
            <Dropdown isBordered>
              <Dropdown.Button className="px-0">
                <Avatar
                  size="md"
                  bordered
                  color="primary"
                  src="https://qlu.ac.pa/wp-content/uploads/2019/04/kisspng-avatar-user-medicine-s.png"
                />
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                className="grid gap-2 bg-black/80 "
                color="primary"
                variant="solid"
              >
                <Dropdown.Item key="user" className="h-full text-white">
                  <div className="flex flex-col">
                    <Text b color="inherit" css={{ d: 'flex' }}>
                      Signed in as
                    </Text>
                    <Text b color="success" css={{ d: 'flex' }}>
                      {user!.email}
                    </Text>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item
                  withDivider
                  key="profile"
                  css={{
                    display: 'flex',
                    alignContent: 'center',
                    width: '100px',
                  }}
                  icon={<ProfileIcon />}
                >
                  <Link
                    className="items-center grid text-white "
                    href="/profile"
                  >
                    Profile
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="orders" icon={<OrdersIcon />}>
                  <Link
                    className="items-center grid text-white"
                    href="/orders/history"
                  >
                    Orders
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="suport" icon={<SupportIcon />}>
                  <Link
                    className="items-center grid text-white"
                    href="/support"
                  >
                    Suport
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item
                  key="logout"
                  withDivider
                  color="error"
                  icon={<LogoutIcon />}
                >
                  <Link
                    href={'/'}
                    onClick={logout}
                    className="text-danger hover:text-white grid font-bold"
                  >
                    Logout
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link
              className="block rounded-3xl btn-color px-6 py-3 md:text-md font-medium text-white transition "
              href="/signin"
              data-test="btn-login"
            >
              Login
            </Link>
          )}
        </Navbar.Content>
      </div>
    </>
  );
};
