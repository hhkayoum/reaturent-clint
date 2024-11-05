import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Rating } from "@smastrom/react-rating";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);
  return (
    <div className="mb-20">
      <SectionTitle
        heading="Testimonials"
        subHeading="What Our Clint Say"
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-center "
      >
        {review.map((reviewItem) => (
          <SwiperSlide key={reviewItem._id} className="px-20 ">
            <div className="flex flex-col items-center gap-3">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviewItem.rating}
                readOnly
              />

              <p>{reviewItem.details}</p>
              <h3 className="text-3xl font-semibold text-orange-400">
                {reviewItem.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
