interface FieldProps {
  title?: string;
  label: string;
  placeholder: string;
}

export const Field = ({ label, placeholder, title }: FieldProps) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      <label className="input-group">
        <span>{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </label>
    </>
  );
};
