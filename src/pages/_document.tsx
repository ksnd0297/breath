import {StyleProvider, createCache, extractStyle} from "@ant-design/cssinjs";
import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";

export default function MyDocument() {
    return (
        <Html lang='kr'>
            <Head>
                <GoogleAds />
            </Head>
            <body>
                <Main />
                <NextScript />
                <GoogleTag />
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

const GoogleAds = () => {
    return (
        <script  async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3579472484776225" crossOrigin="anonymous"></script>
    )
}

const GoogleTag = () => {
    return (
        <>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=GTM-MML78Z93`}
                    height="0"
                    width="0"
                    className="hidden invisible"
                ></iframe>
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}
        </>
    )
}