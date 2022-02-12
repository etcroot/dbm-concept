import Navigation from "./navigation";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>DBM Raw Data</title>
        <meta
          name="description"
          content="Click Login through Discord to view shared rawdata and to also submit new rawdata!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <section>{props.children}</section>
      </main>
    </>
  );
}
