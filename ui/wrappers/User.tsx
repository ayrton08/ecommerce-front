import { AvatarIcon } from '../icons';
import { useState, useContext } from 'react';
import { Form, Formik } from 'formik';

import { Button, UserField } from 'ui';
import { EditIcon, SaveIcon } from 'ui/icons/boxicons';
import { AuthContext } from 'context/auth';
import Image from 'next/image';
import cookies from 'js-cookie';

export const User = () => {
  const [editOn, setEditOn] = useState(false);

  const { user } = useContext(AuthContext);

  const [initialValues, setInitialValues] = useState({
    fullname: cookies.get('firstName'),
    email: user?.email,
    address: cookies.get('address'),
    city: cookies.get('city'),
    zip: cookies.get('zip'),
    phone: cookies.get('phone'),
  });

  const highResPicture = user?.image.replace('s96', 's800');

  return (
    <div className=" w-full justify-around flex flex-col lg:flex-row   py-12 px-4  z-30 animate__animated animate__fadeIn">
      <figure>
        {user ? (
          <div className="flex flex-col items-center gap-4">
            <Image
              src={highResPicture || ''}
              alt={user.fullname}
              width={200}
              height={200}
              className="rounded-full border-2 border-blue-500 "
            />
            <h2 className="card-title text-3xl flex justify-center self-center mb-4 font-bold">
              {user?.fullname}
            </h2>
          </div>
        ) : (
          <AvatarIcon className="w-36" />
        )}
      </figure>
      <div className="flex flex-col p-4 justify-start">
        <div className=" justify-end w-full h-full relative">
          <div className="form-control">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                // await updateUserData({ ...profileWithCart, ...values });
              }}
            >
              {({ handleChange }) => (
                <Form className="grid w-full lg:grid-cols-2 gap-6">
                  <UserField
                    label="Name"
                    disabled={!editOn}
                    name="fullname"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="Email"
                    placeholder=""
                    disabled={!editOn}
                    name="email"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="Address"
                    placeholder=""
                    disabled={!editOn}
                    name="address"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="City"
                    placeholder=""
                    disabled={!editOn}
                    name="city"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="Zip"
                    placeholder=""
                    disabled={!editOn}
                    name="zip"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="Phone"
                    placeholder=""
                    disabled={!editOn}
                    name="phone"
                    onChange={handleChange}
                  ></UserField>
                  <Button
                    onClick={() => setEditOn((value) => (value ? false : true))}
                    type={'submit'}
                    className={
                      editOn
                        ? 'gap-4 lg:absolute w-full lg:bottom-0 lg:right-0 lg:w-28 py-2 bg-green-500 hover:bg-green-600'
                        : 'hidden'
                    }
                  >
                    <SaveIcon />
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
            <Button
              onClick={() => setEditOn((value) => (value ? false : true))}
              type={'button'}
              className={
                editOn
                  ? 'hidden'
                  : 'gap-4 lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-28 py-2 mt-6'
              }
            >
              <EditIcon />
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
