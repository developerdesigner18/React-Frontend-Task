import React from "react";

const Footer = () => {
  const footerLinks = {
    services: {
      title: "Services",
      links: [
        { name: "How It Works", href: "#" },
        { name: "Our Features", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Tour", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "About Our Team", href: "#" },
        { name: "Our Assistants", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-[#272727] text-gray-300">
      <div className="container px-12 md:px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-10 md:gap-8">
          <div className="">
            <div className="flex items-center space-x-[11px]">
              <img
                src="/images/logo.png"
                alt="logo"
                className="h-5 sm:h-9 2xl:h-[46px] object-contain brightness-[1000] grayscale"
              />
              <span className="text-2xl md:text-4xl text-white">
                <span className="font-medium">Head</span>
                <span className="font-bold">Huntable</span>
              </span>
            </div>
            <p className="text-base md:text-2xl leading-5 md:leading-9 tracking-normal font-medium mt-4 md:mt-[35px]">
              Take control of your future
              <br />
              and secure your dream job with us.
            </p>
          </div>

          {/* Services and Company Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="">
              <h3 className="text-white text-base md:text-2xl font-bold leading-5 md:leading-10 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm md:text-xl leading-7 md:leading-10 font-semibold text-[#B3B3B3]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className=" lg:w-fit border-t border-gray-800">
            <div className="flex flex-col justify-between">
              <h3 className="text-white text-base md:text-2xl font-bold leading-5 md:leading-10 mb-5">
                Contact Us
              </h3>
              <div className="flex gap-4 md:gap-5">
                <a href="#" className="hover:text-white">
                  <img
                    src="/images/Footer/Facebook.png"
                    alt="fb"
                    className="h-4 md:h-full"
                  />
                </a>
                <a href="#" className="hover:text-white">
                  <img
                    src="/images/Footer/twitter.png"
                    alt="tw"
                    className="h-4 md:h-full"
                  />
                </a>
                <a href="#" className="hover:text-white">
                  <img
                    src="/images/Footer/Instagram.png"
                    alt="in"
                    className="h-4 md:h-full"
                  />
                </a>
                <a href="#" className="hover:text-white">
                  <img
                    src="/images/Footer/LinkedIn.png"
                    alt="li"
                    className="h-4 md:h-full"
                  />
                </a>
              </div>
              <div className="text-sm md:text-xl leading-7 md:leading-10 font-semibold text-[#B3B3B3] mt-[10px] md:mt-[26px] md:mb-0">
                <p className="break-words">admin@headhuntable.io</p>
                <p>201 W 5th St, Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#242424] border-t border-t-[#B3B3B3] text-center py-4 sm:py-6 text-[16px] sm:text-xl sm:leading-9 font-medium text-[#B3B3B3]">
        <p>HeadHuntable. All Rights Reserved. 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
