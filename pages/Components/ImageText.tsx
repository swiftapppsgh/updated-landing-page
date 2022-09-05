import Image from "next/image";

const ImageText = () => {
    return (
        <div className="flex flex-col items-center px-10 mt-2 sm:mt-24 mb-24 lg:mx-44">
            <h1 className=" sm:w-4/6 text-xl text-center font-bold text-primary sm:mb-16 md:text-5xl">
                Experience a simple, better way to move
            </h1>
            <div className="flex flex-col justify-around items-center w-full py-10 sm:py-16 md:flex-row ">
                <div className="flex flex-row w-full ">
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386650/image1_unw8kv.png"
                        className="w-full md:w-9/12 lg:w-9/12 "
                    ></img>
                </div>
                <div className="flex flex-col justify-center md:w-4/6">
                    <h1 className="text-xl font-bold text-primary mb-4 md:mb-10 sm:text-5xl">
                        Trober Daily
                    </h1>
                    <p className=" text-justify md:w-full text-lg">
                        Book a ride to work daily and connect with other working
                        professionals traveling the same route Adjust your
                        travel experience to your needs and travel with the
                        greatest comfort and safety on the market.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-full py-16 md:flex-row">
                <div>
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386649/image2_wrqjsw.png"
                        className="w-full md:w-9/12 lg:w-9/12 md:hidden"
                    ></img>
                </div>
                <div className="flex flex-col justify-center md:w-4/6">
                    <h1 className="text-xl font-bold text-primary mb-4 md:mb-10 sm:text-5xl">
                        Trober Corporate
                    </h1>
                    <p className=" text-justify md:w-full text-lg">
                        Get a bus to move your employees to and from work in a
                        convenient and timely manner. Schedule the times and
                        stops that fit your needs with the flexibility and
                        support that only Trober can provide.
                    </p>
                </div>
                <div className="flex flex-row w-full justify-end">
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386649/image2_wrqjsw.png"
                        className="hidden w-full md:w-9/12 lg:w-9/12 md:block"
                    ></img>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center w-full py-16 md:flex-row ">
                <div className="flex flex-row w-full ">
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386649/image3_uovpyi.png"
                        className="w-full md:w-9/12 lg:w-9/12 "
                    ></img>
                </div>
                <div className="flex flex-col justify-center md:w-4/6">
                    <h1 className="text-xl font-bold text-primary mb-4 md:mb-10 sm:text-5xl">
                        Trober Rental
                    </h1>
                    <p className=" text-justify md:w-full text-lg">
                        Rent and ride in style with our fleet of cars for your
                        special occasions.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-full py-16 md:flex-row">
                <div>
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386650/image4_a5tlom.png"
                        className="w-full md:w-9/12 lg:w-9/12 md:hidden"
                    ></img>
                </div>
                <div className="flex flex-col justify-center md:w-4/6">
                    <h1 className="text-xl font-bold text-primary mb-4 md:mb-10 sm:text-5xl">
                        Trober Tourism
                    </h1>
                    <p className=" text-justify md:w-full text-lg">
                        Get to the most incredible corners of the country with
                        personalized routes for you and your friends or family.
                        Escape the routine and just enjoy the trip while our
                        hosts take you to your favorite destinations under the
                        most complete security measures
                    </p>
                </div>
                <div className="flex flex-row w-full justify-end">
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386650/image4_a5tlom.png"
                        className="hidden w-full md:w-9/12 lg:w-9/12 md:block"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default ImageText;
