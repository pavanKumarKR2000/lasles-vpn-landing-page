"use client";
import Image from "next/image";
import React, { useRef } from "react";
import featureIllustration from "../../../public/features-illustration.svg";
import check from "../../../public/check.svg";
import { useInView, motion } from "motion/react";

const features = [
  { id: 1, text: "Powerfull online protection." },
  { id: 2, text: "Internet without borders." },
  { id: 3, text: "Supercharged VPN" },
  { id: 4, text: "No specific time limits." },
];

const Features = () => {
  const ref = useRef(null);

  // Check if the div is in view
  const isInView = useInView(ref, { margin: "0px 0px -60% 0px", once: true });

  return (
    <section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and in position
        transition={{ duration: 0.5 }} // Animation duration
        className="container px-2 md:px-0 flex flex-col md:flex-row justify-center items-center gap-20 py-32 mx-auto"
      >
        <Image src={featureIllustration} alt="feature-illustration" />
        <div className="flex flex-col items-center md:items-start gap-5 max-w-lg">
          <h2 className="text-2xl md:text-4xl text-center md:text-left font-semibold  leading-[30px] md:leading-[45px]">
            We Provide Many Features You Can Use
          </h2>
          <p className="text-center md:text-left">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="flex flex-col gap-4">
            {features.map((item) => (
              <li className="flex items-center gap-3" key={item.id}>
                <Image src={check} alt="check-icon" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
