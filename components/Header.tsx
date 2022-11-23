import React, { useEffect, useState } from "react";

import Link from "next/link";
import { AvatarIcon, LogoIcon, MenuIcon } from "../ui/icons";
import { isUserLogged } from "helpers/isUserLogged";
import { Form, Formik } from "formik";
import Router from "next/router";
import { useMe } from "hooks/useData";
import { useTotalCart } from "hooks/useTotalCart";
import { Searcher } from "../ui/Searcher";
import { CartIndicator } from "ui/CartIndicator";
import { cart } from "store/atoms";
import { useRecoilState } from "recoil";

const initialValues = {
  search: "",
};

export const Header = () => {
  const [logged, setLogged] = useState(false);

  const data = useMe("/me");
  const [cartUser, setCartUser] = useRecoilState(cart);
  const { total, totalItems } = useTotalCart(cartUser);

  useEffect(() => {
    const logged = isUserLogged();
    setLogged(logged);
  }, []);

  const handler = (path: string) => {
    Router.push({
      pathname: "/search",
      query: { q: path },
    });
  };

  return (
    <div className="navbar bg-base-200 h-[75px] rounded-lg justify-between shadow-lg shadow-black/10">
      <div>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <LogoIcon className="mr-2" />
          market
        </Link>
      </div>

      <Searcher handler={handler} initialValues={initialValues} />

      <div className="flex-none gap-2">
        {/* lupa para buscar */}
        <button className="btn btn-ghost btn-circle sm:hidden">
          <i className="bx bx-search bx-sm p-2"></i>
        </button>
        {/* Carrito de compras */}
        {logged && (
          <div className=" dropdown-end hidden sm:dropdown ">
            <label className="btn btn-ghost">
              <h3 className="text-green-400 text-md">Ayrton</h3>
            </label>
            <CartIndicator totalItems={totalItems} total={total} />
          </div>
        )}

        {/* icon user */}
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar sm:hidden"
        >
          <MenuIcon />
        </label>

        <div className=" dropdown-end hidden sm:dropdown">
          {logged ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <AvatarIcon></AvatarIcon>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between" href="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link
                    href={"/"}
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <div className="sm:flex justify-end w-[175px] sm:gap-4 mr-2">
              <Link
                className="block  rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="/signin"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
