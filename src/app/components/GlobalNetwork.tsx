"use client";
import Image from "next/image";
import React, { useRef } from "react";
import map from "../../../public/map.svg";
import sponsers from "../../../public/sponsers.svg";
import { useInView, motion } from "motion/react";

const GlobalNetwork = () => {
  const ref = useRef(null);

  // Check if the div is in view
  const isInView = useInView(ref, { margin: "0px 0px -60% 0px", once: true });

  return (
    <section>
      <div
        className="container px-2 md:px-0 flex flex-col gap-32 items-center py-16 mx-auto"
        ref={ref}
      >
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-2xl md:text-4xl text-center font-semibold leading-[30px] md:leading-[45px] max-w-lg">
            Huge Global Network of Fast VPN
          </h2>
          <p className="text-center md:text-left">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in position
          transition={{ duration: 0.5 }} // Animation duration
          className="space-y-10"
        >
          <Image src={map} alt="map-illustration" />
          <Image src={sponsers} alt="sponsers" />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
