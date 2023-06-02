import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade } from "react-reveal";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      profession: "Web Developer",
      message:
        "I have taken several courses from this website, and I must say they are top-notch. The instructors explain complex concepts in a simple and understandable way. Thanks to these courses, I have significantly improved my skills as a web developer.",
      image:
        "https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      profession: "Data Analyst",
      message:
        "The courses offered on this website have been a game-changer for my career. The content is comprehensive, and the hands-on projects helped me apply what I learned. I highly recommend these courses to anyone looking to excel in the field of data analysis.",
      image:
        "https://imglarger.com/Images/before-after/ai-image-upscaler-2-after.jpg",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      profession: "Graphic Designer",
      message:
        "I've always had a passion for design, and the courses on this website have helped me refine my skills and explore new techniques. The instructors are knowledgeable, and the course materials are engaging. I'm grateful for the valuable knowledge I've gained from these courses.",
      image:
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s93-pa-4802-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b1e69abe76c9b6f333ad818a7a94d0da",
    },
    // Add more testimonials here...
  ];

  return (
    <div className="py-8 mt-32 mx-8 rounded-lg bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-2xl text-[#14B99B] font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            See what our students say about us
          </p>
        </div>
        <div className="mt-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Fade bottom>
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 text-center">
                        {testimonial.message}
                      </p>
                    </div>
                    <div className="testimonial-info dark:text-gray-300">
                      <div className="testimonial-image">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full h-16 w-16 object-cover mx-auto"
                        />
                      </div>
                      <div className="testimonial-details text-center pb-10">
                        <div className="testimonial-name text-gray-900 dark:text-gray-100">
                          {testimonial.name}
                        </div>
                        <div className="testimonial-profession">
                          {testimonial.profession}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
