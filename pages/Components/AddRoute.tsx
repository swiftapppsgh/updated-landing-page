import Button from "./common/Button";
import SelectDropDown from "./common/Select";

interface Props {
    classname: String;
    textColor: String;
    selectionColor: string;
}

const AddRoute = ({ classname, textColor, selectionColor }: Props) => {
    return (
        <>
            <div
                className={`text-white flex-col w-full text-center md:w-6/12 md:mt-24 ${classname} sm:py-24`}
            >
                <h1
                    className={`text-xl text-center font-extrabold mt-10 sm:my-10 sm:mt-0 md:text-8xl md:text-left ${textColor}`}
                >
                    MOVE AROUND THE CITY WITH EASE
                </h1>
                <p className={`text-lg hidden sm:block ${textColor}`}>
                    We are on a mission to redefine every commuter's journey by
                    making mobility smarter, affordable and convenient.
                </p>
            </div>
            {/* <div
        className={`justify-center items-center py-10 mx-10 bg-darkgray md:bg-graybg h-4/5 z-10 rounded-2xl md:w-4/6 lg:w-2/6 ${classname}`}
      >
        <div className="sm:w-3/6 opacity-100 flex flex-col justify-around h-full ">
          <h3 className=" text-primary  text-xl font-bold self-center mb-4 sm:mb-0 sm:text-4xl text-center">
            Book Your Trip
          </h3>
          <SelectDropDown
            selectionColor={selectionColor}
            options={[
              {
                value: "red",
                label: "Choose Route",
              },
            ]}
          />
          <SelectDropDown
            selectionColor={selectionColor}
            options={[
              {
                value: "red",
                label: "Pick Bus Stop",
              },
            ]}
          />
          <SelectDropDown
            selectionColor={selectionColor}
            options={[
              {
                value: "red",
                label: "Dropoff Bus Stop",
              },
            ]}
          />
          <SelectDropDown
            selectionColor={selectionColor}
            options={[
              {
                value: "red",
                label: "Choose Subscription",
              },
            ]}
          />
          <SelectDropDown
            selectionColor={selectionColor}
            options={[
              {
                value: "red",
                label: "Choose Date",
              },
            ]}
          />

          <Button
            buttonText={"Book Trip"}
            buttonColor={"bg-red"}
            textColor="text-white"
            hover={true}
            href=""
          />
        </div>
      </div> */}
        </>
    );
};

export default AddRoute;
