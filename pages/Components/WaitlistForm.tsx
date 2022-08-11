import Button from "./common/Button";
import InputField from "./common/InputField";

const WaitlistForm = () => {
  return (
    <div className="flex py-44  justify-center items-center p-6 rounded-lg shadow-lg bg-white ">
      <form>
        <InputField onChange={() => {}} placeHolder="First Name" type="text" />
        <InputField
          onChange={() => {}}
          placeHolder="054XXXXXXX"
          type="number"
        />
        <InputField
          onChange={() => {}}
          placeHolder="Pickup Bus Stop"
          type="text"
        />
        <InputField
          onChange={() => {}}
          placeHolder="Destination Bus Stop"
          type="text"
        />
        <div className="mt-10 px-10">
          <div
            className={
              "px-6 py-3 bg-primary justify-center text-center m-4 rounded-lg md:px-16 hover:bg-darkblueopacity hover:text-primary hover:shadow-2xl text-white  hover:cursor-pointer"
            }
          >
            <p className={`text-xs md:text-lg `}>SUBSCRIBE</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
