import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Introduction from "../Introduction/Introduction";
import Company from "../Company/Company";
import PopulerCourses from "../PopulerCourses/PopulerCourses";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Introduction></Introduction>
      <Company></Company>
      <PopulerCourses></PopulerCourses>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
