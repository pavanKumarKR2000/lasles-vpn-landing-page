"use client";
import React, { useRef } from "react";
import heroIllustration from "../../../public/hero-illustration.svg";
import user from "../../../public/user.svg";
import location from "../../../public/location.svg";
import server from "../../../public/server.svg";
import Image from "next/image";
import { useInView, motion } from "motion/react";

const facts = [
  { id: 1, icon: user, number: "90+", text: "Users" },
  { id: 2, icon: location, number: "30+", text: "Locations" },
  { id: 3, icon: server, number: "50+", text: "Servers" },
];

const Hero = () => {
  const ref = useRef(null);

  // Check if the div is in view
  const isInView = useInView(ref, { margin: "0px 0px -40% 0px", once: true });

  return (
    <section>
      <div className="container px-2 md:px-0 mx-auto flex flex-col pt-44 gap-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in position
          transition={{ duration: 0.5 }} // Animation duration
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-20"
          ref={ref}
        >
          <div className="flex flex-col items-center md:items-start gap-5 max-w-lg">
            <h2 className="text-2xl md:text-5xl text-center md:text-left font-semibold leading-[40px] md:leading-[70px]">
              Want anything to be easy with LaslesVPN.
            </h2>
            <p className="text-center md:text-left">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <Image src={heroIllustration} alt="hero illustration" />
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-center justify-center md:divide-x">
          {facts.map((item) => (
            <div
              className="flex flex-col md:flex-row items-center gap-4 md:gap-9 px-24 py-6"
              key={item.id}
            >
              <Image src={item.icon} alt={`${item.text}-logo`} />
              <div className="flex flex-col items-center md:items-start justify-between">
                <p className="text-2xl font-semibold">{item.number}</p>
                <p className="text-xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
