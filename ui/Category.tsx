import { CategoryType } from "interface/ui";
import Image from "next/image";
import Router from "next/router";

export const Category = ({ label, src }: CategoryType) => {
  const handler = () => {
    Router.push({
      pathname: "/search",
      query: { q: label },
    });
  };

  return (
    <div
      className="p-2 lg:w-[250px] md:h-40  md:w-1/2 w-full cursor-pointer"
      onClick={handler}
    >
      <div className="h-full flex items-center bg-white/60 p-4 rounded-lg  hover:bg-black/10">
        <div className="avatar">
          <Image src={src} alt="" width={50} height={50}></Image>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">
            {label}
          </h2>
        </div>
      </div>
    </div>
  );
};
