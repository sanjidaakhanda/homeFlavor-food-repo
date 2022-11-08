import React from "react";
import { FaHome } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4  text-neutral-content">
        <div className="items-center grid-flow-col text-sky-500">
          <p className="text-xl">
            <FaHome></FaHome> HomeFlavorFooD
          </p>
        </div>

        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-sky-500">
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
