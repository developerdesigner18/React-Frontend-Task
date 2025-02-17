import React from "react";

const MediaSpotlight = () => {
  const spotlightVideos = [
    {
      id: 1,
      thumbnail: "/images/Home/vid1.jpg",
      title: "Insert Video Title Here",
      image: "news-cameras",
    },
    {
      id: 2,
      thumbnail: "/images/Home/vid2.jpg",
      title: "Insert Video Title Here",
      image: "phones",
    },
    {
      id: 3,
      thumbnail: "/images/Home/vid3.jpg",
      title: "Insert Video Title Here",
      image: "interview",
    },
  ];

  return (
    <div className="px-4 pb-20 md:pb-[180px]">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl heading font-bold 2xl:leading-[60px] tracking-normal pb-12">
        Our Founder in the Media Spotlight
      </h2>

      <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-5 2xl:gap-10">
        {spotlightVideos.map((video) => (
          <div
            key={video.id}
            className="group relative w-full sm:w-[calc(50%-10px)] md:w-full"
          >
            <div className="relative overflow-hidden rounded-[20px] shadow-[0px_16px_72px_0px_#0000000D]">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="aspect-video object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/Play2.png" alt="play" />
              </div>
            </div>

            <h3 className="pt-5 2xl:pt-10 md:2xl xl:text-3xl 2xl:text-[32px] font-bold 2xl:leading-10 tracking-normal">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSpotlight;
