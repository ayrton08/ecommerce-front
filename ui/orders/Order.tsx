import React from "react";
import { ButtonDanger, ButtonPrimary } from "ui/button/Button";
import { LabelPrimary } from "ui/label/styled";
import { Link } from "../Link";
import { ContainerOrder, ItemLinkOrder, ItemOrder } from "./styled";

export const Order = ({
  index,
  orderId,
  createdAt,
  status,
  linkToPay,
}: any) => {
  return (
    <ContainerOrder>
      <ItemOrder>{index}</ItemOrder>
      <ItemOrder>{orderId}</ItemOrder>
      <ItemOrder>{createdAt}</ItemOrder>
      <ItemOrder>{status}</ItemOrder>
      <ItemLinkOrder>
        {status === "pending" ? (
          <>
            <ButtonPrimary>
              <Link href={linkToPay} label="Pay" />
            </ButtonPrimary>
            <ButtonDanger>Cancel</ButtonDanger>
          </>
        ) : (
          <LabelPrimary>En camino...</LabelPrimary>
        )}
      </ItemLinkOrder>
    </ContainerOrder>
  );
};
