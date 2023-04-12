import React from 'react';
import { FacebookIcon, TwitterIcon } from 'ui/icons/boxicons';
import { Link } from '../Link';
import LinkNext from 'next/link';
import { ContainerFooter, TitleFooter } from './styled';
import { CashIcon, MasterIcon, MercadoPagoIcon, VisaIcon } from 'ui/icons';

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row gap-20 bg-black/80 min-h-[250px] text-white px-10 pt-8 justify-between">
      <div className="flex flex-col gap-4">
        <TitleFooter>Company</TitleFooter>
        <div className='flex flex-col gap-2'>
          <Link label="About us" />
          <Link label="Contact" href="/support" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-start sm:justify-end gap-20">
        <div className="flex flex-col gap-9">
          <TitleFooter>Social</TitleFooter>
          <div className="flex gap-4">
            <LinkNext
              href="https://www.linkedin.com/in/ayrton-juarez/"
              target={'_blank'}
              rel="noreferrer"
              aria-label="twitter"
            >
              <TwitterIcon />
            </LinkNext>
            <LinkNext
              href="https://www.linkedin.com/in/ayrton-juarez/"
              target={'_blank'}
              rel="noreferrer"
              aria-label="facebook"
            >
              <FacebookIcon />
            </LinkNext>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center gap-2 ">
          <TitleFooter>Payment Methods</TitleFooter>
          <div className="flex justify-start self-start items-center gap-2">
            <VisaIcon />
            <MasterIcon />
            <MercadoPagoIcon />
            <CashIcon className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};
