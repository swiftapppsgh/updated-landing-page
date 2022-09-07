import Link from "next/link";
import { useEffect } from "react";

const Footer = () => {
    return (
        <footer className="footer flex flex-col bg-primary py-10 px-10 sm:px-24 md:px-44">
            <Link href="/">
                <a>
                    <img
                        src="https://res.cloudinary.com/mest-kitchen-app/image/upload/v1662391096/Trober_logo_fz2qkc.png"
                        alt="Trober Logo"
                        className=" w-3/6 sm:w-1/6 "
                    ></img>
                </a>
            </Link>
            {/* <div className=" bg-white h-0.5 w-full my-10"></div> */}
            {/* <div className="flex flex-col justify-between items-start md:flex-row">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Services</p>
          </h3>
          <ol>
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
          </ol>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Partner</p>
          </h3>
          <ol>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Add your van to our fleet</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Host</a>
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Know us</p>
          </h3>
          <ol>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">About us</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Join the team</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Blog</a>
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl text-white">
            <p className="text-white mb-2 md:mb-10 font-bold">Privacy</p>
          </h3>
          <ol>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <a href="/">Terms and Conditions</a>
            </li>
            <li className="font-normal text-base md:text-xl text-white md:py-2">
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-4 md:justify-end">
        <div>
          <img src="/playstore.png" />
          <img src="/appstore.png" />
        </div>
      </div> */}
            <div className=" bg-white h-0.5 w-full my-10"></div>
            <p className="text-white">© Trober 2022</p>
        </footer>
    );
};

export default Footer;
