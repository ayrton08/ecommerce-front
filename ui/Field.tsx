import { ChangeEventHandler } from "react";

interface FieldProps {
  title?: string;
  label: string;
  placeholder: string;
  name?: string;
  type?: string;
  onChange?: ChangeEventHandler;
}

export const Field = ({
  label,
  placeholder,
  title,
  name,
  type = "text",
  onChange,
}: FieldProps) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      <label className="input-group">
        <span>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
          name={name}
          onChange={onChange}
        />
      </label>
    </>
  );
};
