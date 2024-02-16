import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

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
    <div className="w-[18rem] bg-gradient-to-br from-sky-700 via-sky-700 to-sky-600 p-4 rounded-md shadow-lg hover:translate-y-[-2px]">
      <div className="border-2 border-sky-200 rounded-lg">
        <Image
          src={imageLink}
          width={500}
          height={200}
          alt="demo card"
          className="rounded-md"
        />
      </div>

      <div className="space-y-2 p-2">
        <h1 className="font-semibold text-lg">{cardTitle}</h1>
        <p className="text-sky-200">{cardContents}</p>
        <br />
        <Link href={buttonLink}>
          <Button
            buttonContent={buttonContent}
            customWidth={"w-full"}
            onClick={onClick}
            bgColor={"bg-slate-50"}
            textColor={"text-slate-800"}
            hoverBgColor={"bg-transparent"}
            hoverTextColor={hoverTextColor}
            borderColor={"border-slate-50"}
          />
        </Link>
      </div>
    </div>
  );
}
