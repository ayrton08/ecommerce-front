import { useField, ErrorMessage } from "formik";

interface Props {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "checkbox" | "input";
  placeholder?: string;
  className?: string;
  [x: string]: any;
}

export const MyTextarea = ({ label, className, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className="field">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={`${className} appearance-none block w-full text-white border placeholder:text-white rounded-lg py-2 px-4 leading-tight focus:outline-none bg-inherit`}
        {...field}
        {...props}
        id="message"
        rows={5}
      />
      <ErrorMessage
        name={props.name as string}
        component="span"
        className="error"
      />
    </div>
  );
};
