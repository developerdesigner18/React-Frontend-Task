import React from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

const MediaSection = () => {
  const logos = [
    {
      name: "Muck Rack",
      src: "/images/Home/media1.png",
      alt: "Muck Rack logo",
    },
    {
      name: "Teambuilding.com",
      src: "/images/Home/media2.png",
      alt: "Teambuilding.com logo",
    },
    {
      name: "TechCrunch",
      src: "/images/Home/media3.png",
      alt: "TechCrunch logo",
    },
    {
      name: "Entrepreneur",
      src: "/images/Home/media4.png",
      alt: "Entrepreneur logo",
    },
    {
      name: "Forbes",
      src: "/images/Home/media5.png",
      alt: "Forbes logo",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pb-20 md:pb-[180px] px-4">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl heading font-bold leading-[60px] text-center text-[#272727] mb-10">
        As Seen on Top Media Companies
      </h2>
      <Marquee className={"flex gap-6"} pauseOnHover autoFill speed={100}>
        <div className="flex flex-wrap justify-between gap-10 sm:gap-20 items-center last:mr-10 sm:last:mr-20">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain object-center max-w-[230px] h-[60px]"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default MediaSection;
