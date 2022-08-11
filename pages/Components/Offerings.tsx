import Booking from "./svgs/Booking";
import Location from "./svgs/Location";
import Map from "./svgs/Map";
import Payment from "./svgs/Payment";

const Offerings = () => {
  return (
    <div className="bg-primary py-28">
      <h1 className="text-5xl text-white text-center mb-10 sm:mb-24">
        What We Offer
      </h1>
      <div className="flex flex-col items-center justify-center md:justify-around md:flex-row">
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-0">
          <div className="flex flex-col justify-center items-center bg-red rounded-full my-6 py-6 px-10 h-32 w-32">
            <Location />
          </div>
          <div className="flex flex-col text-white  w-10/12 text-center">
            <h1 className=" text-lg font-semibold">Tracking</h1>
            <p className="">
              Track your ride in real time and know an estimate of the pickup
              time
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-0">
          <div className="flex flex-col justify-center items-center bg-red rounded-full my-6 py-6 px-10 h-32 w-32">
            <Map />
          </div>
          <div className="flex flex-col text-white  w-10/12 text-center">
            <h1 className=" text-lg font-semibold">Smart Routing</h1>
            <p className="">
              To increase ridership, we use data to determine and optimize fixed
              bus routes.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-0">
          <div className="flex flex-col justify-center items-center bg-red rounded-full my-6 py-6 px-10 h-32 w-32">
            <Payment />
          </div>
          <div className="flex flex-col text-white  w-10/12 text-center">
            <h1 className=" text-lg font-semibold">In-App Payment</h1>
            <p className="">
              No need to carry physical cash. Connect your digital wallet and
              pay as you ride.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-0">
          <div className="flex flex-col justify-center items-center bg-red rounded-full my-6 py-6 px-10 h-32 w-32">
            <Booking />
          </div>
          <div className="flex flex-col text-white  w-10/12 text-center">
            <h1 className=" text-lg font-semibold">Seamless Booking</h1>
            <p className="">
              Request for a ride in seconds. The booking process is simplified
              to save you time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
