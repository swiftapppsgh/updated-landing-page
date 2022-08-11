import Heny from "./svgs/Heny";
import MainStream from "./svgs/MainStream";
import MPharma from "./svgs/MPharma";
import TravelClan from "./svgs/TravelClan";

const OurPartners = () => {
  return (
    <div className="bg-darkblueopacity mt-44 md:mt-64 md:px-24 py-16">
      <div className="flex flex-col">
        <h1 className=" text-5xl font-extrabold text-center md:text-left">
          Our Partner Companies
        </h1>
        <div className="flex flex-row justify-around items-center mt-24">
          <div className="">
            <TravelClan />
          </div>
          <div className="hidden md:block">
            <Heny />
          </div>
          <div className="hidden lg:block">
            <MainStream />
          </div>
          <div className="hidden lg:block">
            <MPharma />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
