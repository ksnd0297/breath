import {StyleProvider, createCache, extractStyle} from "@ant-design/cssinjs";
import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";
import Script from "next/script";

export default function MyDocument() {
    return (
        <Html lang='kr'>
            <Head>
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3579472484776225"
                    crossOrigin="anonymous"></Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                (
                    <StyleProvider cache={cache}>
                        <App {...props} />
                    </StyleProvider>
                ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{__html: style}} />
            </>
        ),
    };
};
