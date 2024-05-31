import Layout from "@/components/layout";
import "@/styles/globals.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import type {AppProps} from "next/app";
import Head from "next/head";
import {useState} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {StyleProvider} from "@ant-design/cssinjs";
import {ConfigProvider} from "antd";

export default function App({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
                <title>{metadata.title}</title>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <meta name='description' content={metadata.description} />
                <meta property='og:type' content={metadata.openGraph.type} />
                <meta property='og:title' content={metadata.openGraph.title} />
                <meta property='og:description' content={metadata.openGraph.description} />
                <meta property='og:url' content={metadata.openGraph.url} />
                <meta property='og:locale' content={metadata.openGraph.locale} />
                <meta property='og:image' content={metadata.openGraph.image} />
                <meta name="google-site-verification" content="AUklnJUnORXler3c24O0MbTU1SUNtPkyw0bEsN_R4Bc" />
            </Head>
            <StyleProvider layer>
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: "MangoDdobak-R, sans-serif",
                        },
                    }}
                >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ConfigProvider>
            </StyleProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

const metadata = {
    title: "숨만 쉬며 얼마 벌었을까?",
    description: "벌이를 입력하고 숨만 쉬며 얼마 버는지 체크하세요!",
    openGraph: {
        type: "website",
        title: "숨만 쉬며 얼마 벌었을까?",
        description: "벌이를 입력하고 숨만 쉬며 얼마 버는지 체크하세요!",
        url: "https://justbreathingincome.vercel.app/",
        locale: "ko-KR",
        image: `${process.env.NEXT_PUBLIC_OG_IMAGE_HOST}/ogImage/ogImage.jpg`,
    },
};
