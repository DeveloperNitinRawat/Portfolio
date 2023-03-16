import styled from "styled-components";

const SubHeading = ({ text }) => {
  const SubHeading = styled.div`
    position: relative;
    width: fit-content;
    margin-bottom: 5rem;
    & h2 {
      font-size: 4.1rem;
      position: relative;
      color: ${({ theme }) => theme.color.white};
      font-weight: bold;
      padding: 1.2rem 0;
      text-transform: uppercase;
      &::before {
        position: absolute;
        content: "";
        width: 65%;
        height: 5px;
        background-color: ${({ theme }) => theme.color.lightPrimary};
        border-radius: 10rem;
        bottom: 0;
        left: 0;
      }
      &::after {
        position: absolute;
        content: "";
        width: 25%;
        height: 5px;
        background-color: ${({ theme }) => theme.color.primary};
        bottom: 0;
        left: 0;
        border-radius: 10rem;
      }
    }
    & span {
      color: ${({ theme }) => theme.color.bgColor};
      display: inline-block;
      font-family: "Nunito", sans-serif;
      font-size: 6rem;
      font-weight: 900;
      left: 10%;
      line-height: 1;
      position: absolute;
      text-transform: uppercase;
      top: 100%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      white-space: nowrap;
      z-index: -1;
    }

    @media screen and (max-width: 992px) {
      margin-bottom: 4rem;
      & h2 {
        font-size: 3.7rem;
      }
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 3.5rem;
      & h2 {
        font-size: 3.4rem;
      }
      & span {
        font-size: 5.5rem;
      }
    }
  `;
  return (
    <SubHeading className="col-12">
      <h2>{text}</h2>
      <span>{text}</span>
    </SubHeading>
  );
};

export default SubHeading;
