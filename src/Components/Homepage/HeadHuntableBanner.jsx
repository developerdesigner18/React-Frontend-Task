import React from "react";

const HeadHuntableBanner = () => {
  return (
    <div className="w-full min-h-[384px] bg-[#0026F2] text-white rounded-[20px] py-[86px] relative">
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-100">
          <div className="absolute top-[-51px] left-0 z-50">
            <img
              src="/images/Home/bannerRight.png"
              alt=""
              className="w-[243px] h-[485px] z-50"
            />
          </div>
          <div className="absolute top-[-51px] right-0 z-50">
            <img
              src="/images/Home/bannerLeft.png"
              alt=""
              className="w-[243px] h-[485px] z-50"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-bold py-2 leading-[60px] tracking-normal">
          Join the HeadHuntable Trend!
        </h2>
        <p className="text-xl mt-2.5 font-semibold leading-7 tracking-normal">
          Ensure a smooth transition for your departing employees and gain
          recognition for your efforts.
        </p>
        <button className="mt-9 px-9 py-4 text-xl leading-[26px] bg-white text-[#0026F2] rounded-[10px] font-semibold hover:bg-gray-100 transition-colors">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default HeadHuntableBanner;
