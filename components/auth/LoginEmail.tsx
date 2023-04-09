import { GoogleIcon, LoginIcon } from '../../ui/icons';
import { Basic } from '../../ui/wrappers/Basic';
import { UserField } from 'ui/field/Field';

import { Formik, Form } from 'formik';
import { ContainerCard } from 'ui/wrappers/styled';
import { CardTitle } from 'ui/label/styled';
import * as yup from 'yup';
import { Divider, Grid } from '@mui/material';
import { signIn } from 'next-auth/react';
import { Button } from 'ui';
import { FC } from 'react';

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

export const LoginEmail: FC<Props> = ({ handler, providers }) => {
  return (
    <Basic icon={<LoginIcon className="md:w-3/4 w-2/3  self-center" />}>
      <CardTitle>Login</CardTitle>
      <ContainerCard>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handler({ ...values });
          }}
          validationSchema={schema}
        >
          {({ handleChange, errors }) => (
            <Form className="form-control w-full flex flex-col">
              {!errors.email && <span className="w-full h-[24px] my-2"></span>}
              <UserField
                title="Your Email"
                label="Email"
                placeholder="user@email.com"
                name="email"
                onChange={handleChange}
                type="email"
                className="bg-white placeholder:text-gray-500"
                disabled={false}
                data-test="email-input"
                error
              />
              <Button type="submit" data-test="btn-email" className="my-3">
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
          className="w-full text-center"
        >
          <Divider sx={{ width: '100%', mb: 2 }} />
          <span className="text-sm pb-1">or login with</span>
          {providers &&
            Object.values(providers).map((provider: any) => {
              if (provider.id === 'credentials')
                return <div key="credentials"></div>;

              if (provider.id === 'github') {
                return (
                  <Button
                    key={provider.id}
                    onClick={() => signIn(provider.id)}
                    className="bg-black/90 flex gap-2 rounded-3xl font-bold text-white hover:bg-black/80 text-sm mb-3"
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
                    onClick={() => signIn(provider.id)}
                    className="bg-white gap-2 hover:bg-black/10 text-sm text-black border border-black/40 "
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
