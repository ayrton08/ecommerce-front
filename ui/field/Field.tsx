import { FieldType } from "interface/ui";
import { ContainerInput, Label } from "ui/label/styled";
import { Field } from "./styled";

export const UserField = ({
  className,
  disable,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
}: FieldType) => {
  return (
    <>
      <ContainerInput>
        <Label>{label}</Label>
        <Field
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          disabled={disable}
          className={className}
        />
      </ContainerInput>
    </>
  );
};