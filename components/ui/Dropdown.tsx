import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function Dropdown({ isBordered, children, user }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as any)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={`relative ${isBordered && ' '}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex justify-center w-full p-1 text-sm font-medium  focus-visible:ring-white focus-visible:ring-opacity-75"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <Image
          src={user.image}
          alt=""
          width={50}
          height={50}
          className="w-full rounded-full border-2 border-blue-500"
        />
      </button>

      {isOpen && (
        <div
          className=" animate__animated animate__flipInX absolute right-0 w-56 mt-2 origin-top-right bg-black/80 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

Dropdown.Menu = function DropdownMenu({ ariaLabel, className, children }: any) {
  return (
    <div
      className={`${
        className ? `${className} ` : ''
      }  text-white rounded-md shadow-lg`}
      role="menu"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

Dropdown.Item = function DropdownItem({
  key,
  withDivider,
  icon,
  children,
  className,
  ...props
}: any) {
  return (
    <button
      {...props}
      type="button"
      className={`${className ? `${className} ` : ''}${
        withDivider ? 'border-b border-gray-900' : ''
      }w-full flex text-left items-center px-3 py-2 text-sm leading-5 text-white hover:bg-blue-500 hover:text-white`}
      role="menuitem"
      tabIndex="-1"
      id={`menu-item-${key}`}
    >
      {icon && <span className="mr-3 flex items-center">{icon}</span>}
      {children}
    </button>
  );
};
