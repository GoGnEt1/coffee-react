import React from "react";
import testimonial from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

//pour obtenir les styles standards de swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="title">Testimonials</h2>
      <div className="swiper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={30}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonial.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="user flex flex-col items-center justify-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="lg:w-[180px] lg:h-[180px] lg:max-w-[180px] max-w-[150px] w-[100%] h-[100%] rounded-full object-contain"
                />
                <h3 className="text-black lg:text-2xl sm:text-xl text-[17px] font-semibold capitalize">
                  {item.name}
                </h3>
                <i className="text-black text-center text-[14px] leading-7">
                  "{item.feedback}"
                </i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
