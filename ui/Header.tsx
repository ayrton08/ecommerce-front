import React from "react";
import Image from "next/image";

import user from "assets/user.svg";
import menu from "assets/menu.svg";
import logo from "assets/logo.svg";

export const Header = () => {
  return (
    <div className="navbar bg-base-200 h-[75px] rounded-lg justify-between shadow-lg shadow-black/00">
      <div>
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt={"user icon"} className="mr-2"/>
          ecommerce
        </a>
      </div>
      {/*input search */}
      <div className="form-control  self-center w-1/2 max-w-[450px] hidden sm:flex">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
        />
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
        <div className=" dropdown-end hidden sm:dropdown">
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
              <span className="badge badge-sm indicator-item">8</span>
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
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* icon user */}
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar sm:hidden"
        >
          <div className="w-8 rounded-full">
            <Image src={menu} alt={"menu"} className="sm:hidden" />
          </div>
        </label>

        <div className=" dropdown-end hidden sm:dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={user} alt={"user icon"} className="hidden sm:flex" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
