import Link from "next/link";
import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextJS workshop!</title>
      </Head>
      <h1>Hello from Home</h1>
      <Anchor href="/dogs/henry">Henry Page</Anchor>
      <Anchor href="/dogs/random">Random Dog Page</Anchor>
    </>
  );
}
