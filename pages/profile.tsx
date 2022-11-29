import { useState } from "react";
import Head from "next/head";
import { Form, Formik } from "formik";

import { Header } from "components";
import { useMe } from "hooks/useData";
import { updateUserData } from "lib/api";
import { createCart } from "helpers/createCart";
import { User, Button, Field } from "ui";

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

  return (
    <div className="flex gap-5 h-screen justify-center self-center items-center relative ">
      <Head>
        <title>{data?.data?.name || "Profile"}</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header></Header>
      </div>
      <User userName={data?.data?.name || "User"}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await updateUserData({ ...profileWithCart, ...values });
          }}
        >
          {({ handleChange }) => (
            <Form>
              <Field
                label="Name"
                placeholder={data?.data?.name || "Choose a name"}
                disable={!editOn}
                name="name"
                onChange={handleChange}
              ></Field>
              <Field
                label="Email"
                placeholder={data?.data?.email}
                disable={!editOn}
                name="email"
                onChange={handleChange}
              ></Field>
              <Field
                label="Address"
                placeholder={data?.data?.address}
                disable={!editOn}
                name="address"
                onChange={handleChange}
              ></Field>
              <Field
                label="City"
                placeholder={data?.data?.city}
                disable={!editOn}
                name="city"
                onChange={handleChange}
              ></Field>
              <Button
                onClick={() => setEditOn((value) => (value ? false : true))}
                type={"submit"}
                className={editOn ? "mt-4" : "hidden"}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
        <Button
          onClick={() => setEditOn((value) => (value ? false : true))}
          type={"button"}
          className={editOn ? "hidden" : "mt-4"}
        >
          Edit
        </Button>
      </User>
    </div>
  );
}
