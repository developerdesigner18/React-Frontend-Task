import { useFormik } from "formik";
import React from "react";
import SignUpSchema from "../../utils/contactFormValidationSchema";

const SignUpForm = () => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      handleReset();
    },
  });

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 xl:gap-20 max-w-[1301px] px-4 mx-auto pb-20 md:pb-[180px]">
      <div className="w-full md:max-w-[300px] lg:max-w-[400px]">
        <div className="relative w-full h-full bg-[#0027F2] rounded-[20px]">
          <img
            src="/images/Home/formperson.png"
            alt="Happy person giving thumbs up"
            className="max-w-[488px] md:w-[120%] lg:w-[470px] w-full object-contain relative md:absolute md:-right-6 bottom-0 z-[1]"
          />
          <img
            src="/images/Home/Mask-group.png"
            alt="logo"
            className="w-full h-full object-contain absolute inset-0 z-0"
          />
        </div>
      </div>

      <div className="md:w-[calc(100%-420px)] lg:w-[calc(100%-520px)] pb-[50px] md:py-[50px]">
        <div>
          <h3 className="text-[#0026F2] heading text-xl sm:text-3xl lg:text-4xl font-medium pb-2.5 tracking-normal">
            Sign Up Now
          </h3>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#272727] heading font-space pb-2.5 font-bold tracking-normal mb-[13px]">
            Join the Movement Today
          </h2>
          <p className="text-[#636766] text-xl font-medium 2xl:leading-[30px]">
            Interested in learning more or signing up for our program? Fill out
            the form below.
          </p>
        </div>

        <form
          className="flex flex-col gap-[26px] pt-6 md:pt-12 md:max-w-[544px]"
          onSubmit={handleSubmit}
        >
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
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your First name"
              className="w-full px-[22.5px] text-xl font-semibold leading-[26px] text-[#272727] bg-white shadow-[0px_12px_24px_0px_#0026F205] py-4 border border-[#DADEF2] rounded-[10px]"
            />
            {touched.firstName && errors.firstName ? (
              <span className="text-[#FF8484] text-sm">{errors.firstName}</span>
            ) : null}
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
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Last Name"
              className="w-full px-[22.5px] text-xl font-semibold leading-[26px] text-[#272727] bg-white shadow-[0px_12px_24px_0px_#0026F205] py-4 border border-[#DADEF2] rounded-[10px]"
            />
            {touched.lastName && errors.lastName ? (
              <span className="text-[#FF8484] text-sm">{errors.lastName}</span>
            ) : null}
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
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Email"
              className="w-full px-[22.5px] text-xl font-semibold leading-[26px] text-[#272727] bg-white shadow-[0px_12px_24px_0px_#0026F205] py-4 border border-[#DADEF2] rounded-[10px]"
            />
            {touched.email && errors.email ? (
              <span className="text-[#FF8484] text-sm">{errors.email}</span>
            ) : null}
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
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Phone Number"
              className="w-full px-[22.5px] text-xl font-semibold leading-[26px] text-[#272727] bg-white shadow-[0px_12px_24px_0px_#0026F205] py-4 border border-[#DADEF2] rounded-[10px]"
            />
            {touched.phone && errors.phone ? (
              <span className="text-[#FF8484] text-sm">{errors.phone}</span>
            ) : null}
          </div>

          <button
            type="submit"
            className="self-start mt-5 text-lg px-7 2xl:px-10 py-[18px] 2xl:text-xl font-semibold leading-none 2xl:h-[60px] bg-[#0026F2] cursor-pointer text-white rounded-[10px] hover:bg-blue-700 transition-colors shadow-[0px_4px_24px_0px_#0026F226]"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
