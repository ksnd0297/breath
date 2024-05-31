import Layout from "@/components/layout";
import "@/styles/globals.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import type {AppProps} from "next/app";
import Head from "next/head";
import {useState} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {StyleProvider} from "@ant-design/cssinjs";

export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
      </Head>
      <StyleProvider layer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
