import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import TroberLogger from "../utils/logEvent";
import BecomeAPartner from "./Components/BecomeAPartner";
import DownloadApp from "./Components/DownloadApp";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ImageBg from "./Components/ImageBg";
import ImageText from "./Components/ImageText";
import Offerings from "./Components/Offerings";
import OurPartners from "./Components/OurPartners";

const Home: NextPage = () => {
    useEffect(() => {
        TroberLogger("LandingPageView", {});
    }, []);
    return (
        <div className="">
            <Header waitlist={false} />
            <ImageBg />
            <ImageText />
            <Offerings />
            {/* <DownloadApp /> */}
            {/* <OurPartners /> */}
            {/* <BecomeAPartner /> */}
            <Footer />
        </div>
    );
};

export default Home;
