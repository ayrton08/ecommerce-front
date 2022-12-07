import tw from "tailwind-styled-components";
import { FC } from "react";

interface TitleProps {
  title: string;
}

export const ContainerInput: FC<any> = tw.label`
    input-group
`;

export const Label: FC<TitleProps | any> = tw.span`
    w-28 bg-dark/60 text-white
`;

export const LabelPrimary: FC<TitleProps | any> = tw.span`
    bg-primary text-white font-bold p-2 rounded-md
`;

export const CardTitle: FC<any> = tw.h2`
    card-title text-dark text-3xl
`;
