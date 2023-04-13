import { CategoryType } from 'interfaces/ui';
import Image from 'next/image';
import Router from 'next/router';

export const Category = ({ label, src }: CategoryType) => {
  const handler = () => {
    Router.push({
      pathname: `/search/${label}`,
    });
  };

  return (
    <div
      className="h-full flex flex-col items-center gap-3 justify-center hover:cursor-pointer card-result"
      onClick={handler}
    >
      <Image src={src} alt="" width={100} height={100} className="w-16"></Image>
      <h2 className="text-gray-900 title-font text-lg font-medium text-center">
        {label}
      </h2>
    </div>
  );
};
