import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import instagram from "../../../public/Instagram.svg";
import twitter from "../../../public/Twitter.svg";
import facebook from "../../../public/Facebook.svg";
import Subscribe from "./Subscribe";

const product = ["Download", "Pricing", "Locations", "Countries", "Blog"];
const engage = [
  "LaslesVPN ?",
  "FAQ",
  "Tutorials",
  "About Us",
  "Privacy Policy",
  "Terms of Service",
];
const earn_money = ["Affiliate", "Become Partner"];

const social_medias = [
  {
    id: 1,
    img: facebook,
  },
  {
    id: 2,
    img: twitter,
  },
  {
    id: 3,
    img: instagram,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="container px-2 md:px-0 mx-auto  flex flex-col md:flex-row gap-10 md:gap-0 items-center md:items-start  justify-between pb-10 pt-20  md:pt-40 relative">
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image src={logo} alt="logo" />
              <span>
                Lasles<span className="font-semibold">VPN</span>
              </span>
            </div>
            <p className="max-w-sm text-center md:text-left">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0 justify-between flex-1">
          <div className="space-y-5">
            <p className="font-semibold text-xl text-center md:text-left">
              Product
            </p>
            <ul className="flex flex-col items-center md:items-start  gap-2">
              {product.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="font-semibold text-lg text-center md:text-left">
              Engage
            </p>
            <ul className="flex flex-col items-center md:items-start gap-2">
              {engage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="font-semibold text-lg text-center md:text-left">
              Earn Money
            </p>
            <ul className="flex flex-col items-center md:items-start gap-2">
              {earn_money.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <Subscribe />
      </div>
    </footer>
  );
};

export default Footer;
