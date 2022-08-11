import Button from "./common/Button";
import InputField from "./common/InputField";

const WaitlistForm = () => {
  return (
    <div className="flex py-44 justify-center items-center p-6 rounded-lg shadow-lg bg-white ">
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
        <div className="mt-10">
          <Button
            buttonColor={"bg-primary"}
            buttonText="SUBSCRIBE"
            textColor={"text-white"}
            hover={true}
            href=""
          />
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
