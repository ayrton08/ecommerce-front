import { Formik, Form } from 'formik';

import { LoginIcon } from '../styled/icons';
import { Basic, Button, UserField } from 'components/styled';
import { CardTitle } from 'components/styled/label/styled';
import { ContainerCard } from 'components/styled/wrappers/styled';
import { PasteIcon } from 'components/styled/icons/boxicons';
import * as yup from 'yup';
import { signIn } from 'next-auth/react';
import { pasteCode } from 'utils/pasteClipBoard';
import { FC, MouseEventHandler } from 'react';

const initialValues = {
  code: '',
};

const schema = yup.object({
  code: yup
    .number()
    .min(5, 'Code has to have 5 characters')
    .min(6, 'Code has to have 5 characters')
    .required('Code is required'),
});

export interface Props {
  email: string;
  onClick: MouseEventHandler;
}

export const LoginCode: FC<Props> = ({ email, onClick }) => {
  const handlerCode = async (e: any) => {
    await signIn('credentials', { ...e });
  };

  return (
    <Basic icon={<LoginIcon className="w-2/3 lg:w-full self-center" />}>
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={async ({ code }, { setFieldError }) => {
            const res = await handlerCode({ email, code });
            if (res === undefined) {
              setFieldError('code', 'Error: Invalid code');
            }
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, setFieldValue, errors }) => (
            <Form className="form-control" onClick={() => {}}>
              {!errors.code && <span className="w-full h-[24px] my-2"></span>}
              <UserField
                title="Your Code"
                label="Code"
                placeholder="****"
                name="code"
                onChange={handleChange}
                type="number"
                className="bg-white"
                autoComplete={'false'}
                id="code"
                value={values.code}
                data-test="code-input"
                error
              >
                <Button
                  data-test="btn-code"
                  type="button"
                  className="w-20 ml-1"
                  onClick={() => {
                    pasteCode(setFieldValue);
                  }}
                >
                  <PasteIcon />
                </Button>
              </UserField>

              <Button type="submit" className="mt-4">
                Ingresar
              </Button>
              <div className=" flex items-center pt-4 ">
                <span className="w-full text-center border border-blue-500 justify-center rounded-l-3xl h-[64px] font-bold flex flex-col">
                  We send your code to{' '}
                  <span className="text-green-500">{email}</span>
                </span>
                <Button
                  onClick={onClick}
                  type="button"
                  className="w-24 rounded-l-none h-[64px]"
                >
                  Change email
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </ContainerCard>
    </Basic>
  );
};
