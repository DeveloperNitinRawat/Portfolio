import styled from "styled-components";

const StyleReviewsComp = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  & .review_para {
    position: relative;
    border-left: 5px solid ${({ theme }) => theme.color.borderColor};
    padding: 3rem 2rem;
    background-color: ${({ theme }) => theme.color.bgColor};
    margin-bottom: 4rem;
    text-align: justify;
    &:hover {
      border-left: 5px solid ${({ theme }) => theme.color.primary};
      transition: all 0.5s ease-in-out;
    }
    &::before {
      position: absolute;
      content: "";
      clip-path: polygon(100% 0, 0 0, 0 99%);
      background-color: ${({ theme }) => theme.color.bgColor};
      width: 3rem;
      height: 3rem;
      left: 20%;
      top: 100%;
    }
  }
  & .review_data {
    & h3 {
      font-size: 2.5rem;
      font-family: "Work Sans", sans-serif;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 992px) {
    & .review_data {
      & h3 {
        font-size: 2.3rem;
      }
    }

    @media screen and (max-width: 768px) {
      & .review_data {
        & h3 {
          font-size: 2.2rem;
        }
      }
    }
  }
`;

const ReviewsComp = ({ para, name, client }) => {
  return (
    <StyleReviewsComp>
      <div className="review_para">
        <p>{para}</p>
      </div>
      <div className="review_data">
        <h3>{name}</h3>
        <p>{client}</p>
      </div>
    </StyleReviewsComp> 
  );
};

export default ReviewsComp;
