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

          <Link href={"/profile"} className="w-full">
            <Button className="btn-color gap-4">
              <ProfileIcon />
              Profile
            </Button>
          </Link>

          <Link href={"/cart"} className="w-full">
            <Button className="btn-color gap-4">
              <CartIcon />
              Cart
            </Button>
          </Link>

          <Link href={"/orders"} className="w-full">
            <Button className="btn-color gap-4">
              <OrdersIcon />
              Orders
            </Button>
          </Link>
          <Link href={"/"} className="w-full">
            <Button
              onClick={handlerLogout}
              className="btn-danger text-white font-bold gap-4"
            >
              <LogoutIcon />
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
