import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Introduction from "../Introduction/Introduction";
import Company from "../Company/Company";
import PopulerCourses from "../PopulerCourses/PopulerCourses";
import Testimonials from "../Testimonials/Testimonials";
import InstructorProfiles from "../InstructorProfiles/InstructorProfiles";
import LearningResources from "../LearningResources/LearningResources";
import EnrollmentProcess from "../EnrollmentProcess/EnrollmentProcess";
import StudentSupport from "../StudentSupport/StudentSupport";
import CourseContact from "../CourseContact/CourseContact";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Introduction></Introduction>
      <Company></Company>
      <PopulerCourses></PopulerCourses>
      <Testimonials></Testimonials>
      <InstructorProfiles></InstructorProfiles>
      <LearningResources></LearningResources>
      <EnrollmentProcess></EnrollmentProcess>
      <StudentSupport></StudentSupport>
      <CourseContact></CourseContact>
    </div>
  );
};

export default Home;
