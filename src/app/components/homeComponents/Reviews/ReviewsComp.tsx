import ReviewsCarousel from "./ReviewsCarousel";

const ReviewsComp = () => {
  return (
    <div className=" grid overflow-hidden w-full">
      <ReviewsCarousel direction="right" mask={true} />
    </div>
  );
};

export default ReviewsComp;
