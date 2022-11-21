interface ButtonProps {
  handler?: (args: any) => any;
  children: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}
1;
export const Button = ({ children, className, type, handler }: ButtonProps) => {
  return (
    <button
      className={`btn mt-4 w-full ${className}`}
      onClick={handler}
      type={type || "button"}
    >
      {children}
    </button>
  );
};
