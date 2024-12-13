import Image from "next/image";
import React from "react";
import star from "../../../public/star.svg";
import { motion } from "motion/react";

interface TestimonialsCardProps {
  id: number;
  name: string;
  place: string;
  review: string;
  rating: number;
  img: any;
}

const TestimonialsCard = ({
  name,
  place,
  review,
  rating,
  img,
}: TestimonialsCardProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="rounded-md border border-[#DDDDDD] p-7 flex-1 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={img} alt="profile-image" />
          <div className="flex flex-col items-start">
            <p className="font-semibold">{name}</p>
            <p>{place}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p>{rating}</p>
          <Image src={star} alt="star-icon" />
        </div>
      </div>
      <p>{review}</p>
    </motion.div>
  );
};

export default TestimonialsCard;
