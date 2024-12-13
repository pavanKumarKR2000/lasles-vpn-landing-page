import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full rounded-md bg-white hidden md:flex items-center justify-between p-14 h-64  absolute -top-32 shadow-md">
      <div className="flex flex-col gap-5 max-w-lg">
        <h2 className="text-4xl font-semibold  leading-[45px]">
          Subscribe Now for Get Special Features!
        </h2>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div>
        <button className="btn-primary">Subscribe Now</button>
      </div>
    </div>
  );
};

export default Subscribe;
