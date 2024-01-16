import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import CardDemo from "@/public/demoHero1.jpg";

export default function Card({
  cardTitle,
  cardContents,
  buttonContent,
  buttonLink,
  imageLink,
}) {
  const onClick = () => {
    console.log("hello from card component");
  };

  return (
    <div className="w-[18rem] bg-gradient-to-br from-sky-700 via-sky-700 to-sky-600 p-3 rounded-md shadow-lg hover:translate-y-[-2px]">
      <div className="border-2 border-neutral-200 rounded-lg">
        <Image
          src={imageLink}
          width={500}
          height={200}
          alt="demo card"
          className="rounded-lg"
        />
      </div>

      <div className="space-y-2 p-2">
        <h1 className="font-semibold text-lg">{cardTitle}</h1>
        <p>{cardContents}</p>
        <br />
        <Link href={buttonLink}>
          <Button
            buttonContent={buttonContent}
            customWidth={"w-full"}
            onClick={onClick}
          />
        </Link>
      </div>
    </div>
  );
}
