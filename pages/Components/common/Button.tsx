import type { NextPage } from "next";

interface Props {
  buttonText: String;
  buttonColor: String;
  textColor: String;
}

const Button = ({
  buttonText,
  buttonColor,
  textColor = "text-white",
}: Props) => {
  return (
    <div
      className={`px-6 py-3 ${buttonColor} justify-center text-center m-4 rounded-lg md:px-16`}
    >
      <p className={`text-xs md:text-lg ${textColor}`}>{buttonText}</p>
    </div>
  );
};

export default Button;
