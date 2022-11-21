import Head from "next/head";
import { Product } from "components/Product";
import { Header } from "ui/Header";

import { useRouter } from "next/router";

import { Loader } from "ui/Loader";
import { useData } from "hooks/useData";

export default function Search() {
  const router = useRouter();
  const query = JSON.stringify(router.query);
  console.log(router.query);

  const data = useData(`/products?search=${query}`);

  console.log(data);

  return (
    <div className="p-4  flex flex-col min-h-screen gap-10 items-center ">
      <Head>
        <title>Search</title>
      </Head>
      <Header />

      {data ? (
        data.results.map((product: any) => (
          <Product
            key={product.objectID}
            title={product.Name}
            description={product.Description}
            price={product["Unit cost"]}
            picture={product.Images[0].url}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
