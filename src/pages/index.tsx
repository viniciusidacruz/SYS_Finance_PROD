import { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import useDarkMode from "hooks/useDarkMode";

import { MethodSignIn } from "layouts/MethodSignIn";
import { FormSignIn } from "components/Forms/SignIn";

const Home: NextPage = () => {
  const { handleChangeMode } = useDarkMode();

  return (
    <Fragment>
      <Head>
        <title>SYS Finance | Transções em total segurança.</title>
      </Head>

      <main>
        <MethodSignIn>
          <FormSignIn />
        </MethodSignIn>
      </main>
    </Fragment>
  );
};

export default Home;
