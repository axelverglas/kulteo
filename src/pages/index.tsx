import Head from "next/head";
import DefaultLayout from "@/components/DefaultLayout";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <Navbar />
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
    </>
  );
}
