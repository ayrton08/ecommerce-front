import React from "react";
import login from "assets/login.svg";
import Image from "next/image";
import Link from "next/link";

export const Login = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-2/5 bg-black/20 z-30">
      <figure>
        <Image src={login} alt="login" className="w-80" />
      </figure>
      <div className="card-body justify-center">
        <ul className="menu text-white hover:bg-inherit hover:text-black font-bold items-center  p-[1px] rounded-box z-30 bg-black/50 absolute top-4 right-4">
          <li>
            <Link href="/">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
        </ul>
        <h2 className="card-title">New album is released!</h2>
        {/* <p>Click the button to listen on Spotiwhy app.</p> */}
        <div className="card-actions justify-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="text"
                placeholder="user@mail.com"
                className="input input-bordered"
              />
            </label>
            <button className="btn mt-4">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
