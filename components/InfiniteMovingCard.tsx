"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Medoget Pharma has truly transformed my life. Their range of medications has provided me with effective solutions for managing my chronic condition. I'm grateful for their dedication to producing high-quality pharmaceuticals that make a real difference in people's lives.",
    name: "Ahmed Abdullah Al-Mansoori",
    title: "Ras Al Khaimah",
  },
  {
    quote:
      "I've been relying on Medoget Pharma's products for years now, and I couldn't be happier with the results. Their commitment to innovation and safety ensures that I can trust their medications for myself and my family. Thank you, Medoget Pharma, for your unwavering dedication to excellence.",
    name: "Usama Ansari",
    title: "Karachi",
  },
  {
    quote:
      "As a healthcare professional, I've seen firsthand the positive impact of Medoget Pharma's medications on my patients. Their commitment to research and development shines through in the effectiveness of their products. I wholeheartedly recommend Medoget Pharma to anyone seeking reliable pharmaceutical solutions ",
    name: "Dr Saif Khan",
    title: "Lahore",
  },
  {
    quote:
      "Medoget Pharma has been a trusted partner in my journey to better health. Their knowledgeable staff and comprehensive range of medications have provided me with personalized care and effective treatment options. I'm grateful for their support and expertise",
    name: "Fahad Khalid",
    title: "Hyderabad",
  },
  {
    quote:
      "I can't thank Medoget Pharma enough for providing me with access to life-saving medications. Their commitment to affordability and accessibility ensures that everyone can benefit from their innovative pharmaceutical solutions. I highly recommend Medoget Pharma to anyone in need of reliable healthcare options",
    name: "Fatima Mohammed Al-Hashemi",
    title: "Abu Dhabi ",
  },
];
