import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./common/Button";

function NavLink({ to, children }: any) {
    return (
        <a href={to} className={`mx-4`}>
            {children}
        </a>
    );
}

function MobileNav({ open, setOpen }: any) {
    console.log(open, setOpen);
    return (
        <div
            className={`absolute md:hidden z-50 top-0 right-0 w-screen bg-white transform ${
                open ? "-translate-x-0" : "-translate-x-full"
            }  transition-transform duration-300 ease-in-out filter  `}
        >
            <div className="flex items-center justify-center filter  bg-white h-20">
                {" "}
                {/*logo container*/}
                <Link href="/">
                    <a className="flex flex-row justify-center">
                        <img
                            className="w-6/12 h-1/12"
                            src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662389510/trober_logo1_lh8gxd.png"
                        />
                    </a>
                </Link>
            </div>
            <div className=" flex-row justify-center flex ">
                <Button
                    buttonText="Join Our Waitlist"
                    buttonColor={"bg-primary"}
                    textColor={"text-white"}
                    hover={false}
                    href="/waitlist"
                />
                <Button
                    buttonText="Rent a Vehicle"
                    buttonColor={"bg-darkblueopacity"}
                    textColor={"text-primary"}
                    hover={false}
                    href="https://forms.zohopublic.com/trober/form/ProductEnquiry/formperma/N0z4WebLo3RPAXrd_uFYNFnYxz1Kg_8DAwVbIVfxk1g"
                />
            </div>
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(true);
    return (
        <nav
            className={` flex filter drop-shadow-md bg-white px-4  md:px-44 py-4 h-20 items-center ${
                open && " mb-16 md:mb-0"
            }`}
        >
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a>
                        <img
                            className="w-6/12"
                            src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662389510/trober_logo1_lh8gxd.png"
                        />
                    </a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div className=" flex-row justify-center hidden md:flex">
                    <Button
                        buttonText="Rent a Vehicle"
                        buttonColor={"bg-darkblueopacity"}
                        textColor={"text-primary"}
                        hover={false}
                        href="https://forms.zohopublic.com/trober/form/ProductEnquiry/formperma/N0z4WebLo3RPAXrd_uFYNFnYxz1Kg_8DAwVbIVfxk1g"
                    />
                    <Button
                        buttonText="Join Our Waitlist"
                        buttonColor={"bg-primary"}
                        textColor={"text-white"}
                        hover={false}
                        href="/waitlist"
                    />
                </div>
            </div>
        </nav>
    );
}
