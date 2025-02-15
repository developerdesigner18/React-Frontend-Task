import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-[106px]">
      <div className="w-[1060px] mx-auto text-center">
        <h3 className="text-[#0026F2] font-medium text-4xl leading-[84px] tracking-normal">
          Human Resources Appreciation Program
        </h3>
        <h1 className="text-[#272727] text-[64px] font-bold tracking-normal">
          Help Your Departing Staff <br />
          Get Into Their Next Role!
        </h1>
        <p className="text-[#636766] text-2xl font-medium leading-9">
          We will pay you, our very hardworking human resource workers, a
          finder's fee for helping your staff onto our platform (depending on
          how many people we can help and certain other criteria). On average,
          save your company one to two months of the cost of severance.
        </p>
      </div>
      <div className="w-[1096px] mx-auto">
        <img src="/images/Home/HomeHero.png" alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
