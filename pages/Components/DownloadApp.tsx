const DownloadApp = () => {
  return (
    <div className="mt-96 pb-24 md:px-24 bg-darkblueopacity">
      <div className="flex flex-col lg:flex-row">
        <img src="/app.png" className=" -mt-44 mb-10 sm:mb-0" />
        <div className="flex flex-col sm:ml-10 px-10  justify-center  sm:text-left">
          <h1 className="sm:text-5xl text-3xl font-extrabold text-center md:text-left">
            Download the Mobile App
          </h1>
          <p className="sm:w-9/12 text-xl mt-10 font-medium text-justify">
            Enjoy a seamless, easy and fast experience whenever you want to book
            or plan a trip. We’ve simplified the booking process so you can save
            time and money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
