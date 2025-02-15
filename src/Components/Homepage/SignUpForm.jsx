import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-[1301px] mx-auto !my-[180px]">
      {/* Image Section */}
      <div className="w-full md:w-[448px] h-[906px] mb-6 md:mb-0">
        <div className="relative w-full md:w-[406px] h-[906px] bg-[#0027F2] rounded-[20px] overflow-hidden">
          <img
            src="/images/Home/formperson.png"
            alt="Happy person giving thumbs up"
            className="w-[488px] h-[721px] object-cover absolute bottom-0 z-50"
          />
          <img
            src="/images/logo.png"
            alt="logo"
            className="opacity-35 w-[431px] h-[596px] absolute bottom-[400px]"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-[795px]">
        <div className="mb-6">
          <h3 className="text-[#0026F2] text-4xl font-medium leading-[84px] tracking-normal">
            Sign Up Now
          </h3>
          <h2 className="text-5xl text-[#272727] font-space leading-[76px] font-bold tracking-normal mb-[13px]">
            Join the Movement Today
          </h2>
          <p className="text-[#636766] text-xl font-medium leading-[30px]">
            Interested in learning more or signing up for our program? Fill out
            the form below.
          </p>
        </div>

        <form className="space-y-[26px] mt-12 max-w-[544px]">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xl font-semibold leading-[26px] text-[#272727] mb-3"
            >
              First Name <span className="text-[#FF8484]">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your First name"
              className="w-full px-[22.5px] py-4 border border-[#DADEF2] rounded-[10px]"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-xl font-semibold leading-[26px] text-[#272727] mb-3"
            >
              Last Name <span className="text-[#FF8484]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your Last Name"
              className="w-full px-[22.5px] py-4 border border-[#DADEF2] rounded-[10px]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xl font-semibold leading-[26px] text-[#272727] mb-3"
            >
              Email <span className="text-[#FF8484]">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full px-[22.5px] py-4 border border-[#DADEF2] rounded-[10px]"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xl font-semibold leading-[26px] text-[#272727] mb-3"
            >
              Phone Number <span className="text-[#FF8484]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your Phone Number"
              className="w-full px-[22.5px] py-4 border border-[#DADEF2] rounded-[10px]"
            />
          </div>

          <button
            type="submit"
            className="mt-[20px] bg-[#0026F2] text-xl leading-[26px] font-semibold tracking-normal text-white py-[17px] px-[42px] rounded-[10px]"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
