import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import firebaseConfig from "./api/constants";

const app = initializeApp(firebaseConfig);

export let analytics: Analytics;

if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
