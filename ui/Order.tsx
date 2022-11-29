import React from "react";
import { Link } from "./Link";

export const Order = ({
  index,
  orderId,
  createdAt,
  status,
  linkToPay,
}: any) => {
  return (
    <tr className=" hover:bg-black/10 relative">
      <th className="order-item">{index}</th>
      <td className="order-item">{orderId}</td>
      <td className="order-item">{createdAt}</td>
      <td className="order-item">{status}</td>
      <td className={`order-item flex justify-evenly`}>
        {status === "pending" ? (
          <>
            <Link
              href={linkToPay}
              label="Pay"
              className="bg-green-500 px-4 py-2 text-white font-bold rounded-md text-sm hover:bg-green-400 "
            />
            <button className="bg-red-500 px-4 py-2 text-white font-bold text-sm rounded-md hover:bg-black/30 ">
              Cancel
            </button>
          </>
        ) : (
          <div className="bg-violet-600 text-white font-bold p-2 rounded-md">
            En camino...
          </div>
        )}
      </td>
    </tr>
  );
};
