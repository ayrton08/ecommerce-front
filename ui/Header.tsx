import React from "react";
import Image from "next/image";

import user from "assets/user.svg";
import menu from "assets/menu.svg";
import logo from "assets/logo.svg";

import Link from "next/link";

export const Header = () => {
  const logued = true;

  return (
    <div className="navbar bg-base-200 h-[75px] rounded-lg justify-between shadow-lg shadow-black/10 z-30 ">
      <div>
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt={"user icon"} className="mr-2" />
          ecommerce
        </a>
      </div>
      {/*input search */}
      <div className="form-control  self-center w-1/2 max-w-[450px] hidden sm:flex relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
        />
        <button className="absolute flex justify-center items-center right-0 top-0 bottom-0 w-16 rounded-r-lg bg-[#458CD6] hover:bg-[#7baee4]">
          <svg
            width="26"
            height="26"
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Z"></path>
          </svg>
        </button>
      </div>
      <div className="flex-none gap-2">
        {/* lupa para buscar */}
        <button className="btn btn-ghost btn-circle sm:hidden">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {/* Carrito de compras */}
        {logued && (
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
          {/* <div className="w-8 rounded-full">
            <Image src={menu} alt={"menu"} className="sm:hidden" />
          </div> */}

          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" className="hidden" />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </label>

        <div className=" dropdown-end hidden sm:dropdown">
          {logued ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={user}
                    alt={"user icon"}
                    className="hidden sm:flex"
                  />
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
