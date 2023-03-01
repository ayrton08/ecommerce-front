interface BasicProps {
  children: any;
  icon: any;
  color: string;
}

export const Basic = ({ children, icon, color }: BasicProps) => {
  return (
    <div
      className={`card lg:card-side lg:gap-6 md:shadow-xl  ${color} z-30 md:px-8 sm:px-4 py-2 md:py-8 lg:py-16 animate__animated animate__fadeIn mt-28 sm:mt-20 mb-8 md:mt-0 md:mb-0`}
    >
      {icon}

      <div className="card-body justify-center w-full items-start  p-2">
        {children}
      </div>
    </div>
  );
};
