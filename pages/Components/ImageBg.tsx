import type { NextPage } from "next";
import Image from "next/image";
import Select from "react-select";
import AddRoute from "./AddRoute";
import Button from "./common/Button";
import SelectDropDown from "./common/Select";

const ImageBg: NextPage = () => {
    return (
        <>
            <div
                className=" flex flex-col items-center justify-between relative md:bg-background md:flex-row md:py-16 md:px-24"
                // style={{
                //   height: "80vh",
                // }}
            >
                <img
                    src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662386650/backgroundmobile_xe1dz6.png"
                    className="block w-full md:hidden"
                />
                <AddRoute
                    classname={"hidden md:flex"}
                    textColor={"text-white"}
                    selectionColor="white"
                />
            </div>
            <AddRoute
                classname={"flex md:hidden"}
                textColor={"text-primary "}
                selectionColor="#2D194E"
            />
        </>
    );
};

export default ImageBg;
