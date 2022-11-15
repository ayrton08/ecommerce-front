import Head from "next/head";
import Image from "next/image";
import { Header } from "ui/Header";
import { Banner } from "ui/Banner";
import { Footer } from "ui/Footer";
import { Featured } from "ui/Featured";
import { Categories } from "ui/Categories";
import { Menu } from "ui/Menu";

export default function Home() {
  return (
    <>
      <div className="m-4 mb-10 flex flex-col gap-10 items-center">
        <Header />
        <Menu />
      </div>

      <Banner />
      <Featured />
      <div className="divider px-8"></div>
      <Categories />
      <Footer />
    </>
  );
}
