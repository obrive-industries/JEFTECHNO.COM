"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import DownloadSection from "./sections/DownloadSection";
import WhyPss from "./sections/WhyPss";

const PowerSystemStudies = () => {

  

  return (
    <div className="bg-[#232427]">
      <Hero videoSrc="/Consultancy/Consulting - Industrial.mp4" />
      <ProductIntro 
        
        
      />
      <DetailedContent />
      <AreaOfExpertise />
      <WhyPss/>
      <DownloadSection />
    </div>
  );
};

export default PowerSystemStudies;
