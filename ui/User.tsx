import { Field } from "./Field";
import { AvatarIcon } from "./icons";

export const User = ({ children, userName, userImage }: any) => {
  return (
    <div className=" card flex flex-col shadow-xl  bg-black/20 py-8 px-4  z-30">
      <figure>
        <AvatarIcon className="w-36" />
      </figure>
      <div className="flex flex-col p-4 justify-center">
        <h2 className="card-title self-center mb-4">{userName}</h2>
        <div className="card-actions justify-end">
          <div className="form-control">{children}</div>
        </div>
      </div>
    </div>
  );
};
