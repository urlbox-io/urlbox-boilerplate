import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout: React.FunctionComponent = props => (
  <div id="layout" className="container flex flex-col min-h-screen ">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header />
    <main className="flex-1">{props.children}</main>
    <Footer />
  </div>
);
