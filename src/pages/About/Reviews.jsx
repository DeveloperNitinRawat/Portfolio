import styled from "styled-components";
import ReviewsComp from "./ReviewsComp";
import ReviewCompData from "../../componentsdata/ReviewsCompData";
import SubHeading from "../../components/ui/SubHeading";
import Slider from "react-slick";

const StyleReviews = styled.section`
  padding-bottom: 9rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 7rem;
  }
`;

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <StyleReviews className="section">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="REVIEWS" />
        </div>
        <div className="row">
          <Slider {...settings}>
            {ReviewCompData.map((val, index) => {
              return (
                <ReviewsComp
                  para={val.para}
                  name={val.name}
                  client={val.client}
                  key={index}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </StyleReviews>
  );
};

export default Reviews;
