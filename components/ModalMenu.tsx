import { isUserLogged, removeToken } from "helpers/localStorage";
import { useLogin } from "hooks";
import Link from "next/link";
import { useEffect } from "react";
import { Button, ButtonDanger } from "ui";
import {
  CartIcon,
  LogoutIcon,
  OrdersIcon,
  ProfileIcon,
} from "ui/icons/boxicons";

export const ModalMenu = () => {
  const { logged, setLogged } = useLogin();

  const handlerLogout = () => {
    removeToken();
    setLogged(false);
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-black/80 z-40">
        <div className="modal-box w-3/4 h-max flex flex-col gap-4 items-end pt-3 px-4">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle  bg-danger"
          >
            x
          </label>

          <Button className="btn-color gap-4">
            <ProfileIcon />
            <Link href={"/profile"}>Profile</Link>
          </Button>

          <Button className="btn-color gap-4">
            <CartIcon />
            <Link href={"/cart"}>Cart</Link>
          </Button>
          <Button className="btn-color gap-4">
            <OrdersIcon />
            <Link href={"/orders"}>Orders</Link>
          </Button>
          <Button
            onClick={handlerLogout}
            className="btn-danger text-white font-bold gap-4"
          >
            <LogoutIcon />
            <Link href={"/"}>Logout</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
