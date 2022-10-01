import React from "react";
import logo from "../../../logo.png";
import git from "../../../gitf.png";
import linkedin from "../../../link.webp";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-2 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center">
    <div className="sm:w-[40%] wrapper flex items-center w-full h-[0.25px] bg-gray-200   " />
      <div className="flex flex-[1.5] justify-center items-center">
       <p> <img src={logo} alt="logo" className="w-32 ml-3" /> </p>
      </div>
    <div className="sm:w-[40%] wrapper flex w-full h-[0.25px] bg-gray-200 pl-0 " />
    </div>


    <div className="flex justify-center items-center flex-col p-0">
      <p className="text-white text-sm text-center pd-0 font-semibold">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-1">krypto'swallet@gmail.com</p>
      <div className="sm:w-[90%] w-full flex justify-center items-center" >
      <a href="https://www.linkedin.com/in/kartavya-panthi" target="_blank" className="text-white text-left text-4xl px-2" ><img src={linkedin} className="w-10 h-10 rounded-sm m-2"></img></a>
      <a href="https://github.com/Kartv07/krypto_world" target="_blank" className="text-white text-right text-4xl px-2" ><img src={git} className="w-10 h-10 rounded-sm "></img></a>
      </div>
    </div>

    <div className="sm:w-[20%] flex w-full h-[0.25px] bg-gray-200 mt-5 " />
    <div className="sm:w-[20%] flex w-full h-[0.25px] bg-gray-200 mt-1 " />

  </div>
);

export default Footer;
