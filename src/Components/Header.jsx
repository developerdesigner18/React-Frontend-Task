import React from "react";

const Header = () => {
  return (
    <header className="container w-full px-4 py-7 bg-white border-b border-gray-200">
      <div className="flex items-center gap-[169px] justify-between">
        {/* Logo and company name */}
        <div className="flex items-center space-x-[27px]">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[42px] h-[46px]"
          />
          <span className="text-4xl leading-12">
            <span className="text-[#16F7CF] font-medium">Head</span>
            <span className="text-[#0026F2] font-bold">Huntable</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-14">
          <a
            href="#"
            className="text-[#636766] hover:text-gray-900 text-xl font-semibold leading-[26px]"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[#636766] hover:text-gray-900 text-xl font-semibold leading-[26px]"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-[#636766] hover:text-gray-900 text-xl font-semibold leading-[26px]"
          >
            Our Features
          </a>
          <a
            href="#"
            className="text-[#636766] hover:text-gray-900 text-xl font-semibold leading-[26px]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#636766] hover:text-gray-900 text-xl font-semibold leading-[26px]"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-[#636766] hover:text-gray-900 text-xl font-semibold leading-[26px]"
          >
            Tour
          </a>
        </nav>

        {/* CTA Button */}
        <button className="px-4 py-2 text-xl font-semibold bg-[#0026F2] cursor-pointer text-white rounded-[10px] hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
