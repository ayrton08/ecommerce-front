import { ErrorMessage, useField } from "formik";
import { FieldType } from "interfaces/ui";
import { ContainerInput, Label } from "ui/label/styled";
import { Field } from "./styled";

export const UserField = ({
  label,
  children,
  error = false,
  ...props
}: FieldType) => {
  const [field, meta] = useField(props as any);

  return (
    <>
      <ContainerInput>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Field {...field} {...props} />

        {children}
      </ContainerInput>
      {error && (
        <ErrorMessage
          name={props.name as string}
          component="span"
          className="error"
        />
      )}
    </>
  );
};
