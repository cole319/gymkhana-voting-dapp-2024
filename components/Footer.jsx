import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className=" bg-sky-950 py-8 px-60 text-neutral-200">
      {/* <hr className="w-full h-[1px] mx-auto mt-8 bg-gradient-to-r from-slate-700 to-sky-600 border-0"></hr> */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-neutral-50 text-lg font-semibold">
            © 2023 Suryarghya Saha{" "}
            <span className="text-neutral-300 text-normal font-normal">&</span>{" "}
            Siddharth Toppo
          </h1>
          <h1 className="text-neutral-300">All rights reserved</h1>
        </div>
        <div className="flex space-x-6">
          <BsTwitterX className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
          <BsFillEnvelopeFill className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
          <BsLinkedin className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
