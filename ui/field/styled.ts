import tw from "tailwind-styled-components";
import { FC } from "react";

export const Field: FC<any> = tw.input`
    ${(props) =>
      props.disabled
        ? "input input-bordered w-full disabled:placeholder:text-black disabled:hover:cursor-default"
        : `input input-bordered w-full bg-black/40 text-black placeholder:text-black h-[48px] ${props.className}`}
`;

export const FieldSearch: FC<any> = tw.input`
  input input-bordered w-full h-max
`;
