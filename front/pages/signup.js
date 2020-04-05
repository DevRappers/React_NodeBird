import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.0/antd.css"
        />
      </Head>
      <AppLayout>
        <div>SignUp</div>
      </AppLayout>
    </>
  );
};

export default SignUp;
