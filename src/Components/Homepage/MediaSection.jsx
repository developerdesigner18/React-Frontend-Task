import React from "react";

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

  return (
    <section className="px-[30px]">
      <h2 className="text-5xl font-bold leading-[60px] text-center text-[#272727] mb-10">
        As Seen on Top Media Companies
      </h2>
      <div className="flex flex-wrap justify-between items-center h-[163px]">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center">
            <img src={logo.src} alt={logo.alt} className="object-cover w-52" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
