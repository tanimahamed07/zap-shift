import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div>
      <div className="text-center mb-24">
        <h3 className="text-3xl text-center font-bold my-8">Review</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          quidem assumenda consequatur doloribus excepturi obcaecati itaque
          quisquam tempora, expedita alias voluptates placeat voluptate dolor
          sed quibusdam amet ea blanditiis adipisci.
        </p>
      </div>
      <Swiper
      loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          slideShadows: true,
          scale: 0.75
        }}
        autoplay= {{
          delay: 2000,
          disableOnInteraction: false
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
