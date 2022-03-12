import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>게시물</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Hello World!</h1>
      <h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h1>
      <Image src="/image/sunflower.jpeg" width="1500" height="2500"></Image>
    </Layout>
  );
}
