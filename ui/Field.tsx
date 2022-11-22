import { ChangeEventHandler } from "react";

interface FieldProps {
  title?: string;
  label: string;
  placeholder: string;
  name?: string;
  type?: string;
  onChange?: ChangeEventHandler;
  disable?: boolean;
}

export const Field = ({
  label,
  placeholder,
  title,
  name,
  type = "text",
  onChange,
  disable,
}: FieldProps) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      <label className="input-group">
        <span className="w-28">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          className={
            disable
              ? "input input-bordered w-full disabled:placeholder:text-black disabled:hover:cursor-default"
              : " w-full bg-black/50 placeholder:text-white h-[48px]"
          }
          name={name}
          onChange={onChange}
          disabled={disable}
        />
      </label>
    </>
  );
};
