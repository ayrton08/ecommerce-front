/* eslint-disable react-hooks/rules-of-hooks */
import { GoogleIcon, LoginIcon } from '../../ui/icons';
import { Basic } from '../../ui/wrappers/Basic';
import { UserField } from 'ui/field/Field';
// import { Button } from 'ui/button/styled';

import { Formik, Form } from 'formik';
import { ContainerCard } from 'ui/wrappers/styled';
import { CardTitle } from 'ui/label/styled';
import * as yup from 'yup';
import { Button, Divider, Grid } from '@mui/material';
import { signIn } from 'next-auth/react';

const initialValues = {
  email: '',
};

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
});

interface Props {
  handler: (args: any) => Promise<any>;
  providers: any;
}

export const LoginEmail = ({ handler, providers }: Props) => {
  return (
    <Basic
      icon={<LoginIcon className="w-full  self-center" />}
      // color="md:bg-dark_light"
    >
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handler({ ...values });
          }}
          validationSchema={schema}
        >
          {({ handleChange, values, errors }) => (
            <Form className="form-control w-full flex flex-col">
              {!errors.email && <span className="w-full h-[24px] my-2"></span>}
              <UserField
                title="Your Email"
                label="Email"
                placeholder="user@email.com"
                name="email"
                onChange={handleChange}
                type="email"
                className="bg-white placeholder:text-gray-500 "
                disabled={false}
                data-test="email-input"
                error
              />
              <Button
                type="submit"
                data-test="btn-email"
                className="rounded-3xl bg-blue-500 text-white font-bold text-base my-4 hover:bg-blue-600"
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="end"
          className="w-full"
        >
          <Divider sx={{ width: '100%', mb: 2 }} />
          {providers &&
            Object.values(providers).map((provider: any) => {
              if (provider.id === 'credentials')
                return <div key="credentials"></div>;

              if (provider.id === 'github') {
                return (
                  <Button
                    key={provider.id}
                    variant="outlined"
                    fullWidth
                    color="primary"
                    sx={{ mb: 1 }}
                    onClick={() => signIn(provider.id)}
                    className="bg-black/90 flex gap-2 rounded-3xl font-bold text-white hover:bg-black/80 text-sm"
                  >
                    <i
                      className="bx bxl-github bx-sm"
                      style={{ color: '#ffffff' }}
                    />
                    <span>{provider.name}</span>
                  </Button>
                );
              }
              if (provider.id === 'google') {
                return (
                  <Button
                    key={provider.id}
                    variant="outlined"
                    fullWidth
                    color="primary"
                    sx={{ mb: 1 }}
                    onClick={() => signIn(provider.id)}
                    className="bg-white flex gap-2 rounded-3xl font-bold  hover:bg-black/10 text-sm"
                  >
                    <GoogleIcon className="w-6" />
                    <span>{provider.name}</span>
                  </Button>
                );
              }
            })}
        </Grid>
      </ContainerCard>
    </Basic>
  );
};
