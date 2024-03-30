import React from "react";
import Image from "next/image";
import Link from "next/link";

interface MeteorProps {
  title: string;
  description: string;
  image: string;
}

export function Meteor({ title, description, image }: MeteorProps) {
  return (
    <div className="w-[300px]">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full  rounded-full blur-3xl" />
        <div className="relative shadow-xl border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <img
            src={image}
            width={120}
            height={50}
            alt="product"
            className="mx-auto w-full h-[350px]"
          />

          <h1 className="font-bold text-xl text-white mb-1 relative z-50 mt-3">
            {title}
          </h1>
          <p className="text-white mb-3 overflow-hidden overflow-ellipsis text-sm">
            {description}
          </p>
          <Link href={"tel:+923212464402"}>
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
        </div>
      </div>
    </div>
  );
}
