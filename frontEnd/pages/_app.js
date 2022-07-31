import "./globals.scss";
import Head from "next/head";
import Header from "../components/layout/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="app">
                <div id="root">
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </div>
            </div>
        </>
    );
};

export default App;
