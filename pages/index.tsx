import Head from "next/head";
import Image from "next/image";
import { Header } from "ui/Header";
import { Banner } from "ui/Banner";
import { Footer } from "ui/Footer";
import { Featured } from "ui/Featured";
import { Categories } from "ui/Categories";
import { Menu } from "ui/Menu";

import bg from "assets/bg.svg";

export default function Home() {
  return (
    <div className="bg">
      <div className="p-4 mb-10 flex flex-col gap-10 items-center">
        <Header />
        <Menu />
      </div>
      {/* <Image
        src={bg}
        alt=""
        className="z-0  fixed top-0 bottom-0 left-0 right-0"
      /> */}

      <Banner />
      <Featured />
      <div className="divider px-8"></div>
      <Categories />
      <Footer />
    </div>
  );
}
