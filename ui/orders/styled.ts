import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerOrder: FC<any> = tw.tr`
    hover:bg-black/10 relative
`;

export const ItemOrder: FC<any> = tw.td`
    order-item
`;

export const ItemLinkOrder = tw(ItemOrder)`
    flex justify-evenly
`;
