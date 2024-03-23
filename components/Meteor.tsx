import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import Link from "next/link";

interface MeteorProps {
  title: string;
  description: string;
}

export function Meteor({ title, description }: MeteorProps) {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full  rounded-full blur-3xl" />
        <div className="relative shadow-xl border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}

          <img src={"/product.jpg"} />

          <h1 className="font-bold text-xl text-white mb-4 relative z-50 mt-4">
            {title}
          </h1>

          {/* <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {description}
          </p> */}
          <Link href={"tel:+923173362620"}>
            <button className="flex gap-2 items-center border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Book Now
              <Image
                src={"/booking.png"}
                alt="whatsapp"
                className="mt-[2px]"
                width={18}
                height={18}
              />
            </button>
          </Link>

          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </div>
    </div>
  );
}
