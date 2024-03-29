"use client";
import { supabase } from "@/app/supabase";
import { Meteor } from "@/components/Meteor";
import { useEffect, useState } from "react";

// const SERVICES = [
//   {
//     title: "All Kind ",
//     description:
//       "Our Split AC repair service offers quick and efficient solutions to keep your cooling system running smoothly. Our expert technicians diagnose and fix issues with precision, ensuring optimal performance and comfort.",
//   },
//   {
//     title: "Building ",
//     description:
//       "Experience our efficient AC ventilation installation service, guaranteeing optimal indoor air quality and comfort. Our expert technicians ensure a seamless installation process.",
//   },
//   {
//     title: "BUILDING FAHU ",
//     description:
//       "Discover our air filtration system installation service for superior indoor air quality. Our skilled technicians ensure seamless installation, promoting a healthy and comfortable environment",
//   },

//   {
//     title: "Water Pumps",
//     description:
//       "Pumping Solutions (Building Service, Residential & Commercial, Irrigation & Agriculture, Industrial & Infrastructure, Waste Water)",
//   },
//   {
//     title: "Swimming Pools",
//     description:
//       "We provide different type of Steam and Sauna. Steam baths use moist heat, saunas offer dry heat sessions. Steam rooms are kept at around...",
//   },
//   {
//     title: "Electrical & Plumbing",
//     description:
//       "We offer full range of electrical and plumbing services for both residential and commercial clients. We provide qualified and trained...",
//   },
//   {
//     title: "Motor Winding",
//     description:
//       "We aim to get it right the first time, in good time and with the minimum of concern. We know how crucial it is to get your equipment...",
//   },
//   {
//     title: "Solar Water Heaters",
//     description:
//       "We provide reliable turnkey solar central heating systems to residential, commercial, and industrial facilities. We are professionally...",
//   },
//   {
//     title: "Professional Paint Services",
//     description:
//       "Revitalize your home or office with our skilled wall painting service. From color consultations to flawless execution, we've got you covered!",
//   },
// ];

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getProducts() {
      setIsLoading(true);
      const { data: product, error } = await supabase
        .from("products")
        .select("*");
      console.log(product);
      if (error) alert("There is a problem while loading your groups");
      if (!error) setProducts(product);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  return (
    <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
      {products.map((product) => {
        return (
          <Meteor
            key={product.title}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        );
      })}
    </div>
  );
}

export default Products;
