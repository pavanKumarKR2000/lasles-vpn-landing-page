"use client";
import React, { useRef } from "react";
import PricingCard from "./PricingCard";
import { motion, useInView } from "motion/react";

const pricings = [
  {
    id: 1,
    plan: "Free Plan",
    perks: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    id: 2,
    plan: "Standard Plan",
    perks: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9",
  },
  {
    id: 3,
    plan: "Premium Plan",
    perks: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12",
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -60% 0px", once: true });

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Stagger delay of 0.2 seconds
        delayChildren: 0.5, // Delay of 0.5 seconds before staggering starts
      },
    },
  };

  return (
    <section>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView && "animate"}
        className="container mx-auto px-2 md:px-0"
        ref={ref}
      >
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-2xl md:text-4xl font-semibold  leading-[30px] md:leading-[45px]">
            Choose Your Plan
          </h2>
          <p className="text-center md:text-left">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
          {pricings.map((item) => (
            <PricingCard
              key={item.id}
              plan={item.plan}
              perks={item.perks}
              price={item.price}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
