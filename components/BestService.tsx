import { BackgroundGradientDemo } from "./BackgroundGradient";

function BestService() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="md:px-5 px-1">
        <h2 className="md:text-[32px] text-[26px] font-[600] leading-[38px]">
          Book Best Products <br /> On Reasonable Price
        </h2>
        <p className="md:mt-3 mt-2">
          Step into a world where healthcare affordability meets uncompromised
          quality through our extensive selection of premier pharmaceutical
          offerings. With meticulous attention to detail, we&apos;ve curated a
          diverse range of products designed to cater to various health needs,
          all while ensuring that affordability remains a top priority.
        </p>
        <p className="md:mt-2 mt-1">
          Whether you&apos;re in search of essential medications to manage
          everyday ailments or specialized supplements to support your unique
          health goals, our catalog has something for everyone. Explore our
          expansive selection and experience the perfect harmony of
          effectiveness and affordability.With trusted pain management options
          and innovative wellness products, we have everything you need to
          support your health journey. Experience peace of mind knowing that
          each item is crafted with your health and satisfaction in mind.
        </p>
        <p className="mt-2 hidden md:block">
          Whether you&apos;re in search of trusted pain management options,
          revitalizing vitamins, or innovative wellness products, we&apos;ve got
          you covered. Every item in our inventory is designed to prioritize
          your health and well-being while remaining accessible to all. Take
          advantage of our commitment to value-driven healthcare and explore our
          extensive range today. From trusted pain relief options to
          cutting&mdash;edge wellness solutions, we&apos;ve handpicked each
          product with your health and satisfaction in mind.
        </p>
        <p className="mt-2 hidden md:block">
          Join us on our mission to democratize access to quality healthcare,
          empowering individuals to prioritize their well&mdash;being without
          financial strain.
        </p>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
    </div>
  );
}

export default BestService;
