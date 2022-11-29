import tw from "tailwind-styled-components";
import { FC } from "react";

import { ButtonProps } from "interface/ui";

export const Button: FC<ButtonProps> = tw.button`
    ${(props) => props.className}
    btn w-full
`;

export const ButtonSearchPrimary: FC<any> = tw.button`
    btn-search
`;

export const ButtonSearch: FC<any> = tw.button`
    ${(props) => props.className}
    btn btn-ghost btn-circle sm:hidden
`;

export const ButtonDanger: FC<any> = tw.button`
    bg-red-500 px-4 py-2 text-white font-bold text-sm rounded-md hover:bg-black/30 
`;

export const ButtonPrimary: FC<any> = tw.button`
    bg-green-500 px-4 py-2 text-white font-bold rounded-md text-sm hover:bg-green-400 
`;
