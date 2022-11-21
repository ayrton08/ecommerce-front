import React, { useEffect, useState } from "react";

import Link from "next/link";
import { AvatarIcon, LogoIcon, MenuIcon } from "./icons";
import { isUserLogged } from "helpers/isUserLogged";
import { Form, Formik } from "formik";
import Router from "next/router";

const initialValues = {
  search: "",
};

export const Header = () => {
  const [logged, setLogged] = useState(false);

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
    <div className="navbar bg-base-200 h-[75px] rounded-lg justify-between shadow-lg shadow-black/10 ">
      <div>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          <LogoIcon className="mr-2" />
          ecommerce
        </Link>
      </div>
      {/*input search */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handler(values.search)}
      >
        {({ handleChange }) => (
          <Form className="form-control  self-center w-1/2 max-w-[450px] hidden sm:flex relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
              onChange={handleChange}
              name="search"
            />
            <button className="btn-search" type="submit">
              <i
                className="bx bx-search bx-sm mt-1"
                style={{ color: "#f1f3ed" }}
              ></i>
            </button>
          </Form>
        )}
      </Formik>
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
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
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
                  <a>Logout</a>
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
