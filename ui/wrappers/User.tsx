import { AvatarIcon } from "../icons";
import { useState } from "react";
import { Form, Formik } from "formik";

import { useMe } from "hooks/useData";
import { updateUserData } from "lib/api";
import { createCart } from "helpers/createCart";
import { Button, UserField } from "ui";
import { EditIcon, SaveIcon } from "ui/icons/boxicons";

const initialValues = {
  name: "",
  email: "",
  address: "",
  city: "",
};

export const User = ({ children, userName }: any) => {
  const data = useMe("/me");

  const [editOn, setEditOn] = useState(false);
  const profileWithCart = createCart({ ...data?.data });
  return (
    <div className=" card flex flex-col mt-20 mb-6 sm:mt-16 shadow-xl  bg-black/20  py-8 px-4  z-30 glass-efect animate__animated animate__fadeIn">
      <figure>
        <AvatarIcon className="w-36" />
      </figure>
      <div className="flex flex-col p-4 justify-center">
        <h2 className="card-title self-center mb-4">{userName}</h2>
        <div className="card-actions justify-end">
          <div className="form-control">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                await updateUserData({ ...profileWithCart, ...values });
              }}
            >
              {({ handleChange }) => (
                <Form className="flex flex-col gap-4">
                  <UserField
                    label="Name"
                    placeholder={data?.data?.name || "Choose a name"}
                    disabled={!editOn}
                    name="name"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="Email"
                    placeholder={data?.data?.email}
                    disabled={!editOn}
                    name="email"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="Address"
                    placeholder={data?.data?.address}
                    disabled={!editOn}
                    name="address"
                    onChange={handleChange}
                  ></UserField>
                  <UserField
                    label="City"
                    placeholder={data?.data?.city}
                    disabled={!editOn}
                    name="city"
                    onChange={handleChange}
                  ></UserField>
                  <Button
                    onClick={() => setEditOn((value) => (value ? false : true))}
                    type={"submit"}
                    className={editOn ? "gap-4 " : "hidden"}
                  >
                    <SaveIcon />
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
            <Button
              onClick={() => setEditOn((value) => (value ? false : true))}
              type={"button"}
              className={editOn ? "hidden" : "mt-4 gap-4"}
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
