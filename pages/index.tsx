import Head from "next/head";
import Image from "next/image";
import { Header } from "ui/Header";
import { Banner } from "ui/Banner";
import { Footer } from "ui/Footer";
import { Featured } from "ui/Featured";

export default function Home() {
  return (
    <>
      <div className="m-4 mb-10">
        <Header />
      </div>
      <Banner />
      <Featured />
      <Footer />
    </>
  );
}
