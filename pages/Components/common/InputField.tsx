import { ChangeEventHandler } from "react";

interface Props {
  type: string;
  placeHolder: string;
  onChange: ChangeEventHandler;
}

const InputField = ({ type, onChange, placeHolder }: Props) => {
  return (
    <div className="form-group mb-6">
      <input
        type={type}
        className="form-control block
          w-full
          px-16
          py-3
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-darkblueopacity
          rounded
          transition
          ease-in-out
          m-0
          focus:text-black focus:bg-darkblueopacity focus:border-primary focus:outline-none"
        id="exampleInput91"
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
