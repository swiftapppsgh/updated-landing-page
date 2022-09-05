import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BecomeAPartner from "./Components/BecomeAPartner";
import DownloadApp from "./Components/DownloadApp";
import Footer from "./Components/Footer";
import Header from "./Components/header";
import ImageBg from "./Components/ImageBg";
import ImageText from "./Components/ImageText";
import Offerings from "./Components/Offerings";
import OurPartners from "./Components/OurPartners";

const Home: NextPage = () => {
    return (
        <div className="">
            <Header />
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
