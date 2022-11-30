import React from "react";
import { FacebookIcon, TwitterIcon } from "ui/icons/boxicons";
import { Link } from "../Link";
import LinkNext from "next/link";
import { ContainerFooter, SectionFooter, TitleFooter } from "./styled";

export const Footer = () => {
  return (
    <ContainerFooter>
      <SectionFooter>
        <TitleFooter>Services</TitleFooter>
        <Link label="Branding" />
        <Link label="Design" />
        <Link label="Marketing" />
        <Link label="Advertisement" />
      </SectionFooter>
      <SectionFooter>
        <TitleFooter>Company</TitleFooter>
        <Link label="About us" />
        <Link label="Contact" />
        <Link label="Jobs" />
        <Link label="Press kit" />
      </SectionFooter>
      <SectionFooter>
        <TitleFooter>Social</TitleFooter>

        <div className="grid grid-flow-col gap-4">
          <LinkNext
            href="https://www.linkedin.com/in/ayrton-juarez/"
            target={"_blank"}
            rel="noreferrer"
            aria-label="twitter"
          >
            <TwitterIcon />
          </LinkNext>
          <LinkNext
            href="https://www.linkedin.com/in/ayrton-juarez/"
            target={"_blank"}
            rel="noreferrer"
            aria-label="facebook"
          >
            <FacebookIcon />
          </LinkNext>
        </div>
      </SectionFooter>
    </ContainerFooter>
  );
};
