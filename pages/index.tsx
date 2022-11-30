import Head from "next/head";
import { useProducts } from "hooks/useData";

import { ProductFeatured, Header } from "components";
import { Banner, Featured, Categories, Category } from "ui";
import {
  CashIcon,
  ComputerIcon,
  MasterIcon,
  MercadoPagoIcon,
  VisaIcon,
} from "ui/icons";
import { ContainerCard, ContainerPayments } from "ui/wrappers/styled";
import { CardTitle } from "ui/label/styled";
import { Progress } from "ui/loaders/styled";
import { Divider } from "ui/divider/styled";

export default function Home() {
  const data = useProducts();

  return (
    <div className="pt-40">
      <Head>
        <title>Home</title>
      </Head>
      <Header />

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
        <Progress />
      )}

      <Divider />
      <Categories>
        <Category label="Tecnology" icon={<ComputerIcon />} />
        <Category label="Wrraper" icon={<ComputerIcon />} />
        <Category label="Bazar" icon={<ComputerIcon />} />
        <Category label="Sport" icon={<ComputerIcon />} />
      </Categories>
      <Divider />
      <ContainerPayments>
        <CardTitle>Payment Methods</CardTitle>
        <ContainerCard>
          <VisaIcon />
          <MasterIcon />
          <MercadoPagoIcon />
          <CashIcon className="w-20" />
        </ContainerCard>
      </ContainerPayments>
    </div>
  );
}
