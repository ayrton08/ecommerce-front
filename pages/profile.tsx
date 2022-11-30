import { useEffect, useState } from "react";
import Head from "next/head";
import { Form, Formik } from "formik";

import { Header } from "components";
import { useMe } from "hooks/useData";
import { updateUserData } from "lib/api";
import { createCart } from "helpers/createCart";
import { User, Button, UserField } from "ui";
import { EditIcon, SaveIcon } from "ui/icons/boxicons";
import { useLogin } from "hooks";
import Router from "next/router";

const initialValues = {
  name: "",
  email: "",
  address: "",
  city: "",
};

export default function Profile() {
  const data = useMe("/me");
  const [editOn, setEditOn] = useState(false);
  const profileWithCart = createCart({ ...data?.data });
  const { logged } = useLogin();

  useEffect(() => {
    if (!logged) {
      Router.push("/signin");
    }
  }, [logged]);

  return (
    <div className="flex-col-center container-page pt-12 pb-4 px-4 sm:px-0">
      <Head>
        <title>{data?.data?.name || "Profile"}</title>
      </Head>
      <Header />
      <User userName={data?.data?.name || "User"}>
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
                disable={!editOn}
                name="name"
                onChange={handleChange}
              ></UserField>
              <UserField
                label="Email"
                placeholder={data?.data?.email}
                disable={!editOn}
                name="email"
                onChange={handleChange}
              ></UserField>
              <UserField
                label="Address"
                placeholder={data?.data?.address}
                disable={!editOn}
                name="address"
                onChange={handleChange}
              ></UserField>
              <UserField
                label="City"
                placeholder={data?.data?.city}
                disable={!editOn}
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
      </User>
    </div>
  );
}
