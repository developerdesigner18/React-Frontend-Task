import React from "react";

const HeadHuntableBanner = () => {
  return (
    <div className="px-4 py-20 md:pt-[230px] md:pb-[180px]">
      <div className="w-full bg-[#0026F2] shadow-[0px_16px_36px_0px_#0026F233] text-white rounded-[20px] px-2 sm:px-8 py-12 md:py-[86px] relative">
        <div className="absolute top-1/2 h-[calc(100%-50px)] opacity-50 md:opacity-100 md:h-[105%] xl:h-[485px] -translate-y-1/2 left-0 ">
          <img
            src="/images/Home/bannerRight.png"
            alt=""
            className="object-contain h-full "
          />
        </div>
        <div className="absolute top-1/2 h-[calc(100%-50px)] opacity-50 md:opacity-100 md:h-[105%] xl:h-[485px] -translate-y-1/2 right-0">
          <img
            src="/images/Home/bannerLeft.png"
            alt=""
            className="object-contain h-full"
          />
        </div>

        <div className="relative z-[1] max-w-[767px] mx-auto w-full flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl heading font-bold pb-2.5 sm:pb-0 leading-normal lg:leading-[60px] tracking-normal">
            Join the HeadHuntable Trend!
          </h2>
          <p className="text-[16px] sm:text-lg lg:text-xl font-semibold leading-7 pb-5 sm:pb-9 tracking-normal">
            Ensure a smooth transition for your departing employees and gain
            recognition for your efforts.
          </p>
          <button className="px-5 py-2 sm:px-9 sm:py-4 text-lg 2xl:text-xl leading-[26px] bg-white text-[#0026F2] rounded-[10px] font-semibold hover:bg-gray-100 transition-colors">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadHuntableBanner;
