import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./common/Button";

function NavLink({ to, children }: any) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute z-50 top-0 right-0 w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      }  transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex items-center justify-center filter  bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link href="/">
          <a>
            <img src="/logo.png" />
          </a>
        </Link>
      </div>
      <div className=" flex-row justify-center flex ">
        <Button
          buttonText="Download Our App"
          buttonColor={"bg-darkblueopacity"}
          textColor={"text-primary"}
          hover={false}
          href=""
        />
        <Button
          buttonText="Join Our Waitlist"
          buttonColor={"bg-primary"}
          textColor={"text-white"}
          hover={false}
          href="/waitlist"
        />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={` flex filter drop-shadow-md bg-white px-4  md:px-44 py-4 h-20 items-center ${
        open && " mb-20 md:mb-0"
      }`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link href="/">
          <a>
            <img src="/logo.png" />
          </a>
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAq1BMVEX///8AAAAREiTa2tvq6uodHR2goKCHh4dYWFjExMQODyIAABcAABoAABwAABUREiN8fHzx8fGurq4HCR+NjZX39/eTk5NSUlKUlJpBQUwnKDbKysoODg44ODhNTU28vLwmJiaCgorV1dltbnYAAB8AAAxmZ290dH1jY2OlpaV0dHSLi4sXFxfl5eUZGyo0M0BZWWFKSlQjJTOpqa83OUabnaRNUFlgYGl6e4ID5DtBAAAD0UlEQVR4nO3ba3OaSgCHcRaSJnJZo7u27JrGrBugjadcFITv/8kORm319MykL2Ax9v+b8QIkmXkGWBw3WBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCecT3emrKYTY1mzb8So76a6vprtIuSzmbAH012EzE10Tcx3kW8mwkYDhD2aCJsOEEZmBsLmA3TdGuiyZgOEvZoIs1bmwxwjYdYX012mrtDWndGs54WprvZatvhkjJGLMwAAAAAAAAD8nWY3g+nzS+DJw63R76XO3D70NvPnDFe119P3pZPHocMe+9lnn4fu6mtK0/jM7O++9tE1xOzKb/oYGq82zHoauoqQpz66hpmbPTftJcz8fNh/femny5oNfDA+9fepanF/O5h7g/N+AAAAAAAAAAB/qdHrfUdWhv7p/o/cdDqR8TB0zk+Tf7rsMnUHyB947baLkNHQRXvdz88YuTHufT3cOmfi/rH3La41bNl51/PQSQedh90NXXTQ+VThj6GLjjq+VfpCRvud6XN3WU+X9JnKmjmjbswv5jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuGLOler+7vILYdlXCmEfzSHMPTzsk1fbZsx22a+ldhP7tfHC7cPcsk2Q6f59Nt5vGnt5TmV5LEsL5q7z7KOU7cOCuPY97lFv7FHCU0apzyjZtHRFKCGMEZItCSm5YO/8wS6Nx/+79uwnxidrTrcc9ljKaaqaUJEmTFSYhWFTVFtnS4i+ycPlUorlshiJ9rU0ucfc3blgu+7b89tp8bbk7k6X3bvdWsbaNYHttU8B89ul4DTMpuE41omX6JgQ9cJtkiR5JJZOo0M5J/VmVBJ5s9z9nsEutt0mL6mfpsKTvpsrUQbSS1PVlkhPBmmaUl3rQpVck03KtdYxzxrlnYb5dc7zMI4bwShnVURjVbCIBE4TFgtSLuYRlT+Wa5PHYbtb1o1qNjkX0ziJN1tVVE2ilRjlkcob3fBKiaasqyavVPFd8qps1CYozsNctmlSzqQM3XVd69oO821QaT4XjnSSURMuGjEvnMhoWHscxUoXXFSqVmEZh5zHXImplmHB63ZHtM2iUXqTqHiU1lysqnblYbQ7XscCvQ7kqmGSJ1FMYr7OMrYNlUfz4iWsadQekpokwuyY6K5tX7BMykD40i6oZCLK5FpmTFARpDItbFlQEYmArl1BS2Fn6XZ7HmYH7Zno+W8P3w683ZnJqOfaPnNpez761G03mB7r98OE+zZU2Ow4ZLiHJXc/oDD7OJqw3arD6XLtnzyuD8I+mn8B38SATEHH4WoAAAAASUVORK5CYII=" />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className=" flex-row justify-center hidden md:flex">
          <Button
            buttonText="Download Our App"
            buttonColor={"bg-darkblueopacity"}
            textColor={"text-primary"}
            hover={false}
            href=""
          />
          <Button
            buttonText="Join Our Waitlist"
            buttonColor={"bg-primary"}
            textColor={"text-white"}
            hover={false}
            href="/waitlist"
          />
        </div>
      </div>
    </nav>
  );
}
