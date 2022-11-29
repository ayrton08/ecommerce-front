import Head from "next/head";
import { useProducts } from "hooks/useData";

import { ProductFeatured, Header } from "components";
import { Banner, Featured, Categories, Category } from "ui";
import { ComputerIcon } from "ui/icons";

export default function Home() {
  const data = useProducts();
  return (
    <div className="pt-32">
      <Head>
        <title>Home</title>
      </Head>
      <div className="p-4 mb-10 flex flex-col gap-10 items-center fixed top-0 w-full z-30">
        <Header />
      </div>

      <Banner />
      {data ? (
        <Featured>
          {data?.results?.map((data: any) => (
            <ProductFeatured
              key={data.Name}
              title={data.Name}
              price={data["Unit cost"]}
              picture={data.Images[0].url}
              id={data.objectID}
            />
          ))}
        </Featured>
      ) : (
        <progress className="progress w-full fixed top-0"></progress>
      )}

      <div className="divider px-8"></div>
      <Categories>
        <Category label="Tecnology" icon={<ComputerIcon />} />
        <Category label="Wrraper" icon={<ComputerIcon />} />
        <Category label="Bazar" icon={<ComputerIcon />} />
        <Category label="Sport" icon={<ComputerIcon />} />
      </Categories>
    </div>
  );
}
