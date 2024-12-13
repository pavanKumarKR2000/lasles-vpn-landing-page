"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import classNames from "classnames";
import menu from "../../../public/menu.svg";

const nav_items = [
  { id: 1, item: "About" },
  { id: 2, item: "Features" },
  { id: 3, item: "Pricing" },
  { id: 4, item: "Testimonials" },
  { id: 5, item: "Help" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [hideShadow, setHideShadow] = useState(true);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest < previous!) {
      setHidden(false);
    } else {
      setHidden(true);
    }

    if (scrollY.get() > 1) {
      setHideShadow(false);
    } else {
      setHideShadow(true);
    }
  });

  const variants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  return (
    <motion.nav
      variants={variants}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className={classNames(
        "fixed top-0 left-0 right-0 bg-white",
        hideShadow ? "shadow-none" : "shadow-md"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-2 md:px-0 relative">
        <div className="flex items-center gap-3">
          <Image src={logo} className="h-9 w-9" alt="logo" />
          <h1>
            Lasles <span className="font-semibold">VPN</span>
          </h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
            {nav_items.map((item) => (
              <li key={item.id}>{item.item}</li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-center gap-10">
          <button>Sign In</button>
          <button className="btn-outlined">Sign Up</button>
        </div>
        <Image
          src={menu}
          alt="hamburger-icon"
          className="block md:hidden"
          onClick={() => setShowMenuItems(!showMenuItems)}
        />
        <AnimatePresence>
          {showMenuItems && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[100%] left-0 right-0 bg-white shadow-md"
            >
              <ul className="flex flex-col items-center gap-4 px-2 py-6">
                {nav_items.map((item) => (
                  <li key={item.id}>{item.item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
