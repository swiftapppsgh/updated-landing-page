import type { NextPage } from "next";
import { useEffect } from "react";
import TroberLogger from "../utils/logEvent";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import WaitlistForm from "./Components/WaitlistForm";

const Home: NextPage = () => {
    useEffect(() => {
        TroberLogger("WaitlistOpen", {});
    }, []);
    return (
        <div className=" h-full">
            <Header waitlist={true} />
            <WaitlistForm />
            <Footer />
        </div>
    );
};

export default Home;
