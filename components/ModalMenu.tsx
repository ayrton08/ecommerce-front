import Link from "next/link";
import { ButtonDanger } from "ui";

export const ModalMenu = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal bg-black/80 z-40">
        <div className="modal-box w-2/3 h-max justify-center">
          <Link
            className="flex items-center justify-center gap-3 w-full bg-violet hover:violet_hover py-4 text-md rounded-md modal-action"
            href="/profile"
          >
            <i
              className="bx bx-user-circle bx-sm"
              style={{ color: "#f1f1f1" }}
            ></i>
            <label htmlFor="my-modal" className="text-white text-md font-bold">
              Profile
            </label>
          </Link>
        </div>
      </div>
    </>
  );
};
