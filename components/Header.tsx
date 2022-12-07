/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Link from "next/link";

import { AvatarIcon, LogoIcon, MenuIcon } from "../ui/icons";
import { isUserLogged, removeToken } from "helpers/localStorage";
import { useMe, useTotalCart, useCart, useLogin } from "hooks";
import { CartIndicator } from "ui";
import { Searcher } from "./Searcher";
import { ContainerHeader } from "ui/wrappers/styled";
import { ModalMenu } from "./ModalMenu";
import {
  LogoutIcon,
  OrdersIconPrimary,
  ProfileIconPrimary,
} from "ui/icons/boxicons";

export const Header = () => {
  const data = useMe("/me");
  const { logged, setLogged } = useLogin();
  const { total, totalItems } = useTotalCart(data?.data?.cart);
  const { totalItemsCart } = useCart(totalItems);

  useEffect(() => {
    const logged = isUserLogged();
    setLogged(logged);
  }, [data]);

  return (
    <section className="header">
      <ModalMenu></ModalMenu>
      <ContainerHeader>
        <Link className="btn btn-ghost normal sm:hidden min-w-[38px]" href="/" aria-label="Button Home">
          <LogoIcon className="w-12 " />
        </Link>

        <div className="hidden sm:flex w-max md:w-[260px] justify-start">
          <Link className="btn btn-ghost normal-case text-xl " href="/">
            <LogoIcon className="mr-2 w-8" />
            market
          </Link>
        </div>

        <Searcher />

        <div className="flex-none">
          {logged && (
            <label className="md:btn-ghost hidden md:btn mr-2">
              <Link href="/profile" passHref>
                <h3 className="text-primary text-md">{data?.data?.name}</h3>
              </Link>
            </label>
          )}
          {logged && (
            <div className=" dropdown-end items-center mt-1 sm:dropdown hidden md:dropdown-end mr-2">
              <CartIndicator totalItems={totalItemsCart} total={total} />
            </div>
          )}

          {logged && (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar sm:hidden"
            >
              <MenuIcon />
            </label>
          )}

          <div className=" dropdown-end hidden sm:dropdown mr-2">
            {logged && (
              <>
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar mt-1"
                >
                  <div className="w-10 rounded-full">
                    <AvatarIcon></AvatarIcon>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link className="items-center" href="/profile">
                      <ProfileIconPrimary />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="items-center" href="/orders">
                      <OrdersIconPrimary />
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      onClick={() => {
                        removeToken();
                        setLogged(false);
                      }}
                      className="btn-danger text-white font-bold"
                    >
                      <LogoutIcon />
                      Logout
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
          {!logged && (
            <div className="sm:flex justify-end items-end md:w-[260px] animate__animated animate__fadeIn">
              <Link
                className="block  rounded-md btn-color px-5 py-2 text-sm font-medium text-white transition "
                href="/signin"
                data-test="btn-login"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </ContainerHeader>
    </section>
  );
};
