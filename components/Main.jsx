import Card from "./Card";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import CardDemo from "@/public/demoCard.jpg";

export default function Main() {
  return (
    <div className="px-60 py-20 ">
      <div className="flex justify-center space-x-16">
        <Card
          cardContents={
            "This is a brief description of the functionality of this card"
          }
          cardTitle={"Candidate Registration"}
          buttonContent={"Go to portal"}
          buttonLink={"/candidateRegistration"}
          imageLink={CardDemo}
        />
        <Card
          cardContents={
            "This is a brief description of the functionality of this card"
          }
          cardTitle={"Voter Registration"}
          buttonContent={"Go to portal"}
          buttonLink={"/voterRegistration"}
          imageLink={CardDemo}
        />
        <Card
          cardContents={
            "This is a brief description of the functionality of this card"
          }
          cardTitle={"Candidates and Voters List"}
          buttonContent={"Go to portal"}
          buttonLink={"/lists"}
          imageLink={CardDemo}
        />
      </div>
      <br />
      <hr className="w-full h-[1px] mx-auto mt-8 bg-gradient-to-r from-slate-700 to-sky-600 border-0"></hr>
      <br />
      <div className="space-y-2">
        <h1 className="text-sky-950 font-semibold text-xl underline text-center">
          Important Links
        </h1>
        <div className="text-neutral-600 text-lg font-semibold flex flex-col space-y-2 items-center">
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/instructions"
          >
            <h1>Go to Instructions</h1>
            <FaArrowUpRightFromSquare />
          </Link>
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/candidatesList"
          >
            <h1> Go to Candidates List</h1>

            <FaArrowUpRightFromSquare />
          </Link>
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/votersList"
          >
            <h1>Go to Voters List</h1>

            <FaArrowUpRightFromSquare />
          </Link>
          <Link
            className="cursor-pointer hover:underline flex items-center space-x-2 text-center"
            href="/about"
          >
            <h1 className="">Go to About page</h1>
            <FaArrowUpRightFromSquare />
          </Link>
        </div>
      </div>
    </div>
  );
}
