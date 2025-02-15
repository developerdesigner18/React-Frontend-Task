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
      <div className="container px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-[11px]">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-[42px] h-[46px] brightness-[1000] grayscale"
              />
              <span className="text-4xl text-white leading-12">
                <span className="font-medium">Head</span>
                <span className="font-bold">Huntable</span>
              </span>
            </div>
            <p className="text-2xl leading-9 tracking-normal font-medium mt-[35px]">
              Take control of your future
              <br />
              and secure your dream job with us.
            </p>
          </div>

          {/* Services and Company Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-white text-2xl font-bold leading-10 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xl leading-10 font-semibold text-[#B3B3B3]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="border-t border-gray-800">
            <div className="flex flex-col justify-between">
              <h3 className="text-white text-2xl font-bold leading-10 mb-4">
                Contact Us
              </h3>
              <div className="flex space-x-5">
                <a href="#" className="hover:text-white">
                  <img src="/images/Footer/Facebook.png" alt="fb" />
                </a>
                <a href="#" className="hover:text-white">
                  <img src="/images/Footer/twitter.png" alt="fb" />
                </a>
                <a href="#" className="hover:text-white">
                  <img src="/images/Footer/Instagram.png" alt="fb" />
                </a>
                <a href="#" className="hover:text-white">
                  <img src="/images/Footer/LinkedIn.png" alt="fb" />
                </a>
              </div>
              <div className="text-xl text-[#B3B3B3] font-semibold leading-9 mt-[26px] md:mb-0">
                <p>admin@headhuntable.io</p>
                <p>201 W 5th St, Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-[#242424] text-center py-6 text-xl leading-9 font-medium text-[#B3B3B3]">
        <p>HeadHuntable. All Rights Reserved. 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
