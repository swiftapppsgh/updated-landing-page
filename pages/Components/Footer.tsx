const Footer = () => {
  return (
    <footer className="footer flex flex-col bg-purple py-10 px-10 sm:px-24 mt-64">
      <img src="/logo.png" alt="Trober Logo" className=" w-3/6 sm:w-1/6 "></img>
      <div className=" bg-white h-0.5 w-full my-10"></div>
      <div className="flex flex-col justify-between items-start md:flex-row">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Services</p>
          </h3>
          <ul>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Daily</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Corporate</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Events</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Travel</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Tourism</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Partner</p>
          </h3>
          <ul>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Add your van to our fleet</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Host</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Know us</p>
          </h3>
          <ul>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">About us</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Join the team</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Privacy</p>
          </h3>
          <ul>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Terms and Conditions</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-4 md:justify-end">
        <div>
          <img src="/playstore.png" />
          <img src="/appstore.png" />
        </div>
      </div>
      <div className=" bg-white h-0.5 w-full my-10"></div>
      <p className="text-white">© Trober 2022</p>
    </footer>
  );
};

export default Footer;
