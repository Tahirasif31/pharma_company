import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";

import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { GetQuote } from "@/components/GetQuote";
import { SparklesPreview } from "@/components/Sparkles";
import Products from "./../components/Products";
import Loading from "./../components/Loading";

const review = [{}];

export default function Home() {
  return (
    <div>
      <Loading />
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
        <Products />
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
