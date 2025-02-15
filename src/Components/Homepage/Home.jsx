import React from "react";
import HeroSection from "./HeroSection";
import HeadHuntableBanner from "./HeadHuntableBanner";
import MediaSection from "./MediaSection";
import MediaSpotlight from "./MediaSpotlight";
import SignUpForm from "./SignUpForm";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="container">
        <HeadHuntableBanner />
      </div>

      <div className="container !mt-[180px]">
        <MediaSection />
      </div>

      <div className="container !mt-[100px]">
        <MediaSpotlight />
      </div>

      <SignUpForm />
    </div>
  );
};

export default Home;
