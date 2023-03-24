import { LinkType } from "interfaces/ui";
import LinkNext from "next/link";

export const Link = ({ label, href, className }: LinkType) => {
  return (
    <LinkNext
      href={href || ""}
      className={`link link-hover ${className}`}
      // target="_blank"
    >
      {label}
    </LinkNext>
  );
};
