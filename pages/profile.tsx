import { useData } from "hooks/useData";
import Head from "next/head";
import { User, Header, Cart } from "ui";
import { Field } from "ui/Field";

export default function Profile() {
  const data = useData("/me");
  console.log("data", data);

  return (
    <div className="flex gap-5 h-screen justify-center self-center items-center relative">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="absolute top-4 z-30 right-4 left-4">
        <Header></Header>
      </div>
      <User userName="Ayrton Juarez">
        <Field label="Name" placeholder={data.data.name}></Field>
        <Field label="Email" placeholder={data.data.email}></Field>
        <Field
          label="Email"
          placeholder={JSON.stringify(data.data.address)}
        ></Field>
      </User>
      {/* <Cart /> */}
    </div>
  );
}
