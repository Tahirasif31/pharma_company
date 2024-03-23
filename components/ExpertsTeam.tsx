"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ExpertsTeam() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Discover ultimate pharmaceutical
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Solutions Today!
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Common Cold",
    image: "/t-one.jpg",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Diabetes",
    image: "/t-two.jpg",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Heart Disease",
    image: "/t-three.jpg",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Gastroesophageal Reflux Disease (GERD)",
    image: "/t-four.jpg",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Fever",
    image: "/t-five.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Anemia",
    image: "/t-six.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Remittent Fever",
    image: "/t-seven.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Influenza (Flu)",
    image: "/t-eight.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Strep Throat",
    image: "/t-nine.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Treatment of Chronic Conditions",
    image: "/t-ten.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Pain",
    image: "/t-eleven.jpg",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Post-Vaccination Fever",
    image: "/t-twelve.jpg",
    badge: "Mentor",
  },
];
