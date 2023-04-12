import tw from 'tailwind-styled-components';
import { FC } from 'react';

export const Field: FC<any> = tw.input`
    ${(props) =>
      props.disabled
        ? 'input rounded-r-3xl rounded-l-none w-full  placeholder:text-black h-[48px] pl-4'
        : `input  rounded-r-3xl rounded-l-none w-full bg-black/20 text-black placeholder:text-black pl-4 h-[48px]  ${props.className}`}
`;

export const FieldSearch: FC<any> = tw.input`
  input input-bordered w-full h-max rounded-3xl text-black bg-white
`;
