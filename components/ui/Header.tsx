import { isUserLogged, removeToken } from 'helpers/localStorage';
import { useLogin, useMe } from 'hooks';
import { ModalMenu } from './ModalMenu';
import { Dropdown, Text, Navbar, Avatar } from '@nextui-org/react';
import { AcmeLogo } from 'ui/icons/Icon';
import { useState, useEffect, useContext } from 'react';
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

export const Header = () => {
  const data = useMe('/me');

  // useEffect(() => {
  //   if (!data?.data?.cart) {
  //     updateCart({ cart: [] });
  //   }
  // }, [data]);

  const { logged, setLogged } = useLogin();
  // const { total, totalItems } = useTotalCart(data?.data?.cart);

  useEffect(() => {
    const logged = isUserLogged();
    setLogged(logged);
  }, [data, setLogged]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { numberOfItems } = useContext(CartContext);

  console.log(scrollPosition);

  return (
    <>
      <ModalMenu />

      <div className="bg-black/90 h-[74px] flex px-6 sticky top-0 w-full z-50">
        <Navbar.Brand className="flex gap-4 nav">
          <Link href="/" aria-label="Button Home">
            <Text b hideIn="xs" className="flex items-center gap-4 text-lg text-white">
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
          <Text h1 size={19} weight="bold" color='white' >
            {data?.data?.name}
          </Text>

          <Link href="/cart">
            <IconButton>
              <Badge badgeContent={numberOfItems} color="secondary">
                <ShoppingCartOutlined color="info" />
              </Badge>
            </IconButton>
          </Link>

          {logged && (
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
                      {data?.data?.email}
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
                  <Link className="items-center grid text-white" href="/orders">
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
                    onClick={() => {
                      removeToken();
                      setLogged(false);
                    }}
                    className="text-danger hover:text-white grid font-bold"
                  >
                    Logout
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {!logged && (
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

    // <section className="header">

    //     <div className="flex-none">
    //       {logged && (
    //         <label className="md:btn-ghost hidden md:btn mr-2">
    //           <Link href="/profile" passHref>
    //             <h3 className="text-primary text-md">{data?.data?.name}</h3>
    //           </Link>
    //         </label>
    //       )}
    //       {logged && (
    //         <div className=" dropdown-end items-center mt-1 sm:dropdown hidden md:dropdown-end mr-2">
    //           <CartIndicator totalItems={totalItemsCart} total={total} />
    //         </div>
    //       )}

    //       {logged && (
    //         <label
    //           tabIndex={0}
    //           className="btn btn-ghost btn-circle avatar sm:hidden"
    //         >
    //           <MenuIcon />
    //         </label>
    //       )}

    //       <div className=" dropdown-end hidden sm:dropdown mr-2">
    //         {logged && (
    //           <>
    //             <label
    //               tabIndex={0}
    //               className="btn btn-ghost btn-circle avatar mt-1"
    //             >
    //               <div className="w-10 rounded-full">
    //                 <AvatarIcon></AvatarIcon>
    //               </div>
    //             </label>
    //             <ul
    //               tabIndex={0}
    //               className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
    //             >
    //               <li>
    //                 <Link className="items-center" href="/profile">
    //                   <ProfileIconPrimary />
    //                   Profile
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="items-center" href="/orders">
    //                   <OrdersIconPrimary />
    //                   Orders
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="items-center" href="/support">
    //                   <SupportIconPrimary />
    //                   Support
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link
    //                   href={"/"}
    //                   onClick={() => {
    //                     removeToken();
    //                     setLogged(false);
    //                   }}
    //                   className="btn-danger text-white font-bold"
    //                 >
    //                   <LogoutIcon />
    //                   Logout
    //                 </Link>
    //               </li>
    //             </ul>
    //           </>
    //         )}
    //       </div>
    //
    //     </div>
    //   </ContainerHeader>
    // </section>
  );
};
