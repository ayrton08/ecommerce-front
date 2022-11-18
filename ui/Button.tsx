interface ButtonProps {
  handler?: (args: any) => any;
  children: string;
}
1;
export const Button = ({ children, handler }: ButtonProps) => {
  return (
    <button className="btn mt-4 w-full" onClick={handler}>
      {children}
    </button>
  );
};
