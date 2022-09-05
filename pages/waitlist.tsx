import type { NextPage } from "next";
import Footer from "./Components/Footer";
import Header from "./Components/header";
import WaitlistForm from "./Components/WaitlistForm";

const Home: NextPage = () => {
  return (
    <div className=" h-full">
      <Header />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Home;
