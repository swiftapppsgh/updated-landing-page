import Button from "./common/Button";

const BecomeAPartner = () => {
  return (
    <div className="flex justify-center items-center bg-red md:py-24 mt-44 lg:px-10 py-10 mb-64">
      <div className="bg-darkRed flex flex-row w-full ml-10 lg:-mr-96 lg:py-10 px-10">
        <div className="flex flex-col">
          <h1 className="m-4 lg:mb-24 text-white md:text-3xl">
            Become a Trober Partner Today
          </h1>

          <div className=" w-full md:w-9/12">
            <Button
              buttonColor={"bg-white"}
              buttonText="Find out more"
              textColor={"text-primary"}
              hover={false}
              href=""
            />
          </div>
        </div>
        <img
          src="/carmd.png"
          className="hidden md:block relative top-24 lg:hidden"
        />
      </div>
      <img src="/car.png" className="hidden lg:block w-7/12" />
    </div>
  );
};

export default BecomeAPartner;
