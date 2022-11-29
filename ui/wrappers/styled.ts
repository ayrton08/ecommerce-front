import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerHeader: FC<any> = tw.div`
    navbar bg-base-200 h-[80px] rounded-lg px-4 flex justify-between shadow-lg shadow-black/10 items-center glass-efect
`;

export const ContainerCard: FC<any> = tw.div`
    card-actions
`;