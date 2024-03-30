"use client";
import Image from "next/image";
import { Button } from "./ui/moving-borders";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
export function HeroText() {
  const words = [
    {
      text: "pioneering",
      className: "text-white",
    },
    {
      text: "pharmaceutical",
      className: "text-white",
    },
    {
      text: "innovations.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] z-40">
      <p className="text-neutral-200 text-[13px] sm:text-base  ">
        Empowering health through
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={"https://chatwith.io/s/medoget-pharma-1"} target="_blank">
          <button className="flex gap-1 py-1 align-middle animate-shimmer text-[13px] md:text-[16px] md:py-[15px] text-white bg-slate-900 justify-center rounded-[1.75rem] border-neutral-200  border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-[22px] font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span>Whatsapp</span>
            <Image
              src={"/whatsapp.png"}
              alt="whatsapp"
              className="mt-[5px]"
              width={16}
              height={16}
            />
          </button>
        </Link>
        <Link href={"tel:+923212464402"}>
          <Button
            borderRadius="1.75rem"
            height={9}
            className="flex gap-1 dark:bg-slate-900 text-[13px] md:text-[16px] text-white dark:text-white border-neutral-200 dark:border-slate-800 px-[8px] md:py-[17px]"
          >
            Book Now
            <Image
              src={"/booking.png"}
              alt="whatsapp"
              className="mt-[2px]"
              width={16}
              height={16}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
