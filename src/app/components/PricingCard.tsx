import Image from "next/image";
import React from "react";
import box from "../../../public/box.svg";
import tick from "../../../public/tick.svg";
import { motion } from "motion/react";
import classNames from "classnames";

interface PricingCardProps {
  plan: string;
  perks: Array<string>;
  price: string;
}

const PricingCard = ({ plan, perks, price }: PricingCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={classNames(
        "border flex flex-col justify-between border-[#DDDDDD] px-16 py-10 h-[700px] rounded-md",
        plan === "Premium Plan" && "border-2 border-[#F53838]"
      )}
    >
      <div className="flex flex-col items-center gap-10">
        <Image src={box} alt="box-illustration" />
        <p className="font-semibold text-lg">{plan}</p>
        <ul className="flex flex-col gap-3">
          {perks.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Image src={tick} alt="tick-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-1 text-2xl">
          <span className="font-semibold">{price}</span>
          {price !== "Free" && (
            <>
              <span>/</span>
              <span>month</span>
            </>
          )}
        </div>
        <button
          className={classNames(
            plan === "Premium Plan"
              ? "rounded-full btn-primary !px-11"
              : "btn-outlined"
          )}
        >
          Select
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
