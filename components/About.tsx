"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "Medogate Pharma is a leading pharmaceutical company dedicated to advancing healthcare through innovative solutions. Committed to enhancing the well-being of individuals worldwide, we prioritize research and development to deliver high-quality medications that address a diverse range of medical needs. With a focus on excellence, integrity, and patient-centricity, we strive to set new standards in the pharmaceutical industry, contributing to a healthier future for all.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/about.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "At Medogate Pharma, our mission is to improve global health outcomes by developing and providing access to innovative pharmaceutical solutions. We are driven by a commitment to excellence, integrity, and compassion in all aspects of our work. Through relentless research, development, and collaboration, we aim to address unmet medical needs and empower individuals to lead healthier, more fulfilling lives. By prioritizing patient well-being and fostering partnerships with healthcare professionals, organizations, and communities worldwide, we endeavor to make a meaningful and lasting impact on public health.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/mission.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return <StickyScroll content={content} />;
}
