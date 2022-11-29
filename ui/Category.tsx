import { CategoryType } from "interface/ui";
import Link from "next/link";
import { FC } from "react";

export const Category = ({ label, icon }: CategoryType) => {
  return (
    <div className="p-2 lg:w-[210px] md:w-1/2 w-full">
      <Link
        className="h-full flex items-center  p-4 rounded-lg bg-white hover:bg-black/10"
        href="/search"
      >
        <div className="avatar">
          <div className="w-12 rounded-full mr-4">{icon}</div>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium text-center">
            {label}
          </h2>
        </div>
      </Link>
    </div>
  );
};
