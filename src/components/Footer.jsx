import React from "react";
import { logo2 } from "../assets";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" bg-black">
      <div className="container py-10 padding-l padding-r flex max-sm:flex-col justify-between items-center sm:items-start max-md:gap-14  max-sm:gap-10">
        <Link to="/">
          <img src={logo2} alt="" />
        </Link>
        <div>
          <p className="info-text !text-white max-sm:text-center">
            ©2023 Tech Haven. All Rights Reserved
          </p>
        </div>

        <div className="flex items-center justify-between gap-10 max-sm:w-full max-lg:hidden max-sm:flex">
          <FaFacebook className="text-white text-xl" />
          <FaInstagram className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
