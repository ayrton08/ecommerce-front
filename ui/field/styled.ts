import tw from 'tailwind-styled-components';
import { FC } from 'react';

export const Field: FC<any> = tw.input`
    ${(props) =>
      props.disabled
        ? ' w-full disabled:placeholder:text-black disabled:hover:cursor-default'
        : `input input-bordered rounded-r-3xl rounded-l-none w-full bg-black/40 text-black placeholder:text-black h-[48px]  ${props.className}`}
`;

export const FieldSearch: FC<any> = tw.input`
  input input-bordered w-full h-max rounded-3xl text-black bg-white
`;
