import { InputAdornment, TextField } from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import { ChangeEventHandler } from 'react';
import { ContainerInput, Label } from 'ui/label/styled';
import { Field } from './styled';

export interface FieldType {
  title?: string;
  label: string;
  placeholder?: string;
  name?: string;
  type?: string;
  onChange?: ChangeEventHandler;
  disabled?: string | boolean;
  className?: string;
  autoComplete?: string;
  children?: any;
  value?: any;
  id?: string;
  [x: string]: any;
}

export const UserField = ({
  label,
  children,
  error = false,
  ...props
}: FieldType) => {
  const [field, meta] = useField(props as any);

  return (
    <>
      {error && (
        <ErrorMessage
          name={props.name as string}
          component="span"
          className="error"
        />
      )}
      <ContainerInput>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Field {...field} {...props} />

        {children}
      </ContainerInput>
    </>
  );
};
