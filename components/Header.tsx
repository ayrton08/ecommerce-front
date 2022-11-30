/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

import { AvatarIcon, LogoIcon, MenuIcon } from "../ui/icons";
import { isUserLogged, removeToken } from "helpers/localStorage";
import { useMe, useTotalCart, useCart, useLogin } from "hooks";
import { CartIndicator, ButtonSearch } from "ui";
import { Searcher } from "./Searcher";
import { ContainerHeader } from "ui/wrappers/styled";
import { ModalMenu } from "./ModalMenu";
import {
  LogoutIcon,
  OrdersIconPrimary,
  ProfileIcon,
  ProfileIconPrimary,
  SearchIconDark,
} from "ui/icons/boxicons";

const initialValues = {
  search: "",
};

export const Header = () => {
  const data = useMe("/me");
  const { logged, setLogged } = useLogin();
  const { total, totalItems } = useTotalCart(data?.data?.cart);
  const { totalItemsCart } = useCart(totalItems);

  useEffect(() => {
    const logged = isUserLogged();
    setLogged(logged);
  }, [data]);

  const handler = (path: string) => {
    Router.push({
      pathname: "/search",
      query: { q: path },
    });
  };

  return (
    <section className="header">
      <ModalMenu></ModalMenu>
      <ContainerHeader>
        <div className="w-[260px] justify-start">
          <Link className="btn btn-ghost normal-case text-xl " href="/">
            <LogoIcon className="mr-2" />
            market
          </Link>
        </div>

        <Searcher handler={handler} initialValues={initialValues} />

        <div className="flex-none gap-2">
          <ButtonSearch aria-label="button search">
            <SearchIconDark />
          </ButtonSearch>

          <label className="md:btn-ghost hidden md:btn">
            <Link href="/profile" passHref>
              <h3 className="text-primary text-md">
                {logged && data?.data?.name}
              </h3>
            </Link>
          </label>
          {logged && (
            <div className=" dropdown-end items-center mt-1 sm:dropdown hidden md:dropdown-end">
              <CartIndicator totalItems={totalItemsCart} total={total} />
            </div>
          )}

          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar sm:hidden"
          >
            <MenuIcon />
          </label>

          <div className=" dropdown-end hidden sm:dropdown">
            {logged ? (
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
            ) : (
              <div className="sm:flex justify-end w-[175px] sm:gap-4 mr-2 animate__animated animate__fadeIn">
                <Link
                  className="block  rounded-md btn-color px-5 py-2.5 text-sm font-medium text-white transition "
                  href="/signin"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </ContainerHeader>
    </section>
  );
};
