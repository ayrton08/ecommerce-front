interface ButtonProps {
  onClick?: (args: any) => any;
  children: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}
1;
export const Button = ({ children, className, type, onClick }: ButtonProps) => {
  return (
    <button
      className={`btn mt-4 w-full ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};
