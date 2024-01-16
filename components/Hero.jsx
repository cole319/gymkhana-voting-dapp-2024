import Image from "next/image";
import HeroDemo from "@/public/demoHero.png";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div>
      <div className="px-60 py-20 bg-gradient-to-r from-sky-900 via-sky-600 to-sky-700 ">
        <div className="flex flex-col items-center">
          {/* <div className="w-1/2"> */}
          <h1 className="text-4xl font-bold text-sky-200 text-center pb-2">
            Welcome to
          </h1>
          <h1 className="text-6xl font-bold text-sky-50 text-center">
            Students' Gymkhana Voting
          </h1>
          <h1 className="text-3xl font-semibold text-sky-50 text-center pt-2">
            Indian Institute of Technology (Indian School of Mines) Dhanbad
          </h1>
          <h1 className="font-semibold text-sky-300 text-center pt-4">
            Fast, Secure and Trustworthy. Powered by{" "}
            <span className="text-sky-100">Ethereum</span>.
          </h1>
          {/* <h1 className="font-semibold text-sky-300 text-center"></h1> */}
          <br />
          <br />
          <p className="text-xl font-semibold text-sky-200">
            This is a short description about the objectives and goals of this
            web application
          </p>
          <br />
          <br />
          <div className="flex space-x-6">
            <BsTwitterX className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
            <BsFillEnvelopeFill className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
            <BsLinkedin className="w-5 h-5 cursor-pointer hover:translate-y-[-2px]" />
          </div>
          {/* </div> */}
          {/* <div className="w-1/2 flex justify-end">
            <Image src={HeroDemo} width={400} height={400} alt="demo hero" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
