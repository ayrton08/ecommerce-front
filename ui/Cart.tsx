import React from "react";
import Link from "next/link";
import Image from "next/image";

import user from "assets/user.svg";

export const Cart = () => {
  return (
    <div className=" card flex flex-col shadow-xl h-[564px] w-[426px] bg-black/20 p-4  z-30">
      {/* <figure>
        <Image src={user} alt="login" className="w-40" />
      </figure> */}
      <div className="flex flex-col p-4  relative h-[564px] ">
        <h2 className="card-title self-center mb-4">Cart</h2>
        <div className="card-actions justify-end">
          <div className="form-control gap-3">
            {/* <label className="input-group">
              <span className="w-[80px]">Email</span>
              <input
                type="text"
                placeholder="user@mail.com"
                className="input input-bordered"
              />
            </label>
            <label className="input-group">
              <span className="w-[80px]">Name</span>
              <input
                type="text"
                placeholder="Fullname"
                className="input input-bordered"
              />
            </label>
            <label className="input-group">
              <span className="w-[80px]">Address</span>
              <input
                type="text"
                placeholder="Fullname"
                className="input input-bordered"
              />
            </label> */}
            <button className="btn mt-4 absolute bottom-4 right-4 left-4">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
