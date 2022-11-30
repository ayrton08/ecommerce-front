import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerOrder: FC<any> = tw.tr`
    hover:bg-light relative
`;

export const ItemOrder: FC<any> = tw.td`
    order-item font-bold 
`;

export const ItemLinkOrder = tw(ItemOrder)`
    flex justify-evenly
`;
