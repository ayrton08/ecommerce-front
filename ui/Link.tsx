import LinkNext from "next/link";

interface LinkProps {
  label: string;
  href?: string;
}

export const Link = ({ label, href }: LinkProps) => {
  return (
    <LinkNext href={href || ""} className="link link-hover">
      {label}
    </LinkNext>
  );
};
