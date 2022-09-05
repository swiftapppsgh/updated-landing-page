import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Head>
            <title>Trober - The new way to get to work</title>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:type" content="website" />
            <meta
                name="description"
                content="Trober is an online platform here to redefine the public transport system. Simply book a seat on Trober and move with ease"
            />
            <meta
                name="keywords"
                content="travel transport trotro ridesharing ghana minibus trasportation comfort ride convenience timely public transport shared mobility carbon offset projects in ghana africa west africa sub suhara africa"
            />
            <meta property="og:locale" content="en_US" />
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />
            <meta
                property="og:title"
                content="Trober - The new way to get to work"
            />
            <meta property="og:site_name" content="Trober" />
            <meta property="og:url" content="https://www.troberapp.com" />
            <meta
                property="og:image"
                content="https://www.troberapp.com/trober.ico"
            />
            <Component {...pageProps} />
        </Head>
    );
}

export default MyApp;
