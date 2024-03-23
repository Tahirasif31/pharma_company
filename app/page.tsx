import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { GetQuote } from "@/components/GetQuote";
import { SparklesPreview } from "@/components/Sparkles";

const review = [{}];

const SERVICES = [
  {
    title: "All Kind ",
    description:
      "Our Split AC repair service offers quick and efficient solutions to keep your cooling system running smoothly. Our expert technicians diagnose and fix issues with precision, ensuring optimal performance and comfort.",
  },
  {
    title: "Building ",
    description:
      "Experience our efficient AC ventilation installation service, guaranteeing optimal indoor air quality and comfort. Our expert technicians ensure a seamless installation process.",
  },
  {
    title: "BUILDING FAHU ",
    description:
      "Discover our air filtration system installation service for superior indoor air quality. Our skilled technicians ensure seamless installation, promoting a healthy and comfortable environment",
  },

  {
    title: "Water Pumps",
    description:
      "Pumping Solutions (Building Service, Residential & Commercial, Irrigation & Agriculture, Industrial & Infrastructure, Waste Water)",
  },
  {
    title: "Swimming Pools",
    description:
      "We provide different type of Steam and Sauna. Steam baths use moist heat, saunas offer dry heat sessions. Steam rooms are kept at around...",
  },
  {
    title: "Electrical & Plumbing",
    description:
      "We offer full range of electrical and plumbing services for both residential and commercial clients. We provide qualified and trained...",
  },
  {
    title: "Motor Winding",
    description:
      "We aim to get it right the first time, in good time and with the minimum of concern. We know how crucial it is to get your equipment...",
  },
  {
    title: "Solar Water Heaters",
    description:
      "We provide reliable turnkey solar central heating systems to residential, commercial, and industrial facilities. We are professionally...",
  },
  {
    title: "Professional Paint Services",
    description:
      "Revitalize your home or office with our skilled wall painting service. From color consultations to flawless execution, we've got you covered!",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section
        id="services"
        className="mx-auto xl:max-w-[1080px] md:max-w-[1000px] mt-[80px]"
      >
        <p className="text-[38px] font-[600] text-center pb-5 md:pb-10">
          Our Products
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          {SERVICES.map((ser) => {
            return (
              <Meteor
                key={ser.title}
                title={ser.title}
                description={ser.description}
              />
            );
          })}
        </div>
      </section>
      <GlobeDemo />
      <div id="solutions">
        <ExpertsTeam />
      </div>

      <BestService />
      <section>
        <p className="text-[38px] font-[600] text-center">Our Vision</p>
        <LayoutGridDemo />
      </section>
      <InfiniteMovingCardsDemo />
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
        <div className="">
          <div>
            <SparklesPreview />
          </div>
        </div>
        <div id="contact">
          <GetQuote />
        </div>
      </div>
    </div>
  );
}
