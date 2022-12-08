import tw from "tailwind-styled-components";
import { FC } from "react";

import { ButtonProps } from "interface/ui";

export const Button: FC<ButtonProps> = tw.button`
    btn w-full btn-color border-0
    ${(props) => props.className}
`;

export const ButtonDark: FC<ButtonProps> = tw.button`
    btn w-full bg-dark border-0
    ${(props) => props.className}
`;

export const ButtonSearchPrimary: FC<any> = tw.button`
    btn-search btn-color
`;

export const ButtonSearch: FC<any> = tw.button`
    ${(props) => props.className}
    btn btn-ghost btn-circle sm:hidden 
`;

export const ButtonDanger: FC<any> = tw.button`
    ${(props) => props.className}
    btn-danger px-4 py-2 text-white font-bold text-sm rounded-md 
`;

export const ButtonPrimary: FC<any> = tw.button`
    btn-success px-4 py-2 text-white font-bold rounded-md text-sm  
`;

export const ButtonSmall: FC<any> = tw.button`
    bg-red-500 w-max px-3 py-1  self-end text-white font-bold text-sm rounded-b-md mr-2  hover:bg-red-600
`;
