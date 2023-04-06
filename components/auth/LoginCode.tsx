import { Formik, Form } from 'formik';

import { LoginIcon } from '../../ui/icons';
import { Basic, Button, ButtonDark, UserField } from 'ui';
import { LoginCodeProps } from 'interfaces/signin';
import { CardTitle } from 'ui/label/styled';
import { ContainerCard } from 'ui/wrappers/styled';
import { PasteIcon } from 'ui/icons/boxicons';
import * as yup from 'yup';
import { useLogin } from 'hooks';

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

export const LoginCode = ({ email, onClick }: LoginCodeProps) => {
  const pasteCode = async (setFieldValue: any) => {
    const value = await navigator.clipboard.readText();
    const copiedText = Number(value);
    const code = isNaN(copiedText);
    if (!code) {
      setFieldValue('code', copiedText);
    }
  };
  const { getToken } = useLogin();

  const handlerCode = async (e: any) => {
    const res = await getToken({ ...e });
    return res;
  };

  return (
    <Basic
      icon={<LoginIcon className="w-2/3 lg:w-full self-center" />}
      color="md:bg-dark_light relative "
    >
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
                  className="w-12"
                  onClick={() => {
                    pasteCode(setFieldValue);
                  }}
                >
                  <PasteIcon />
                </Button>
              </UserField>
              {!errors.code && <span className="w-full h-[24px] my-2"></span>}
              <Button type="submit">Ingresar</Button>
              <div className="lg:absolute bottom-6 right-10 lg:w-[367px] flex items-center pt-4 ">
                <span className="w-full text-center bg-dark justify-center rounded-l-md h-[64px] font-bold flex flex-col">
                  We send your code to{' '}
                  <span className="text-green-500">{email}</span>
                </span>
                <ButtonDark
                  onClick={onClick}
                  type="button"
                  className="w-20 rounded-l-none bg-primaryA h-[64px]"
                >
                  Change email
                </ButtonDark>
              </div>
            </Form>
          )}
        </Formik>
      </ContainerCard>
    </Basic>
  );
};
