import Head from "next/head";
import { Product } from "components/Product";

import { useRouter } from "next/router";

import { Header } from "components/Header";

import { Loader } from "ui/Loader";
import { useData } from "hooks/useData";
import { Basic } from "ui/wrappers/Basic";

import { NoResultsIcons } from "ui/icons";
import { Toast } from "ui/Toast";

export default function Search() {
  const router = useRouter();
  const query = JSON.stringify(router.query);

  const data = useData(`/products?search=${query}`);

  return (
    <div className="p-4  flex flex-col min-h-screen gap-10 items-center ">
      <Head>
        <title>Search</title>
      </Head>
      <Header />
      {data?.pagination?.total === 0 && (
        <Basic
          icon={<NoResultsIcons className="w-full" />}
          color="bg-red-600/40"
        >
          <h2 className="card-title">No Results!</h2>
        </Basic>
      )}
      {data ? (
        data.results.map((product: any) => (
          <Product
            key={product.objectID}
            title={product.Name}
            description={product.Description}
            price={product["Unit cost"]}
            picture={product.Images[0].url}
            id={product.objectID}
            onClick={() => {
              Toast("Producto agregado al carrito");
            }}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
