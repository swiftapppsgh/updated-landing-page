import Button from "./common/Button";
import InputField from "./common/InputField";
import axiosInstance from "../api/axiosInstance";
import { useEffect, useState } from "react";
import TroberLogger from "../../utils/logEvent";

const WaitlistForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setError("");
            setSuccessMessage("");
        }, 5000);
    }, [error, successMessage]);

    return (
        <div className="flex py-44  justify-center items-center p-6 rounded-lg shadow-lg bg-white ">
            <form>
                <InputField
                    onChange={(e: string) => {
                        setName(e);
                    }}
                    placeHolder="Name"
                    type="text"
                    value={name}
                />
                <InputField
                    onChange={(e: string) => {
                        setNumber(e);
                    }}
                    placeHolder="054XXXXXXX"
                    type="number"
                    value={number}
                />
                <InputField
                    onChange={(e: string) => {
                        setPickup(e);
                    }}
                    placeHolder="Pickup Bus Stop"
                    type="text"
                    value={pickup}
                />
                <InputField
                    onChange={(e: string) => {
                        setDestination(e);
                    }}
                    placeHolder="Destination Bus Stop"
                    type="text"
                    value={destination}
                />
                <div className="mt-10 px-10">
                    <div
                        onClick={async () => {
                            TroberLogger("JoinWaitlistClicked", {});
                            if (!name || !number || !pickup || !destination)
                                return;
                            try {
                                await axiosInstance.post(
                                    "/waitlist/saveUserRouteToWaitlist",
                                    {
                                        name,
                                        phoneNumber: number,
                                        pickupLocation: pickup,
                                        dropoffLocation: destination,
                                    }
                                );
                                setName("");
                                setNumber("");
                                setPickup("");
                                setDestination("");
                                setSuccessMessage(
                                    "Congratulations, you are on the waitlist. Stay tuned for updates😊"
                                );
                                TroberLogger("WaitlistJoinSuccess", {});
                            } catch (e) {
                                setError(
                                    "Oops! There was an error. Try again😔"
                                );
                                TroberLogger("WaitlistJoinError", {});
                            }
                        }}
                        className={`px-6 py-3 bg-primary justify-center 
                        text-center m-4 rounded-lg md:px-16 
                        md:hover:bg-darkblueopacity md:hover:text-primary 
                        hover:shadow-2xl text-white  ${
                            !name || !number || !pickup || !destination
                                ? ""
                                : "hover:cursor-pointer"
                        }`}
                    >
                        <p className={`text-xs md:text-lg `}>SUBSCRIBE</p>
                    </div>
                    {error && (
                        <p className="text-danger text-center">{error}</p>
                    )}
                    {successMessage && (
                        <p className="text-primary text-center">
                            {successMessage}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default WaitlistForm;
