import { FieldType } from "interface/ui";

export const Field = ({
  className,
  disable,
  label,
  name,
  onChange,
  placeholder,
  title,
  type = "text",
}: FieldType) => {
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
              : `w-full bg-black/40 text-white placeholder:text-white h-[48px] ${className} `
          }
          name={name}
          onChange={onChange}
          disabled={disable}
        />
      </label>
    </>
  );
};
