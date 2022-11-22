import { Form, Formik } from "formik";
import { useMe } from "hooks/useData";
import { updateUserData } from "lib/api";
import Head from "next/head";
import { useState } from "react";
import { User, Header, Cart } from "ui";
import { Button } from "ui/Button";
import { Field } from "ui/Field";

const initialValues = {
  name: "",
  email: "",
  address: "",
  city: "",
};

export default function Profile() {
  const data = useMe("/me");
  const [editOn, setEditOn] = useState(false);
  console.log("data", data);

  return (
    <div className="flex gap-5 h-screen justify-center self-center items-center relative">
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
            console.log(values);
            const res = await updateUserData({ ...values });
            console.log("res", res);
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
                placeholder={JSON.stringify(data?.data?.address)}
                disable={!editOn}
                name="address"
                onChange={handleChange}
              ></Field>
              <Field
                label="City"
                placeholder={JSON.stringify(data?.data?.address?.city)}
                disable={!editOn}
                name="city"
                onChange={handleChange}
              ></Field>
              <Button
                onClick={() => setEditOn((value) => (value ? false : true))}
                type={"submit"}
                className={editOn ? "" : "hidden"}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
        {/* <Button className="bg-green-500">My Cart</Button> */}
        <Button
          onClick={() => setEditOn((value) => (value ? false : true))}
          type={"button"}
          className={editOn ? "hidden" : ""}
        >
          Edit
        </Button>
      </User>
    </div>
  );
}