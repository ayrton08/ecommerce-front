interface ButtonProps {
  onClick?: (args: any) => any;
  children: any;
  className?: string;
  type?: "button" | "submit" | "reset";
}
1;
export const Button = ({ children, className, type, onClick }: ButtonProps) => {
  return (
    <button
      className={`btn w-full ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};
