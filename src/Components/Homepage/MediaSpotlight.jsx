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
    <>
      <h2 className="text-5xl font-bold leading-[60px] tracking-normal mb-[49px]">
        Our Founder in the Media Spotlight
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {spotlightVideos.map((video) => (
          <div key={video.id} className="group relative">
            <div className="relative overflow-hidden w-[520px] h-[320px] rounded-[20px] shadow-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-[520px] h-[320px] object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/images/Play2.png" alt="play" />
              </div>
            </div>

            <h3 className="mt-5 h-[81px] text-[32px] font-bold leading-10 tracking-normal">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default MediaSpotlight;
