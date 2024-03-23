"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Nav from "./Nav";
import { HeroText } from "./HeroText";

export function Hero() {
  const images = ["/hero-one.jpg", "/hero-two.jpg", "/hero-three.jpg"];
  return (
    <ImagesSlider
      className="h-[45rem] flex flex-col justify-start w-full"
      images={images}
    >
      <Nav />
      <HeroText />
    </ImagesSlider>
  );
}
