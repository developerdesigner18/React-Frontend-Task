import React from "react";

const HeroSection = () => {
  return (
    <div className="px-4 pt-20 md:pt-[106px] border-b border-b-[#0026F21A]">
      <div className="max-w-[1096px] w-full mx-auto text-center">
        <div className="md:px-5">
          <h3 className="text-[#0026F2] heading font-medium text-[16px] sm:text-2xl lg:text-4xl lg:leading-[84px] tracking-normal">
            Human Resources Appreciation Program
          </h3>
          <h1 className="text-[#272727] heading text-[28px] tracking-tight sm:text-[50px] lg:text-[64px] font-bold sm:tracking-normal">
            Help Your Departing Staff <br />
            Get Into Their Next Role!
          </h1>
          <p className="text-[#636766] text-sm sm:text-xl lg:text-2xl font-medium lg:leading-9">
            We will pay you, our very hardworking human resource workers, a
            finder's fee for helping your staff onto our platform (depending on
            how many people we can help and certain other criteria). On average,
            save your company one to two months of the cost of severance.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -z-[1] bottom-0 left-0 right-0 h-1/2 md:h-[235px] rounded-t-[20px] bg-[#16F7CF] shadow-[0px_68px_150px_0px_#16F7CF1A]"></div>
          <img
            src="/images/Home/HomeHero.png"
            alt="hero"
            className="max-w-[880px] lg:max-w-[980px] w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
