import LinkNext from "next/link";

interface LinkProps {
  label: string;
  href?: string;
  className?: string;
}

export const Link = ({ label, href, className }: LinkProps) => {
  return (
    <LinkNext
      href={href || ""}
      className={`link link-hover ${className}`}
      target="_blank"
    >
      {label}
    </LinkNext>
  );
};
