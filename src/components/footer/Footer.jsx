import React from "react";
import { FaTwitter} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://twitter.com/Swapy_mk" target="_blank"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTwitter className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-black">Twitter</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://api.whatsapp.com/send/?phone=917057332679&text&type=phone_number" target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-black">WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/swapyy_mk/" target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p className="text-black">Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2023 </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
