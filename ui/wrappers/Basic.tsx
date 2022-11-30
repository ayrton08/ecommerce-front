import Link from "next/link";
import { HomeIcon, LoginIcon } from "ui/icons";

interface BasicProps {
  children: any;
  icon: any;
  color: string;
}

export const Basic = ({ children, icon, color }: BasicProps) => {
  return (
    <div
      className={`card lg:card-side lg:gap-6 shadow-xl  ${color} z-30 px-4 py-16 animate__animated animate__fadeIn `}
    >
      {icon}

      <div className="card-body justify-center w-full items-start  p-2">
        {children}
      </div>
    </div>
  );
};
