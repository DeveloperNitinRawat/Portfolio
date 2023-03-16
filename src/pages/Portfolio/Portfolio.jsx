import styled from "styled-components";
import MyPortfolio from "./MyPortfolio";

const RightBody = styled.div``;

const Portfolio = () => {
  return (
    <>
      <RightBody className="right_body">
        <MyPortfolio />
      </RightBody>
    </>
  );
};

export default Portfolio;
