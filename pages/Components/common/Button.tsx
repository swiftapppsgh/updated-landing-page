import type { NextPage } from "next";
import Link from "next/link";

interface Props {
    buttonText: String;
    buttonColor: String;
    textColor: String;
    hover: boolean;
    href: string;
}

const Button = ({
    buttonText,
    buttonColor,
    textColor = "text-white",
    hover,
    href = "/",
}: Props) => {
    return (
        <Link href={href}>
            <a
                target={"_blank"}
                className={`px-6 py-3 ${buttonColor} justify-center text-center m-4 rounded-lg md:px-16
      ${
          hover && "hover:bg-darkblueopacity hover:text-primary"
      } hover:shadow-2xl ${textColor}  hover:cursor-pointer
      `}
            >
                <p className={`text-xs md:text-lg `}>{buttonText}</p>
            </a>
        </Link>
    );
};

export default Button;
