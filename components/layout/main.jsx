import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";

function Main({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Main;
