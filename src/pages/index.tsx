import { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import useDarkMode from "hooks/useDarkMode";

const Home: NextPage = () => {
  const { handleChangeMode } = useDarkMode();

  return (
    <Fragment>
      <Head>
        <title>SYS Finance | Transções em total segurança.</title>
      </Head>

      <main>
        <button onClick={() => handleChangeMode()}>Change theme</button>
      </main>
    </Fragment>
  );
};

export default Home;
