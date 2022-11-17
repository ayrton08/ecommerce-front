import React from "react";
import Link from "next/link";
import Image from "next/image";

import user from "assets/user.svg";
import { AvatarIcon } from "./icons";

export const User = () => {
  return (
    <div className=" card flex flex-col shadow-xl  bg-black/20 py-8 px-4  z-30">
      <figure>
        <AvatarIcon className="w-36" />
        {/* <Image src={user} alt="login" className="w-40" /> */}
      </figure>
      <div className="flex flex-col p-4 justify-center">
        <h2 className="card-title self-center mb-4">Ayrton Juarez</h2>
        <div className="card-actions justify-end">
          <div className="form-control gap-3">
            {/* <label className="label">
              <span className="label-tex">Your Email</span>
            </label> */}
            <label className="input-group">
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
            </label>
            <button className="btn bg-green-500 mt-2">My Cart</button>
            <button className="btn ">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};
