/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import avatar from '../ui/icons/avatar.svg';

import { AvatarIcon, LogoIcon, MenuIcon } from '../ui/icons';
import { isUserLogged, removeToken } from 'helpers/localStorage';
import { useMe, useTotalCart, useCart, useLogin } from 'hooks';
import { CartIndicator } from 'ui';
import { Searcher } from './Searcher';
import { ContainerHeader } from 'ui/wrappers/styled';
import { ModalMenu } from './ModalMenu';
import {
  LogoutIcon,
  OrdersIconPrimary,
  ProfileIcon,
  ProfileIconPrimary,
  SupportIcon,
  SupportIconPrimary,
} from 'ui/icons/boxicons';
import { updateCart } from 'lib/api';
import {
  Avatar,
  Button,
  Container,
  Dropdown,
  Grid,
  Link,
  Navbar,
  Text,
  useTheme,
} from '@nextui-org/react';
import { AcmeLogo } from 'ui/icons/Icon';
import { OrdersIcon, CartIcon } from '../ui/icons/boxicons';
import { useState, useEffect } from 'react';

export const Header = () => {
  const data = useMe('/me');

  useEffect(() => {
    if (!data?.data?.cart) {
      updateCart({ cart: [] });
    }
  }, [data]);

  const { logged, setLogged } = useLogin();
  const { total, totalItems } = useTotalCart(data?.data?.cart);
  const { totalItemsCart } = useCart(totalItems);

  useEffect(() => {
    const logged = isUserLogged();
    setLogged(logged);
  }, [data]);

  const top = typeof window === 'undefined' ? {} : screenTop;

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

  return (
    <>
      <ModalMenu></ModalMenu>

      <Navbar
        disableShadow
        variant="sticky"
        maxWidth="fluid"
        className={` ${
          scrollPosition > 0 ? 'bg-[#0099ff] pt-0 opacity-90' : 'pt-4'
        }`}
      >
        <Navbar.Brand className="flex gap-4 nav">
          <Link href="/" aria-label="Button Home">
            <Text b hideIn="xs" className='flex items-center gap-4 text-lg'>
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
          <Text
            h1
            size={20}
            css={{
              textGradient: '45deg, initial -20%, pink600 50%',
            }}
            weight="bold"
          >
            {data?.data?.name}
          </Text>

          {logged && (
            <Dropdown isBordered>
              <Dropdown.Button>
                <Avatar
                  size="md"
                  bordered
                  color="gradient"
                  src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                />
              </Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions" color="primary">
                <Dropdown.Item
                  key="profile"
                  css={{ display: 'flex', alignContent: 'center' }}
                  icon={<ProfileIcon />}
                >
                  <Link className="items-center text-white" href="/profile">
                    Profile
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="cart" icon={<CartIcon />}>
                  <Link className="items-center text-white" href="/cart">
                    Cart
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="orders" icon={<OrdersIcon />}>
                  <Link className="items-center text-white" href="/orders">
                    Orders
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item key="suport" icon={<SupportIcon />}>
                  <Link className="items-center text-white" href="/support">
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
                    className="text-danger font-bold"
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
      </Navbar>
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
