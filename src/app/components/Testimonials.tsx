"use client";
import React, { useRef } from "react";
import profile1 from "../../../public/profile-1.svg";
import profile2 from "../../../public/profile-2.svg";
import profile3 from "../../../public/profile-3.svg";
import TestimonialsCard from "./TestimonialsCard";
import { useInView, motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Viezh Robert",
    place: "Warsaw,poland",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    rating: 4.5,
    img: profile1,
  },
  {
    id: 2,
    name: "Yessica Christy",
    place: "Shanxi, China",
    review:
      "“I like it because I like to travel far and still can connect with high speed.”.",
    rating: 4.5,
    img: profile2,
  },
  {
    id: 3,
    name: "Kim Young Jou",
    place: "Seoul, South Korea",
    review:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    rating: 4.5,
    img: profile3,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px", once: true });

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
        ref={ref}
        className="container px-2 md:px-0 mx-auto space-y-16 pb-20 md:pb-64"
      >
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-2xl md:text-4xl font-semibold leading-[30px] md:leading-[45px] max-w-2xl text-center ">
            Trusted by Thousands of Happy Customers
          </h2>
          <p className="max-w-xl text-center">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {testimonials.map((item) => (
            <TestimonialsCard {...item} key={item.id} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
