import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", text: "About Us" },
    { href: "/", text: "How It Works" },
    { href: "/", text: "Our Features" },
    { href: "/", text: "Pricing" },
    { href: "/", text: "Blog" },
    { href: "/", text: "Tour" },
  ];
  const pathName = true;

  return (
    <header className=" bg-white border-b border-[#0026F21A]">
      <div className="container w-full px-4 py-[18px] sm:py-5 lg:py-0 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-5 2xl:gap-[27px]">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-5 sm:h-9 2xl:h-[46px] object-contain"
          />
          <span className="text-2xl sm:text-3xl 2xl:text-4xl 2xl:leading-12">
            <span className="text-[#16F7CF] font-medium">Head</span>
            <span className="text-[#0026F2] font-bold">Huntable</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-10 2xl:gap-[54px]">
          {navLinks.map((nav) => (
            <a
              key={nav.text}
              href="#"
              className="text-[#636766] hover:text-gray-900 text-lg xl:text-xl font-semibold leading-[100px]"
            >
              {nav.text}
            </a>
          ))}
        </nav>

        {/* mobile sidebar */}
        <div className={isMobileMenuOpen ? "fixed inset-0 z-50 lg:hidden" : ""}>
          <div
            className={
              isMobileMenuOpen
                ? "bg-black opacity-70 absolute inset-0 lg:hidden"
                : ""
            }
            onClick={toggleMobileMenu}
          />

          <div
            className={`fixed inset-y-0 right-0 max-md:w-2/3 max-lg:w-1/2 lg:hidden  h-full bg-white transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:w-auto`}
          >
            <div className="border-b border-[#0026F21A] w-full px-4 py-[18px] sm:py-5 lg:py-0">
              <div className="flex items-center justify-between gap-2 sm:gap-5 2xl:gap-[27px]">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="h-5 sm:h-9 2xl:h-[46px] object-contain"
                />
                {/* <span className="text-2xl sm:text-3xl">
                  <span className="text-[#16F7CF] font-medium">Head</span>
                  <span className="text-[#0026F2] font-bold">Huntable</span>
                </span> */}
                <svg
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleMobileMenu}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M19 5L5 19M5.00001 5L19 19"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className={`block py-2 px-3 font-medium uppercase 
                      ${pathName === link.href ? "active" : "text-[#222929]"} 
                    `}
                  >
                    {link.text}
                  </a>
                </li>
              ))}

              <button className="block md:hidden text-lg px-7 2xl:px-10 py-[18px] 2xl:text-xl font-semibold leading-none 2xl:h-[60px] bg-[#0026F2] cursor-pointer text-white rounded-[10px] hover:bg-blue-700 transition-colors shadow-[0px_4px_24px_0px_#0026F226]">
                Get Started
              </button>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className=" hidden md:block text-lg px-7 2xl:px-10 py-[18px] 2xl:text-xl font-semibold leading-none 2xl:h-[60px] bg-[#0026F2] cursor-pointer text-white rounded-[10px] hover:bg-blue-700 transition-colors shadow-[0px_4px_24px_0px_#0026F226]">
            Get Started
          </button>
          <button className="flex lg:hidden">
            <img
              src="/images/menus.png"
              alt="menus"
              className="size-6 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
