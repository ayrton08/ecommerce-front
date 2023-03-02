import React from 'react';
import { ButtonDanger, ButtonPrimary } from 'ui/button/styled';
import { LabelPrimary } from 'ui/label/styled';
import { Link } from '../ui/Link';
import { ContainerOrder, ItemLinkOrder, ItemOrder } from '../ui/orders/styled';

export const Order = ({
  index,
  orderId,
  createdAt,
  status,
  linkToPay,
}: any) => {
  return (
    <ContainerOrder>
      {orderId && <ItemOrder>{orderId}</ItemOrder>}
      <ItemOrder>{createdAt}</ItemOrder>
      <ItemOrder>{status}</ItemOrder>
      <ItemLinkOrder>
        {status === 'pending' ? (
          <>
            <ButtonPrimary>
              <Link href={linkToPay} label="Pay" />
            </ButtonPrimary>
            <ButtonDanger className="hidden md:flex">Cancel</ButtonDanger>
          </>
        ) : (
          <LabelPrimary>Shipping...</LabelPrimary>
        )}
      </ItemLinkOrder>
    </ContainerOrder>
  );
};
